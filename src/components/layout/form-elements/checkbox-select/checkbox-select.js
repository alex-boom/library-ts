import React, { useState, useEffect } from "react";
import { Waypoint } from "react-waypoint";
import { Form, Checkbox, Skeleton, Button } from "antd";
import { useQuery } from "@apollo/client";
import MultiSelect from "../multi-select";
import EditableTagGroup from "../editable-tag-group";
import { ModalStandard, cursorPagination, Localize } from "components/service";
import { useDebounce } from "components/use-hooks";
import { Loader } from "components/request-result";
import Icons from "components/icons";
import { helperFunc } from "utils";

import "./checkbox-select.scss";

const CheckboxSelect = ({
  form,
  initialValue = [],
  model,
  name,
  query,
  filteredNodes = false,
  location = false,
  filterValue,
  onChangeSetFilter = () => {},
  modalButtonText = "MODAL.Button_Text_Add",
  modalTitle = "MODAL.Title_Add",
  label = "FORMS.Input_Label",
  extraClassName = "",
  extraClass = "",
  modelCursorLabel = ["title"],
  modelCursorValue = "id",
  numberOfCol = false,
  objectWhere = {},
  extraVariables = {},
  first = 50,
  initialLang = false,
  tagInfo = true,
  jsx = () => {},
  skipQuery = true,
  setDataModel = () => {},
  disableSearch = false,
  sort = false,
  sortByCustomOrder = () => {},
}) => {
  const [skip, setSkip] = useState(skipQuery);

  const dataInit = Array.isArray(initialValue)
    ? initialValue?.map((modelObj) => modelObj?.value?.toString())
    : "";
  const value = Form.useWatch(name, form);
  const [searchValue, setSearchValue] = useState("");

  let { data, loading, fetchMore } = useQuery(query, {
    skip,
    variables: {
      text: useDebounce(searchValue),
      first,
      where: objectWhere,
      ...extraVariables,
    },
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first",
    notifyOnNetworkStatusChange: true,
  });

  const { fetchMoreAction, nodes, pageInfo } = cursorPagination({
    label: modelCursorLabel,
    value: modelCursorValue,
    model,
    data,
    loading,
    fetchMore,
    initialLang,
    jsx,
  });

  const setTags = (value) => {
    form.setFieldsValue({ [name]: value });
  };

  const onCancel = () => {
    if (JSON.stringify(value) !== JSON.stringify(dataInit)) {
      form.setFieldsValue({ [name]: dataInit });
    }
  };

  filteredNodes =
    filteredNodes && nodes.filter((node) => node.value !== filteredNodes);

  const nodesAndInitValue = filteredNodes
    ? [
        ...filteredNodes,
        ...(Array.isArray(initialValue)
          ? initialValue.filter((item) => item.label !== filterValue)
          : []),
      ]
    : [...nodes, ...(Array.isArray(initialValue) ? initialValue : [])];

  /*eslint-disable */
  useEffect(() => {
    setDataModel(data);
  }, [data]);
  /*eslint-enable */

  const tags = helperFunc
    .getLabel(value, nodesAndInitValue)
    ?.map((item) => item);

  return (
    <Form.Item
      initialValue={dataInit}
      name={name}
      label={Localize({ children: label }).props.children}
    >
      <EditableTagGroup
        name={name}
        numberOfCol={numberOfCol}
        setTags={setTags}
        tagInfo={tagInfo}
        initialLang={initialLang}
        jsx={jsx}
        onChangeSetFilter={onChangeSetFilter}
        tags={value ? (sort ? sortByCustomOrder(tags, "value") : tags) : []}
        extraClassName={extraClassName}
        location={location}
        model={model}
      >
        <ModalStandard
          width={400}
          extraClass={"modal-form"}
          // afterClose={() => setSearchValue("")}
          onCancel={onCancel}
          modalButton={
            <div>
              <Button type="text" icon={<Icons.Plus />}>
                <span
                  onClick={() => {
                    setSkip(false);
                  }}
                  className="ellipsis"
                >
                  <Localize>{modalButtonText}</Localize>
                </span>
              </Button>
            </div>
          }
        >
          <strong className="modal-title">
            <span className="text">
              <Localize>{modalTitle}</Localize>
            </span>
          </strong>

          <MultiSelect
            extraClass={extraClass}
            setSearch={setSearchValue}
            search={searchValue}
            onCancel={onCancel}
            disableSearch={disableSearch}
          >
            {loading && <Loader />}
            {searchValue && loading ? (
              <Skeleton active paragraph={{ rows: 6 }} />
            ) : (
              <Checkbox.Group
                className="group-checkbox"
                options={
                  filteredNodes
                    ? filteredNodes
                    : sort
                    ? sortByCustomOrder(nodes, "value")
                    : nodes
                }
                value={value}
                onChange={(value) => {
                  form.setFieldsValue({ [name]: value });
                  onChangeSetFilter(false, name, value);
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
      </EditableTagGroup>
    </Form.Item>
  );
};

export default CheckboxSelect;
