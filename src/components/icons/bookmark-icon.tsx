import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";

const BookmarkSvg = () => (
  <svg
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="3.5 1 17 22"
    width=".8em"
    height=".8em"
  >
    <path d="M3.5 3a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v19a1 1 0 0 1-1.519.855L12 18.615l-6.981 4.24A1 1 0 0 1 3.5 22V3Zm15 0h-13v17.223l5.981-3.632a1 1 0 0 1 1.038 0l5.981 3.632V3Z"></path>{" "}
  </svg>
);

const BookmarkIcon: FunctionComponent<IIcon> = (): JSX.Element => {
  return <Icon component={BookmarkSvg} />;
};

export default BookmarkIcon;
