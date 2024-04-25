import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";

const DeleteSvg = () => (
  <svg

    fill="currentColor"
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    strokeWidth="1"
  >
    <g>
      <path
        d="M37,8h-6.2c-0.8-3-3.5-5.1-6.8-5.1c-3.2,0-5.9,2.2-6.8,5.1h-6.2c-1.4,0-2.6,1.2-2.6,2.6v4.3c0,1.2,0.9,2.3,2,2.5v24.1
		c0,1.9,1.5,3.4,3.4,3.4h20.2c1.9,0,3.4-1.5,3.4-3.4V17.4c1.2-0.2,2-1.3,2-2.5v-4.3C39.5,9.2,38.4,8,37,8z M24,6.9
		c1,0,1.8,0.4,2.3,1.1h-4.7C22.2,7.3,23.1,6.9,24,6.9z M12.5,12h23v1.5h-23V12z M14.5,40.9V17.5h19v23.4H14.5z"
      />
      <path d="M20.2,20.8c-1.1,0-2,0.9-2,2v13.8c0,1.1,0.9,2,2,2s2-0.9,2-2V22.8C22.2,21.7,21.3,20.8,20.2,20.8z" />
      <path d="M27.5,20.8c-1.1,0-2,0.9-2,2v13.8c0,1.1,0.9,2,2,2s2-0.9,2-2V22.8C29.5,21.7,28.6,20.8,27.5,20.8z" />
    </g>
  </svg>
);

const DeleteIcon: FunctionComponent<IIcon> = (): JSX.Element => {
  return <Icon component={DeleteSvg} />;
};

export default DeleteIcon;
