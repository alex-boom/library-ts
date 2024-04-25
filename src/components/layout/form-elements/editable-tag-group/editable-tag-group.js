import { Link } from "react-router-dom";
import { Tag } from "antd";
// import User from "components/user";
// import Role from "components/role";
// import Team from "components/team";
// import Supplier from "components/supplier";
// import Exhibition from "components/exhibition";
import Icons from "components/icons";
import { Localize } from "components/service";

import "./editable-tag-group.scss";

const EditableTagGroup = ({
  children,
  name,
  setTags,
  tags,
  tagInfo = true,
  location = false,
  numberOfCol = false,
  extraClassName,
  model,
  jsx = () => {},
  onChangeSetFilter = () => {},
  initialLang = false,
}) => {
  const handleClose = (removedTag) => {
    tags = tags
      .filter(({ value }) => value !== removedTag)
      .map(({ value }) => value);

    setTags(tags);
    onChangeSetFilter(false, name, tags);
  };

  const oneOrTwoCol = location !== "filter" ? "col-md-2" : "";

  const linkTo = (model) => {
    switch (model) {
    //   case "usersCursor":
    //     return User.Const.basePath;
    //   case "rolesCursor":
    //     return Role.Const.basePath;
    //   case "teamsCursor":
    //     return Team.Const.basePath;
    //   case "suppliersCursor":
    //     return Supplier.Const.basePath;
    //   case "exhibitionTypesCursor":
    //     return Exhibition.Const.basePath;
      default:
        return false;
    }
  };

  return (
    <div
      className={`row-grid grid-gap-10 row-gap-20 ${
        numberOfCol ? numberOfCol : oneOrTwoCol
      } editable-tag-group ${numberOfCol ? "" : "add-btn-translateY"}`}
    >
      {tags.map(({ label, value, img_path }, index) => {
        const tagElem = (
          <Tag
            className={`tag-main edit-tag  ${extraClassName}`}
            key={value}
            closable={index !== -1}
            closeIcon={<Icons.Close />}
            onClose={() => handleClose(value)}
          >
            <span className="tag-text">
              {typeof label === "string" && initialLang ? (
                <>
                  {jsx(img_path)}
                  <Localize initialLang={initialLang}>{label}</Localize>
                </>
              ) : (
                <Localize>{label}</Localize>
              )}

              {tagInfo && (
                <Link className="tag-info" to={`${linkTo(model)}/${value}`}>
                  <Icons.Information />
                </Link>
              )}
            </span>
          </Tag>
        );
        return tagElem;
      })}

      {children}
    </div>
  );
};

export default EditableTagGroup;
