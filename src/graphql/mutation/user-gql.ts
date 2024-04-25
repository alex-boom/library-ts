import { gql } from "@apollo/client";

export const USER_LOGIN = gql`
  mutation UserLogin($data: UserLoginInput) {
    userLogin(input: $data) {
      access_token
    }
  }
`;

export const USER_LOGOUT = gql`
  mutation UserLogout {
    userLogout {
      status
      message
    }
  }
`;

export const USER_SEND_PASSWORD = gql`
  mutation UserSendPassword($id: ID!) {
    userSendPassword(id: $id) {
      label
      message
      user {
        id
        sendPassword {
          id
          user_id
          send_user_id
          message
          created_at
        }
      }
    }
  }
`;

export const USER_CHANGE_PASSWORD = gql`
  mutation UserChangePassword($input: UserChangePassword!) {
    userChangePassword(input: $input) {
      label
      message
    }
  }
`;

export const USER_UPDATE = gql`
  mutation UserUpdate($input: UserFieldsInput!) {
    userUpdate(input: $input) {
      label
      message
      user {
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
        created_at
        updated_at
      }
    }
  }
`;

export const USER_CREATE = gql`
  mutation UserCreate($input: UserFieldsInput!) {
    userCreate(input: $input) {
      label
      message
      user {
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
        created_at
        updated_at
      }
    }
  }
`;

export const USER_DELETE = gql`
  mutation UserDelete($id: ID!) {
    userDelete(id: $id) {
      label
      message
    }
  }
`;
