import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";


const NotificationsSvg = () => (

	<svg fill="currentColor" width="1em" height="1em" viewBox="0 0 48 48" strokeWidth="1">
		<style type="text/css">
			{ `.st0{ opacity:0.5;}` }
		</style>
		<g>
			<path className="st0" d="M24.4,44.9c3.2,0,5.8-2.5,6.1-5.6c-3.9,0-8.2,0-12.1,0C18.6,42.5,21.2,44.9,24.4,44.9z" />
			<path d="M41.7,35.7c-1-0.8-2.7-2.2-3.6-4.2c-1-2.3-0.8-2.9-1.2-9.2c-0.6-7.4-1.6-9.6-4.7-12.4c-1.3-1.2-2.8-1.8-4.2-2.2
		c0,0,0-0.1,0-0.1c0-1.9-1.6-3.5-3.5-3.5s-3.5,1.6-3.5,3.5c0,0,0,0.1,0,0.1c-1.4,0.4-2.9,1-4.2,2.2c-3.1,2.8-4.7,5-4.7,12.4
		c0,4.7,0,6.6-1.3,8.7c-1.1,1.8-2.2,2.8-3.4,4c-0.7,0.6-1.3,1.8-1.1,2.8C6.3,39,7.5,39.3,8,39.3c0.1,0,4.7,0,10.3,0
		c3.9,0,8.2,0,12.1,0c5.7,0,10.2,0,10.3,0c0.6,0,1.7-0.3,1.9-1.3C42.9,36.9,42.4,36.3,41.7,35.7z"/>
		</g>
	</svg>
);

const NotificationsIcon: FunctionComponent<IIcon> = (): JSX.Element => {
	return <Icon component={ NotificationsSvg } />;
};


export default NotificationsIcon;

