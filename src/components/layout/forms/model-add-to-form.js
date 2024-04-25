import React, { useEffect } from "react";
import { Form, Button, Skeleton, Avatar } from "antd";
import { FileImageOutlined } from "@ant-design/icons";
import { useMutation, useQuery } from "@apollo/client";
import { Localize } from "components/service";
import { FormElements } from "components/layout";
import {
  errorNotification,
  successNotification,
} from "components/request-result";

const ModelAddToForm = ({
  action,
  showModal,
  name = "model_id",
  modelCursorLabel = ["title"],
  modelImagePath = "getImages[0]?.sizes['200x200']",
  modelCursorValue = "group_id",
  propsObj: { queries, queryNames, queryVars, mutation, mutationName, modelID },
  filteredNodes = false,
}) => {
  const { data: dataQuery, loading: loadingQuery } = useQuery(
    queries.queryInitalVal,
    {
      skip: !showModal,
      variables: { ...queryVars.queryInitalValVar },
      fetchPolicy: "cache-and-network",
      nextFetchPolicy: "cache-first",
    }
  );

  const [form] = Form.useForm();
  const [_setMutation, { loading: loadingMutation }] = useMutation(
    mutation,

    {
      refetchQueries: [queries.query],

      update(cache, { data }) {
        const {
          [mutationName]: { label, message },
        } = data;

        successNotification({
          title: label,
          description: message,
        });
      },
      onError(error) {
        errorNotification(error);
      },
    }
  );

  const initialValue = dataQuery?.[queryNames.queryInitalValName]?.length
    ? dataQuery?.[queryNames.queryInitalValName]?.map((id) => ({
        value: +id,
      }))
    : false;

  const dataInit = Array.isArray(initialValue)
    ? initialValue.map((modelObj) => modelObj.value.toString())
    : "";

  useEffect(() => {
    form.setFieldsValue({ [name]: dataInit });
  }, [dataInit, form, name]);

  return (
    <Form
      key="add-model-form"
      layout="vertical"
      className="add-model-form model-form multi-drawer"
      form={form}
      onFinish={(values) => {
        _setMutation({
          variables: {
            ...modelID,
            ...values,
          },
        });

        action();
      }}
    >
      {loadingQuery ? (
        <Skeleton active paragraph={{ rows: 10 }} />
      ) : (
        <FormElements.CheckboxGroup
          form={form}
          query={queries.query}
          model={queryNames.queryName}
          name={name}
          skipQuery={!showModal ? true : undefined}
          modelCursorValue={modelCursorValue}
          objectWhere={queryVars.queryVar.where}
          objectWhereExtra={queryVars.queryVar.whereExtra}
          modelCursorLabel={modelCursorLabel}
          modelImagePath={modelImagePath}
          filteredNodes={filteredNodes}
          extraClass="model-form multi-drawer"
          initialValue={initialValue}
          jsx={(img_path) => (
            <Avatar
              style={{
                marginRight: 10,
                borderRadius: 4,
                border: "1px solid var(--lightGray);",
              }}
              shape="square"
              size={50}
              icon={
                img_path ? (
                  <img src={img_path} alt="avatar" />
                ) : (
                  <FileImageOutlined />
                )
              }
            />
          )}
        />
      )}

      <div className="form-btn-holder">
        <Button className="light-bg" onClick={action}>
          <Localize>GLOBAL.Button_Text_Cancel</Localize>
        </Button>

        <Button
          className="btn-right"
          type="primary"
          htmlType="submit"
          loading={loadingMutation}
        >
          <Localize>GLOBAL.Button_Text_Confirm</Localize>
        </Button>
      </div>
    </Form>
  );
};

export default ModelAddToForm;
