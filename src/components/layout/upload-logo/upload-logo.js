import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Upload, Modal, message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { FILE_UPLOAD } from "graphql/mutation/image-gql";
import { Localize } from "components/service";
import {
  successNotification,
  errorNotification,
} from "components/request-result";
import Icons from "components/icons";

import "./upload-logo.scss";

const UploadLogo = ({
  defaultMedia,
  modelId,
  model,
  modelField,
  query,
  label = "FORMS.Input_Label",
  uploadButtonText = "MODAL.Button_Text_Add",
  uploadImgSize = "MODAL.Button_Text_ImgSize",
  disabled = false,
}) => {
  const refetchQueries = [
    {
      query,
      variables: {
        id: modelId,
      },
    },
  ];
  let [fileUploadModel, { loading }] = useMutation(FILE_UPLOAD, {
    refetchQueries,
  });

  const [filesLoading, setFilesLoading] = useState(0);
  const [previewImage, setPreviewImage] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false);

  const handlePreview = (file) => {
    setPreviewImage(file.url);
    setPreviewVisible(true);
  };

  const handleCancel = () => {
    setPreviewVisible(false);
  };

  const handleRemove = async (file) => {
    if (file.status === "done") {
      try {
        // const { uid } = file;

        message.loading("Deleting image...", 0);

        await fileUploadModel({
          variables: {
            input: {
              model,
              model_id: modelId,
              model_field: modelField,
            },
          },
          update: (cache, { data }) => {
            const {
              fileUploadModel: { label, message },
            } = data;

            setTimeout(() => {
              successNotification({
                title: label,
                description: message,
              });
            }, 2500);
          },
        });
      } catch (error) {
        errorNotification(error);
      } finally {
        setTimeout(() => {
          message.destroy();
        }, 2000);
      }
    }
  };

  const fileList = defaultMedia
    ? [
        {
          uid: "1",
          url: defaultMedia,
          thumbUrl: defaultMedia,
          status: "done",
        },
      ]
    : [];

  const formUploadProps = {
    accept: "image/*",
    beforeUpload: (file) => {
      setFilesLoading((prevState) => prevState + 1);

      fileUploadModel({
        variables: {
          input: {
            model,
            model_id: modelId,
            model_field: modelField,
            file,
          },
        },
        update(cache, { data }) {
          const { fileUploadModel } = data;
          const { label, message } = fileUploadModel;

          setFilesLoading((prevState) => prevState - 1);

          successNotification({
            title: label,
            description: message,
          });
        },
      }).catch((error) => {
        setFilesLoading((prevState) => prevState - 1);
        errorNotification(error);
      });

      return false;
    },
    onRemove: handleRemove,
    fileList: fileList,
    listType: "picture-card",
    multiple: false,
    onPreview: handlePreview,
    showUploadList: {
      showPreviewIcon: true,
      showDownloadIcon: false,
      previewIcon: <Icons.Zoom />,
      removeIcon: <Icons.Delete />,
    },
  };

  return (
    <div className="media-logo-holder">
      <span className="label-text">
        <Localize>{label}</Localize>
      </span>

      <Upload {...formUploadProps} disabled={disabled}>
        <div>
          {loading || filesLoading > 0 ? (
            <LoadingOutlined />
          ) : (
            <>
              <div className="site-badge">
                <Icons.Plus />
              </div>
              <div className="site-icon">
                  <Localize>{ uploadButtonText }</Localize>
                  <br />
                  <Localize>{ uploadImgSize }</Localize>
              </div>
            </>
          )}
        </div>
      </Upload>

      <Modal
        className="modal-image"
        width={800}
        open={previewVisible}
        closeIcon={<Icons.Close />}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="Preview" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </div>
  );
};

export default UploadLogo;
