import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Upload, Modal, message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { IMAGE_CREATE, IMAGE_DELETE } from "graphql/mutation/image-gql";
import { Localize } from "components/service";
import {
  successNotification,
  errorNotification,
} from "components/request-result";
import Icons from "components/icons";

import "./upload-media.scss";

const UploadMedia = ({
  defaultMedia,
  identifier = "id",
  modelId,
  model,
  query,
  disabled = false,
  uploadImgSize = "MODAL.Button_Text_ImgSize",
}) => {
  const refetchQueries = [
    {
      query,
      variables: {
        [identifier]: modelId,
      },
    },
  ];
  const [imageCreate, { loading }] = useMutation(IMAGE_CREATE, {
    refetchQueries,
  });
  const [imageDelete] = useMutation(IMAGE_DELETE, { refetchQueries });

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
        const { uid } = file;

        message.loading("Deleting image...", 0);

        await imageDelete({
          variables: {
            id: uid,
          },
          update: (cache, { data }) => {
            const {
              imageDelete: { label, message },
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

  const fileList = defaultMedia?.map(({ id, sizes }) => {
    return {
      uid: id,
      url: sizes?.original,
      thumbUrl: sizes["200x200"],
      status: "done",
    };
  });

  const formUploadProps = {
    accept: "image/*",
    beforeUpload: (file) => {
      setFilesLoading((prevState) => prevState + 1);

      imageCreate({
        variables: {
          input: {
            model_id: modelId,
            model,
            file,
          },
        },
        update(cache, { data }) {
          const { imageCreate } = data;
          const { label, message } = imageCreate;

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
    multiple: true,
    onPreview: handlePreview,
    showUploadList: {
      showPreviewIcon: true,
      showDownloadIcon: false,
      previewIcon: <Icons.Zoom />,
      removeIcon: <Icons.Delete />,
    },
  };

  return (
    <div className="media-holder">
      <span className="label-text">
        <Localize>FORMS.Input_Label_Images</Localize>
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
                  <Localize>GLOBAL.Text_AddImage</Localize>
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

export default UploadMedia;
