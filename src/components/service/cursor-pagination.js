import { Localize } from "components/service";

const cursorPagination = ({
  model,
  data,
  loading,
  fetchMore,
  label = ["title"],
  value = "id",
  img_path = "img_path",
  extraProp,
  initialLang = false,
  jsx = () => {},
}) => {
  const { [model]: { pageInfo, __typename: typename, edges: node = [] } = {} } =
    data ?? {};

  /* eslint-disable no-eval */
  const nodes = node.map(({ node }) => ({
    value: node[value],
    img_path: eval(`node.${ img_path }`),
    extraProp: eval(`node?.${extraProp}`),
    label:
      model === "usersCursor" ? (
        `${node[label[0]]}${node[label[1]] ? ` ${node[label[1]]}` : ""}`
      ) : (
        <div className="d-flex align-items-center">
          {jsx && jsx(eval(`node?.${img_path}`))}

          <span>
            <Localize initialLang={initialLang}>{node[label[0]]}</Localize>

            <div
              className="additional-label"
              style={{ color: "var(--stormGray)", lineHeight: 1 }}
            >
              {node[label[1]] ? ` ${node[label[1]]}` : ""}
            </div>
          </span>
        </div>
      ),
  }));
  /* eslint-enable no-eval */

  const fetchMoreAction = () => {
    if (!loading && data) {
      fetchMore({
        variables: {
          after: pageInfo?.endCursor,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const newEdges = fetchMoreResult[model]?.edges;
          const pageInfo = fetchMoreResult[model]?.pageInfo;

          const newData = {
            [model]: {
              edges: [...node, ...newEdges],
              __typename: typename,
              pageInfo,
            },
          };

          return newEdges.length ? newData : previousResult;
        },
      });
    }
  };

  const onPopupScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollTop + clientHeight >= scrollHeight - 150) {
      fetchMoreAction();
    }
  };

  return {
    onPopupScroll,
    fetchMoreAction,
    node,
    nodes,
    pageInfo,
  };
};

export default cursorPagination;
