import { gql } from "@apollo/client";

export const IMAGE_CREATE = gql`
  mutation ImageCreate($input: ImageFieldsInput!) {
    imageCreate(input: $input) {
      label
      message
    }
  }
`;

export const IMAGE_DELETE = gql`
  mutation ImageDelete($id: ID!) {
    imageDelete(id: $id) {
      label
      message
    }
  }
`;

export const FILE_UPLOAD = gql`
  mutation FileUploadModel($input: FileUploadInput) {
    fileUploadModel(input: $input) {
      label
      message
    }
  }
`;
