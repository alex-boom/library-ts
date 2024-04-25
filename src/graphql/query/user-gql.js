import { gql } from "@apollo/client";

export const GET_ME = gql`
  query GetMe {
    me {
      id
      name
      surname
      email
      phone
      lang_api
      lang_app
      status
      is_admin
      job_type
      supplier_id
      is_online
      last_visit_at
      roles {
        id
        title
        slug
        colorHex
        description
        permissions {
          id
          translation {
            id
            lang
            slug
            translation {
              id
              slug
              value
            }
          }
          entry_point
          group_name
          slug
          action
          created_at
          updated_at
        }
        created_at
        updated_at
      }
      permissions {
        id
        action
        created_at
        updated_at
      }
      created_at
      updated_at
    }
  }
`;

export const GET_USERS = gql`
  query GetUsers(
    $text: String
    $first: Int
    $page: Int
    $where: QueryUsersWhereWhereConditions
    $whereRoles: QueryUsersWhereRolesWhereHasConditions
    $whereTeams: QueryUsersWhereTeamsWhereHasConditions
    $orderBy: [QueryUsersOrderByOrderByClause!]
  ) {
    users(
      text: $text
      first: $first
      page: $page
      orderBy: $orderBy
      where: $where
      whereRoles: $whereRoles
      whereTeams: $whereTeams
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
        name
        surname
        email
        phone
        lang_api
        lang_app
        status
        is_admin
        job_type
        supplier_id
        sendPassword {
          id
          user_id
          send_user_id
          message
          created_at
        }
        supplier {
          id
          title
        }
        is_online
        last_visit_at
        roles {
          id
          title
          slug
          colorHex
          description
          permissions {
            id
            translation {
              id
              lang
              slug
              translation {
                id
                slug
                value
              }
            }
            entry_point
            group_name
            slug
            action
            created_at
            updated_at
          }
          created_at
          updated_at
        }
        permissions {
          id
          action
          created_at
          updated_at
        }
        teams {
          id
          title
        }
        created_at
        updated_at
      }
    }
  }
`;

export const GET_USER = gql`
  query GetUser($id: ID) {
    user(id: $id) {
      id
      name
      surname
      email
      phone
      lang_api
      lang_app
      status
      is_admin
      job_type
      supplier_id
      supplier {
        id
        title
      }
      is_online
      last_visit_at
      roles {
        id
        title
        slug
        colorHex
        description
        permissions {
          id
          translation {
            id
            lang
            slug
            translation {
              id
              slug
              value
            }
          }
          entry_point
          group_name
          slug
          action
          created_at
          updated_at
        }
        created_at
        updated_at
      }
      permissions {
        id
        action
        created_at
        updated_at
      }
      teams {
        id
        title
      }
      created_at
      updated_at
    }
  }
`;

export const GET_USERS_CURSOR = gql`
  query UsersCursor(
    $text: String
    $where: QueryUsersCursorWhereWhereConditions
    $first: Int
    $after: String
  ) {
    usersCursor(text: $text, where: $where, first: $first, after: $after) {
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
          roles {
            slug
          }
          name
          surname
        }
      }
    }
  }
`;

export const GET_USERS_AUTOCOMPLETE = gql`
  query GetUsersAutocomplete($text: String) {
    users(text: $text) {
      data {
        id
        name
        surname
        roles {
          slug
        }
      }
    }
  }
`;
