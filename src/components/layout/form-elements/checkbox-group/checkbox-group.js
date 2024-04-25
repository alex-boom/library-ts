import React, { useState } from "react";
import { Waypoint } from "react-waypoint";
import { Form, Checkbox, Skeleton } from "antd";
import { useQuery } from "@apollo/client";
import MultiSelect from "../multi-select";
import { cursorPagination, Localize } from "components/service";
import { useDebounce } from "components/use-hooks";
import { Loader } from "components/request-result";

import "./checkbox-group.scss";

const CheckboxGroup = ({
    form,
    initialValue = [],
    model,
    name,
    label = "",
    query,
    filteredNodes = false,
    modelCursorLabel = ["title"],
    modelCursorValue = "id",
    modelImagePath = "img_path",
    objectWhere = {},
    objectWhereExtra = {},
    jsx = false,
    first = 50,
    initialLang = false,
    extraClass = "",
    skipQuery = false,
    fetchPolicy = "cache-and-network",
}) => {
    const dataInit = Array.isArray(initialValue)
        ? initialValue.map((modelObj) => modelObj.value.toString())
        : "";
    const value = Form.useWatch(name, form);
    const [searchValue, setSearchValue] = useState("");

    let { data, loading, fetchMore } = useQuery(query, {
        skip: skipQuery,
        variables: {
            text: useDebounce(searchValue),
            first,
            where: objectWhere,
            ...objectWhereExtra,
        },
        fetchPolicy,
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
        initialLang,
        jsx,
    });

    filteredNodes = nodes.filter((node) => node.value !== filteredNodes);

    return (
        <Form.Item
            initialValue={dataInit}
            name={name}
            label={Localize({ children: label }).props.children}
        >
            <MultiSelect
                setSearch={setSearchValue}
                extraClass={extraClass}
                disableBtn={true}
            >
                {loading && <Loader />}
                {searchValue && loading ? (
                    <Skeleton active paragraph={{ rows: 6 }} />
                ) : (
                    <Checkbox.Group
                        className="group-checkbox"
                        options={filteredNodes ? filteredNodes : nodes}
                        value={value}
                        onChange={(value) => {
                            form.setFieldsValue({ [name]: value });
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
        </Form.Item>
    );
};

export default CheckboxGroup;
