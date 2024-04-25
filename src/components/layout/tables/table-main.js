import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Empty } from "antd";
import { useQuery } from "@apollo/client";
import SkeletonCustom from "components/skeleton";
import { useDebounce } from "components/use-hooks";
import { Localize } from "components/service";

const SkeletonData = SkeletonCustom.TableData;

const TableMain = ({
    model,
    querySkip = false,
    objectWhere,
    tableVisible = true,
    sortingName = false,
    resetSorting = false,
    resetPaginationPage = false,
    setVariables = () => {},
    objOrderBy = [{ column: "ID", order: "DESC" }],
    tableLayout = "fixed",
    query,
    currentObj,
    routeUrl,
    currentPage,
    searchText,
    tableHelper,
    children,
    varSet,
    extraClass = "",
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

    useEffect(() => {
        if (resetSorting) setOrderBy(resetSorting);
    }, [resetSorting]);
    /*eslint-enable */

    useEffect(() => {
        if (searchText !== "" && searchText !== undefined) {
            navigate(routeUrl);
        }

        if (resetPaginationPage) {
            navigate(routeUrl);
        }
    }, [searchText, navigate, routeUrl, resetPaginationPage]);

    const dataSource = loading
        ? SkeletonData(tableHelper.columns, perPage, "my-2")
        : tableHelper.data(model.data, currentObj, variables);

    return (
        <>
            {children}

            {tableVisible && (
                <Table
                    className={`table-main ${extraClass}`}
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
                    tableLayout={tableLayout}
                    size="middle"
                    pagination={{
                        // pageSizeOptions: [ "10", "20" ],
                        className: "main-table-pagination",
                        showSizeChanger: false,
                        position: ["bottomLeft"],
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
                            const orderBy = [
                                {
                                    column: column.columnIndex,
                                    order: order === "ascend" ? "ASC" : "DESC",
                                },
                            ];

                            setOrderBy(orderBy);
                            sortingName &&
                                localStorage.setItem(
                                    sortingName,
                                    JSON.stringify(orderBy)
                                );
                        }
                    }}
                />
            )}
        </>
    );
};

export default TableMain;
