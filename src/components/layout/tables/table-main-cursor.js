import React, { useState, useEffect } from "react";
import { Waypoint } from "react-waypoint";
import { Table, Empty, Skeleton } from "antd";
import { useQuery } from "@apollo/client";
import { cursorPagination, Localize } from "components/service";
import SkeletonCustom from "components/skeleton";
import { Loader } from "components/request-result";
import { useDebounce } from "components/use-hooks";

const SkeletonData = SkeletonCustom.TableData;

const TableMainCursor = ({
  model,
  query,
  currentObj,
  extraObj,
  searchText,
  objectWhere = {},
  tableHelper,
  children,
  varSet,
  extraClass = "",
  sortingName = false,
  resetSorting = false,
  setVariables = () => { },
  setDataModel = () => { },
  objOrderBy = [{ column: "ID", order: "DESC" }],
  tableLayout = "fixed",
  viewMode = "table",
  viewGrid = () => {},
  language = "de",
}) => {
  const perPage = varSet?.perPage ?? 50;
  const [orderBy, setOrderBy] = useState(objOrderBy);

  const variables = {
    text: useDebounce(searchText),
    first: perPage,
    where: objectWhere,
    orderBy,
    ...(varSet ?? undefined),
  };

  let { data, loading, fetchMore } = useQuery(query, {
    variables: { ...variables },
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first",
    // notifyOnNetworkStatusChange: true,
  });

  const { fetchMoreAction, pageInfo } = cursorPagination({
    model,
    data,
    loading,
    fetchMore,
  });

  model = data?.[model]?.edges?.map((edge) => edge.node);

  /*eslint-disable */
  useEffect(() => {
    setVariables(variables);
    setDataModel(model);
  }, [data]);

  useEffect(() => {
    if (resetSorting) setOrderBy([]);
  }, [resetSorting]);
  /*eslint-enable */

  const EmptyData = () => (
    <div className="no-data-box">
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      <span className="no-data-text">
        <Localize>GLOBAL.Text_NoData</Localize>
      </span>
    </div>
  );

  const dataSource = loading
    ? SkeletonData(tableHelper.columns, perPage, "my-2")
    : tableHelper.data(model, currentObj, variables, language, extraObj);

  return (
    <>
      {children}

      {viewMode === "table" ? (
        <Table
          className={`table-main ${extraClass}`}
          locale={{
            emptyText: <EmptyData />,
            triggerDesc: (
              <Localize>TABLES.Column_Sorting_Tooltip_Descending</Localize>
            ),
            triggerAsc: (
              <Localize>TABLES.Column_Sorting_Tooltip_Ascending</Localize>
            ),
            cancelSort: (
              <Localize>TABLES.Column_Sorting_Tooltip_Cancel</Localize>
            ),
          }}
          dataSource={dataSource}
          columns={tableHelper.columns}
          tableLayout={tableLayout}
          pagination={false}
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
                localStorage.setItem(sortingName, JSON.stringify(orderBy));
            }
          }}
        />
      ) : loading ? (
        <Skeleton active paragraph={{ rows: 20 }} />
      ) : model?.length ? (
        viewGrid({ model, loading, currentObj, variables, language, extraObj })
      ) : (
        <EmptyData />
      )}

      {pageInfo?.hasNextPage && (
        <>
          {pageInfo?.hasNextPage && (
            <Loader style={{ marginTop: "30px" }} type="block" />
          )}
          <Waypoint onEnter={() => fetchMoreAction()} />
        </>
      )}
    </>
  );
};

export default TableMainCursor;
