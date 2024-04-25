import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";

const ImportSvg = () => (

	<svg fill="currentColor" width="1em" height="1em" viewBox="0 0 48 48" strokeWidth="1">
		<g>
			<path d="M24.2,7.2c-0.2-0.3-0.6-0.5-1-0.5s-0.8,0.2-1,0.5L11.5,18.4c-0.5,0.5-0.5,1.3,0,1.8c0.5,0.5,1.3,0.5,1.8,0l8.7-9v21.5
		c0,0.7,0.6,1.2,1.2,1.2s1.2-0.6,1.2-1.2V11.1l8.7,9c0.5,0.5,1.3,0.5,1.8,0c0.5-0.5,0.5-1.3,0-1.8L24.2,7.2z"/>
			<path d="M43.5,27.2c-0.7,0-1.2,0.6-1.2,1.2v10.8H5.7V28.5c0-0.7-0.6-1.2-1.2-1.2s-1.2,0.6-1.2,1.2v12.1c0,0.7,0.6,1.2,1.2,1.2h39.1
		c0.7,0,1.2-0.6,1.2-1.2V28.5C44.8,27.8,44.2,27.2,43.5,27.2z"/>
		</g>
	</svg>

);

const ImportIcon: FunctionComponent<IIcon> = (): JSX.Element => {
	return <Icon component={ ImportSvg } />;
};


export default ImportIcon;