import React, { useState, useEffect } from "react";
import { Waypoint } from "react-waypoint";
import { Form, Radio, Skeleton } from "antd";
import { useQuery } from "@apollo/client";
import MultiSelect from "../multi-select";
import { ModalStandard, cursorPagination, Localize } from "components/service";
import { useDebounce } from "components/use-hooks";
import { Loader } from "components/request-result";
import Icons from "components/icons";
import { helperFunc } from "utils";

import "./radio-select.scss";

const RadioSelect = ({
  form,
  initialValue = [],
  model,
  name,
  query,
  disabled = false,
  location = false,
  tagInfo = false,
  onChangeSetFilter = () => {},
  modalTitle = "FORMS.Title_AddData",
  label = "FORMS.Input_Label",
  modelCursorLabel = ["title"],
  objectWhere = {},
  extraVariables = {},
  skipQuery = true,
  modalButtonContent = () => {},
  setLabelModel = () => {},
  setExtraProp = () => {},
  setBtnConfirm = () => {},
  formResetConfirm = () => {},
  filteredNodes = false,
  rules = false,
  extraProp,
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
      first: 50,
      where: objectWhere,
      ...extraVariables,
    },
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first",
    notifyOnNetworkStatusChange: true,
  });

  const { fetchMoreAction, nodes, pageInfo } = cursorPagination({
    label: modelCursorLabel,
    model,
    data,
    loading,
    fetchMore,
    extraProp,
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

  const labelModel = helperFunc
    ?.getLabel(value, nodesAndInitValue)
    ?.map(({ label }) => label);

  const extraPrpoModel = helperFunc
    ?.getLabel(value, nodesAndInitValue)
    ?.map(({ extraProp }) => extraProp);

  /*eslint-disable */
  useEffect(() => {
    setLabelModel(labelModel);
    setExtraProp(extraPrpoModel);
  }, [value]);
  /*eslint-enable */

  filteredNodes =
    filteredNodes &&
    nodes.filter(
      (obj2) => !filteredNodes.some((obj1) => obj1.organizer_id === obj2.value)
    );

  return (
    <Form.Item
      initialValue={initialValue.length ? dataInit[0] : ""}
      name={name}
      label={Localize({ children: label }).props.children}
      rules={rules}
    >
      <ModalStandard
        disabled={disabled}
        width={400}
        extraClass={"modal-form"}
        afterClose={() => {
          // setSearchValue("");
        }}
        onCancel={onCancel}
        modalButton={
          modalButtonContent(setSkip) || (
            <div className="d-flex align-items-center w-100">
              <span
                onClick={() => {
                  setSkip(false);
                }}
                className={`select-model-modal-button ${
                  disabled && "disabled"
                } ${location ? "light-theme" : "dark-theme"} w-100`}
              >
                {value ? (
                  labelModel
                ) : location ? (
                  <span className="placeholder-text">
                    <Localize>FORMS.Input_Placeholder_PleaseChose</Localize>
                  </span>
                ) : (
                  <span className="placeholder-text">
                    <Localize>FORMS.Input_Placeholder_NotAssigned</Localize>
                  </span>
                )}

                {tagInfo}

                <Icons.Arrow className="arrow-down" />
              </span>
            </div>
          )
        }
      >
        <strong className="modal-title">
          <span className="text">
            <Localize>{modalTitle}</Localize>
          </span>
        </strong>

        <MultiSelect
          setSearch={setSearchValue}
          search={searchValue}
          onCancel={onCancel}
          setBtnConfirm={setBtnConfirm}
          formResetConfirm={formResetConfirm}
        >
          {loading && <Loader />}
          {searchValue && loading ? (
            <Skeleton active paragraph={{ rows: 6 }} />
          ) : (
            <Radio.Group
              className="group-radio"
              options={filteredNodes ? filteredNodes : nodes}
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
      </ModalStandard>
    </Form.Item>
  );
};

export default RadioSelect;
