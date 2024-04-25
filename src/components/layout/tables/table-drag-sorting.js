import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { Table, Empty } from "antd";
import { arrayMoveImmutable } from "array-move";
import { useQuery } from "@apollo/client";
import SkeletonCustom from "components/skeleton";
import { useDebounce } from "components/use-hooks";
import { Localize } from "components/service";

const SkeletonData = SkeletonCustom.TableData;

const SortableItem = SortableElement((props) => <tr {...props} />);
const SortableBody = SortableContainer((props) => <tbody {...props} />);

const TableDragSorting = ({
    querySkip = false,
    model,
    query,
    currentObj,
    routeUrl,
    currentPage,
    searchText,
    objectWhere = {},
    tableHelper,
    children,
    varSet,
    mutationOrderSet,
    extraClass = "",
    tableVisible = true,
    setVariables = () => {},
    objOrderBy = [{ column: "ID", order: "DESC" }],
    tableLayout = "fixed",
}) => {

    const navigate = useNavigate();
    const perPage = varSet?.perPage ?? 10;
    const [orderBy, setOrderBy] = useState(objOrderBy);

    const variables = {
        text: useDebounce(searchText),
        first: perPage,
        page: currentPage,
        where: objectWhere,
        orderBy,
        ...(varSet ?? undefined),
    };

    let { data, loading } = useQuery(query, {
        skip: querySkip,
        variables: { ...variables },
        fetchPolicy: "cache-and-network",
        nextFetchPolicy: "cache-first",
    });

    model = data?.[model] ?? {};
    const { paginatorInfo } = model;

    /*eslint-disable */
    useEffect(() => {
        setVariables(variables);
    }, [data]);
    /*eslint-enable */

    useEffect(() => {
        if (searchText !== "" && searchText !== undefined) {
            navigate(routeUrl);
        }

        if (typeof objectWhere === "object") {
            navigate(routeUrl);
        }
    }, [searchText, navigate, routeUrl, objectWhere]);

    const initDataSource = loading
        ? SkeletonData(tableHelper.columns, perPage, "my-2")
        : tableHelper.data(model.data, currentObj, variables);

    const [dataSource, setDataSource] = useState(initDataSource);

    /*eslint-disable */
    useEffect(() => {
        setDataSource(initDataSource);
    }, [data]);
    /*eslint-enable */

    const onSortEnd = ({ oldIndex, newIndex }) => {
        if (oldIndex !== newIndex) {
            const newData = arrayMoveImmutable(
                dataSource.slice(),
                oldIndex,
                newIndex
            ).filter((el) => !!el);

            setDataSource(newData);

            const arrNewDataId = newData.map(({ key }) => key);

            mutationOrderSet({
                variables: {
                    ...(varSet ?? undefined),
                    ids: arrNewDataId,
                },
            });
        }
    };

    const DraggableContainer = (props) => (
        <SortableBody
            useDragHandle
            disableAutoscroll
            helperClass="row-dragging"
            onSortEnd={onSortEnd}
            {...props}
        />
    );

    const DraggableBodyRow = ({ ...restProps }) => {
        const index =
            dataSource &&
            dataSource.findIndex((x) => x.key === restProps["data-row-key"]);
        return <SortableItem index={index} {...restProps} />;
    };

    return (
        <>
            {children}

            {tableVisible && (
                <Table
                    className={`table-main ${extraClass}`}
                    rowKey={(item) => item.key}
                    locale={{
                        emptyText: (
                            <div className="no-data-box">
                                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                                <span className="no-data-text">
                                    <Localize>GLOBAL.Text_NoData</Localize>
                                </span>
                            </div>
                        ),
                        triggerDesc: (
                            <Localize>
                                TABLES.Column_Sorting_Tooltip_Descending
                            </Localize>
                        ),
                        triggerAsc: (
                            <Localize>
                                TABLES.Column_Sorting_Tooltip_Ascending
                            </Localize>
                        ),
                        cancelSort: (
                            <Localize>
                                TABLES.Column_Sorting_Tooltip_Cancel
                            </Localize>
                        ),
                    }}
                    dataSource={dataSource}
                    columns={tableHelper.columns}
                    components={{
                        body: {
                            wrapper: DraggableContainer,
                            row: DraggableBodyRow,
                        },
                    }}
                    tableLayout={tableLayout}
                    // size="middle"
                    pagination={{
                        // pageSizeOptions: [ "10", "20" ],
                        showSizeChanger: false,
                        position: ["bottomCenter"],
                        pageSize: perPage,
                        total: paginatorInfo?.total,
                        current: currentPage,
                        hideOnSinglePage: !(
                            paginatorInfo?.total / paginatorInfo?.perPage >
                            1
                        ),
                        onChange: (page) => {
                            let path =
                                page === 1
                                    ? `${routeUrl}`
                                    : `${routeUrl}/page/${page}`;
                            navigate(path);
                        },
                    }}
                    onChange={(pagination, filters, { column, order }) => {
                        if (column && order) {
                            setOrderBy([
                                {
                                    column: column.columnIndex,
                                    order: order === "ascend" ? "ASC" : "DESC",
                                },
                            ]);
                        }
                    }}
                />
            )}
        </>
    );
};

export default TableDragSorting;
