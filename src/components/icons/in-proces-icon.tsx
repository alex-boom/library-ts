import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";

const InProcesSvg = () => (

	<svg fill="currentColor" width="1em" height="1em" viewBox="0 0 48 48" strokeWidth="1">
		<path d="M44.7,23.2l-3-0.4c-0.6-9.5-8.5-17.1-18.2-17.1C13.4,5.7,5.2,13.9,5.2,24s8.2,18.3,18.3,18.3c2.6,0,5.2-0.6,7.6-1.6
	c1-0.5,1.4-1.6,1-2.6c-0.5-1-1.6-1.4-2.6-1c-1.9,0.8-3.8,1.3-5.9,1.3c-7.9,0-14.3-6.4-14.3-14.3S15.6,9.7,23.5,9.7
	c7.3,0,13.3,5.5,14.2,12.5l-3.3-0.4c-0.9-0.1-1.5,0.8-1,1.6l1.9,3.3l2.3,4c0.3,0.6,1.2,0.7,1.6,0.2l3.3-3.2l2.7-2.7
	C45.9,24.4,45.5,23.3,44.7,23.2z"/>
	</svg>


);

const InProcesIcon: FunctionComponent<IIcon> = (): JSX.Element => {
	return <Icon component={ InProcesSvg } />;
};


export default InProcesIcon;