import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";


const CloseSvg = () => (

	<svg fill="currentColor" width="1em" height="1em" viewBox="0 0 48 48" strokeWidth="1">
		<path d="M27.4,24.6l12.3-12.3c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0L24.6,21.8L12.2,9.4c-0.8-0.8-2-0.8-2.8,0
	c-0.8,0.8-0.8,2,0,2.8l12.3,12.3L9.4,37c-0.8,0.8-0.8,2,0,2.8c0.4,0.4,0.9,0.6,1.4,0.6s1-0.2,1.4-0.6l12.3-12.3l12.3,12.3
	c0.4,0.4,0.9,0.6,1.4,0.6s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8L27.4,24.6z"/>
	</svg>
);

const CloseIcon: FunctionComponent<IIcon> = (): JSX.Element => {
	return <Icon component={ CloseSvg } />;
};


export default CloseIcon;

