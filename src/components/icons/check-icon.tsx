import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";


const CheckSvg = () => (

	<svg fill="currentColor" width="1em" height="1em" viewBox="0 0 48 48" strokeWidth="1">
		<path d="M19.3,40L19.3,40c-1.1,0-2.1-0.4-2.8-1.2L2.7,25c-1.6-1.6-1.6-4.1,0-5.7c1.6-1.6,4.1-1.6,5.7,0l11,11l20.2-20.2
	c1.6-1.6,4.1-1.6,5.7,0c1.6,1.6,1.6,4.1,0,5.7l-23,23C21.4,39.5,20.4,40,19.3,40z"/>
	</svg>
);

const CheckIcon: FunctionComponent<IIcon> = (): JSX.Element => {
	return <Icon component={ CheckSvg } />;
};


export default CheckIcon;

