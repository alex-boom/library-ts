import React, { useState } from "react";
import { Waypoint } from "react-waypoint";
import { Form, Radio, Skeleton } from "antd";
import { useQuery } from "@apollo/client";
import MultiSelect from "../multi-select";
import { DrawerStandart, cursorPagination, Localize } from "components/service";
import { useDebounce } from "components/use-hooks";
import { Loader } from "components/request-result";
import Icons from "components/icons";
import { helperFunc } from "utils";

import "./radio-select-drawer.scss";

const RadioSelectDrawer = ({
  form,
  initialValue = [],
  model, // model name
  name, // field name
  query, // query name
  disabled = false,
  location = false,
  onChangeSetFilter = () => {},
  modalTitle = "FORMS.Title_AddData",
  label = "FORMS.Input_Label",
  modelCursorLabel = ["title"],
  modelCursorValue = "id",
  modelImagePath = "img_path",
  extraClass = "",
  objectWhere = {},
  objectWhereExtra = {},
  jsx = false,
  first = 50,
  skipQuery = true,
}) => {
  const [skip, setSkip] = useState(skipQuery);

  const dataInit = Array.isArray(initialValue)
    ? initialValue.map((modelObj) => modelObj.value.toString())
    : "";
  const value = Form.useWatch(name, form);
  const [searchValue, setSearchValue] = useState("");

  let { data, loading, fetchMore } = useQuery(query, {
    skip,
    variables: {
      text: useDebounce(searchValue),
      first,
      where: objectWhere,
      ...objectWhereExtra,
    },
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first",
    notifyOnNetworkStatusChange: true,
  });

  const { fetchMoreAction, nodes, pageInfo } = cursorPagination({
    label: modelCursorLabel,
    value: modelCursorValue,
    img_path: modelImagePath,
    model,
    data,
    loading,
    fetchMore,
    jsx,
  });

  const nodesAndInitValue = [
    ...nodes,
    ...(Array.isArray(initialValue) ? initialValue : []),
  ];
  nodes.unshift({
    value: "",
    label: <Localize>FORMS.Select_OptionLabel_NotAssigned</Localize>,
  });

  const onCancel = () => {
    if (value !== dataInit[0]) {
      form.setFieldsValue({ [name]: dataInit[0] });
    }
  };

  return (
    <Form.Item
      initialValue={initialValue.length ? dataInit[0] : ""}
      name={name}
      label={Localize({ children: label }).props.children}
    >
      <DrawerStandart
        disabled={disabled}
        extraClass={"modal-form filters"}
        afterClose={() => setSearchValue("")}
        onCancel={onCancel}
        modalButton={
          <div className="d-flex align-items-center w-100">
            <span
              onClick={() => {
                setSkip(false);
              }}
              className={`select-model-modal-button ${disabled && "disabled"} ${
                location ? "light-theme" : "dark-theme"
              } w-100`}
            >
              {value ? (
                helperFunc
                  .getLabel(value, nodesAndInitValue)
                  ?.map(({ label }) => label)
              ) : location ? (
                <span className="placeholder-text">
                  <Localize>FORMS.Input_Placeholder_PleaseChose</Localize>
                </span>
              ) : (
                <span className="placeholder-text">
                  <Localize>FORMS.Input_Placeholder_NotAssigned</Localize>
                </span>
              )}
              <Icons.Arrow className="arrow-down" />
            </span>
          </div>
        }
      >
        <strong className="modal-title">
          <span className="text">
            <Localize>{modalTitle}</Localize>
          </span>
        </strong>

        <MultiSelect
          setSearch={setSearchValue}
          onCancel={onCancel}
          extraClass={extraClass}
        >
          {loading && <Loader />}
          {searchValue && loading ? (
            <Skeleton active paragraph={{ rows: 6 }} />
          ) : (
            <Radio.Group
              className="group-radio"
              options={nodes}
              value={value}
              disabled={disabled}
              onChange={(e) => {
                form.setFieldsValue({ [name]: e.target.value });
                onChangeSetFilter(false, name, e.target.value);
              }}
            />
          )}

          {pageInfo && pageInfo.hasNextPage && (
            <>
              {loading && <Loader style={{ marginTop: "-30px" }} />}
              <Waypoint onEnter={() => fetchMoreAction()} />
            </>
          )}
        </MultiSelect>
      </DrawerStandart>
    </Form.Item>
  );
};

export default RadioSelectDrawer;
