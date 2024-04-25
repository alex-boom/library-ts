import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";

const OrganizersSvg = () => (

	<svg fill="currentColor" width="1em" height="1em" viewBox="0 0 48 48" strokeWidth="1">
		<style type="text/css">
			{ `.st0{ opacity:0.5;}` }
		</style>
		<g>
			<path d="M40.9,26.5l-13.8,4.6v0.8c0,0.9-0.7,1.6-1.6,1.6h-2.7c-0.9,0-1.6-0.7-1.6-1.6v-0.8L7.3,26.5c-1.7-0.6-2.9-2.3-2.9-4.2v17.5
		c0,1.3,1.1,2.4,2.4,2.4h34.5c1.3,0,2.4-1.1,2.4-2.4V22.3C43.7,24.2,42.6,25.9,40.9,26.5z"/>
			<path d="M32.5,14.4h-4.1v-2.2c0-1-0.8-1.7-1.7-1.7h-5.1c-1,0-1.7,0.8-1.7,1.7v2.2h-4.1v-2.2c0-3.2,2.6-5.9,5.9-5.9h5.1
		c3.2,0,5.9,2.6,5.9,5.9V14.4z"/>
			<path className="st0" d="M41.4,14.4H6.8c-1.3,0-2.4,1.1-2.4,2.5v5.4c0,1.9,1.2,3.6,2.9,4.2l13.8,4.6V29c0-0.9,0.7-1.6,1.6-1.6h2.7
		c0.9,0,1.6,0.7,1.6,1.6v2.1l13.8-4.6c1.7-0.6,2.9-2.3,2.9-4.2v-5.4C43.7,15.5,42.7,14.4,41.4,14.4z"/>
		</g>
	</svg>
);

const OrganizersIcon: FunctionComponent<IIcon> = (): JSX.Element => {
	return <Icon component={ OrganizersSvg } />;
};


export default OrganizersIcon;

