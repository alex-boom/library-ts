import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";


const UpdateSvg = () => (

	<svg fill="currentColor" width="1em" height="1em" viewBox="0 0 48 48" strokeWidth="1">
		<g>
			<path d="M30.1,39.3h-6.2c-7.7,0-13.9-6.2-13.9-13.9v-4.1l4.2,4.4c0.2,0.3,0.6,0.4,0.9,0.4c0.3,0,0.6-0.1,0.9-0.3
		c0.5-0.5,0.5-1.3,0-1.8l-6.4-6.7c-0.5-0.5-1.3-0.5-1.8,0L1.4,24c-0.5,0.5-0.5,1.3,0,1.8c0.5,0.5,1.3,0.5,1.8,0l4.3-4.4v4.1
		c0,9.1,7.4,16.4,16.4,16.4h6.2c0.7,0,1.2-0.6,1.2-1.2S30.8,39.3,30.1,39.3z"/>
			<path d="M46.1,24c-0.5-0.5-1.3-0.5-1.8,0l-4.3,4.4v-4.1C40.1,15.3,32.7,8,23.6,8h-6.2c-0.7,0-1.2,0.6-1.2,1.3s0.6,1.2,1.2,1.2h6.2
		c7.7,0,13.9,6.2,13.9,13.9v4.1l-4.2-4.4c-0.5-0.5-1.3-0.5-1.8,0c-0.5,0.5-0.5,1.3,0,1.8l6.4,6.7c0.2,0.2,0.6,0.4,0.9,0.4
		c0.3,0,0.7-0.1,0.9-0.4l6.4-6.7C46.6,25.3,46.6,24.5,46.1,24z"/>
		</g>
	</svg>

);

const UpdateIcon: FunctionComponent<IIcon> = (): JSX.Element => {
	return <Icon component={ UpdateSvg } />;
};


export default UpdateIcon;