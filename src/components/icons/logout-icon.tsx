import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";



const LogoutSvg = () => (

	<svg fill="currentColor" width="1em" height="1em" viewBox="0 0 48 48" strokeWidth="1">
		<style type="text/css">
			{ `.st0{ opacity:0.5;}` }
		</style>
		<g>
			<path className="st0" d="M27.4,41.6h-19c-1.2,0-2.3-1-2.3-2.3V8.8c0-1.2,1-2.3,2.3-2.3h19c1.2,0,2.3,1,2.3,2.3v30.6
		C29.7,40.6,28.6,41.6,27.4,41.6z"/>
			<path d="M43.1,24.1c0-0.7-0.3-1.3-0.9-1.7l-6.7-6.5c-0.9-0.8-2.3-0.8-3.1,0.1c-0.8,0.9-0.8,2.3,0.1,3.1l3,2.9h-9.6
		c-1.2,0-2.2,1-2.2,2.2c0,1.2,1,2.2,2.2,2.2h9.6l-3,2.9c-0.9,0.8-0.9,2.2-0.1,3.1c0.4,0.4,1,0.7,1.6,0.7c0.5,0,1.1-0.2,1.5-0.6
		l6.7-6.5C42.8,25.4,43.1,24.8,43.1,24.1z"/>
		</g>
	</svg>
);

const LogoutMenuIcon: FunctionComponent<IIcon> = (): JSX.Element => {
	return <Icon component={ LogoutSvg } />;
};


export default LogoutMenuIcon;