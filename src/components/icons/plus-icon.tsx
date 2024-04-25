import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";


const PluseSvg = () => (

	<svg fill="currentColor" width="1em" height="1em" viewBox="0 0 48 48" strokeWidth="1">
		<path d="M40.7,21.9H25.8V7c0-1.1-0.9-2-2-2s-2,0.9-2,2v14.8H7c-1.1,0-2,0.9-2,2s0.9,2,2,2h14.8v14.8c0,1.1,0.9,2,2,2s2-0.9,2-2V25.9
	h14.8c1.1,0,2-0.9,2-2S41.8,21.9,40.7,21.9z"/>
	</svg>

);

const PluseIcon: FunctionComponent<IIcon> = (): JSX.Element => {
	return <Icon component={ PluseSvg } />;
};


export default PluseIcon;

