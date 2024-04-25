import { gql } from "@apollo/client";

export const GET_VARIABLE_LIST = gql`
  query VariableList($id: ID!, $lang: String) {
    variableList(id: $id) {
      id
      group_name
      lang
      slug
      value
      editable
      img_path
      translation(lang: $lang) {
        id
        group_name
        lang
        slug
        value
        editable
        img_path
        translation(lang: $lang) {
          id
          group_name
          lang
          slug
          value
          editable
          img_path
        }
        created_at
        updated_at
      }
      created_at
      updated_at
    }
  }
`;

export const GET_VARIABLE_LISTS = gql`
  query GetVariableLists(
    $text: String
    $first: Int
    $page: Int
    $where: QueryVariableListsWhereWhereConditions
    $orderBy: [QueryVariableListsOrderByOrderByClause!]
  ) {
    variableLists(
      text: $text
      first: $first
      page: $page
      orderBy: $orderBy
      where: $where
    ) {
      paginatorInfo {
        total
        count
        currentPage
        perPage
        lastPage
      }
      data {
        id
        group_name
        lang
        slug
        value
        editable
        img_path
        translation(lang: "de") {
          id
          group_name
          lang
          slug
          value
          editable
          img_path
        }
      }
    }
  }
`;

export const GET_VARIABLE_LISTS_CURSOR = gql`
  query VariableListsCursor(
    $text: String
    $first: Int!
    $after: String
    $where: QueryVariableListsCursorWhereWhereConditions
    $orderBy: [QueryVariableListsCursorOrderByOrderByClause!]
  ) {
    variableListsCursor(
      text: $text
      first: $first
      after: $after
      where: $where
      orderBy: $orderBy
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
        total
        count
        currentPage
        lastPage
      }
      edges {
        cursor
        node {
          id
          group_name
          lang
          slug
          value
          editable
          img_path
          translation(lang: "de") {
            id
            group_name
            lang
            slug
            value
            editable
            img_path
          }
        }
      }
    }
  }
`;

export const GET_VARIABLE_LIST_ALL = gql`
  query GetVariableListAll {
    variableListAll {
      id
      group_name
      lang
      slug
      value
      editable
      img_path
    }
  }
`;

export const GET_VARIABLE_GROUPS = gql`
  query GetVariableGroups($sort: SortOrder) {
    variableGroups(sort: $sort) {
      group_name
      key_amount {
        lang
        amount
      }
    }
  }
`;
