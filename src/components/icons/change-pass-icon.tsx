import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";


const ChangePassSvg = () => (

	<svg fill="currentColor" width="1em" height="1em" viewBox="0 0 48 48" strokeWidth="1">
		<g>
			<path d="M37.4,19.7h-1.8v-4.5c0-6.3-5.1-11.4-11.4-11.4S12.7,8.9,12.7,15.2v4.5h-1.8c-0.7,0-1.2,0.6-1.2,1.2v17.5
		c0,2.8,2.3,5.1,5.1,5.1h18.8c2.8,0,5.1-2.3,5.1-5.1V20.9C38.7,20.2,38.1,19.7,37.4,19.7z M15.2,15.2c0-4.9,4-8.9,8.9-8.9
		c4.9,0,8.9,4,8.9,8.9v4.5H15.2V15.2z M36.2,38.5c0,1.5-1.2,2.6-2.6,2.6H14.8c-1.5,0-2.6-1.2-2.6-2.6V22.2h24V38.5z"/>
			<path d="M22.9,34.5v2.4c0,0.7,0.6,1.2,1.2,1.2s1.2-0.6,1.2-1.2v-2.4c1.7-0.5,2.9-2.1,2.9-4c0-2.3-1.9-4.2-4.2-4.2
		c-2.3,0-4.2,1.9-4.2,4.2C20,32.4,21.2,34,22.9,34.5z M24.2,28.9c0.9,0,1.7,0.7,1.7,1.7c0,0.9-0.7,1.7-1.7,1.7s-1.7-0.7-1.7-1.7
		C22.5,29.7,23.3,28.9,24.2,28.9z"/>
		</g>
	</svg>

);

const ChangePassIcon: FunctionComponent<IIcon> = (): JSX.Element => {
	return <Icon component={ ChangePassSvg } />;
};


export default ChangePassIcon;