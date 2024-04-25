import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";


const EventsSvg = () => (

	<svg fill="currentColor"  width="1em" height="1em" viewBox="0 0 48 48" strokeWidth="1">
		<g>
			<path d="M41.3,8.9h-6.5V6.9c0-0.7-0.6-1.2-1.2-1.2s-1.2,0.6-1.2,1.2v1.9H15.5V6.9c0-0.7-0.6-1.2-1.2-1.2S13,6.2,13,6.9v1.9H6.6
		c-0.7,0-1.2,0.6-1.2,1.2v31c0,0.7,0.6,1.2,1.2,1.2h34.7c0.7,0,1.2-0.6,1.2-1.2v-31C42.6,9.4,42,8.9,41.3,8.9z M13,11.4v1.3
		c0,0.7,0.6,1.2,1.2,1.2s1.2-0.6,1.2-1.2v-1.3h16.8v1.3c0,0.7,0.6,1.2,1.2,1.2s1.2-0.6,1.2-1.2v-1.3h5.2v5.4H7.9v-5.4H13z M7.9,39.9
		V19.3h32.2v20.6H7.9z"/>
			<path d="M31.6,26.2l-4.3-0.6l-1.9-3.9c-0.2-0.4-0.6-0.7-1.1-0.7s-0.9,0.3-1.1,0.7l-1.9,3.9L17,26.2c-0.5,0.1-0.9,0.4-1,0.9
		c-0.1,0.5,0,0.9,0.3,1.3l3.1,3l-0.7,4.2c-0.1,0.5,0.1,0.9,0.5,1.2c0.4,0.3,0.9,0.3,1.3,0.1l3.8-2l3.8,2c0.2,0.1,0.4,0.1,0.6,0.1
		c0.3,0,0.5-0.1,0.7-0.2c0.4-0.3,0.6-0.8,0.5-1.2l-0.7-4.2l3.1-3c0.3-0.3,0.5-0.8,0.3-1.3C32.5,26.6,32.1,26.3,31.6,26.2z M27,30
		c-0.3,0.3-0.4,0.7-0.4,1.1l0.4,2.4l-2.2-1.1c-0.2-0.1-0.4-0.1-0.6-0.1s-0.4,0-0.6,0.1l-2.2,1.1l0.4-2.4c0.1-0.4-0.1-0.8-0.4-1.1
		l-1.7-1.7l2.4-0.4c0.4-0.1,0.8-0.3,0.9-0.7l1.1-2.2l1.1,2.2c0.2,0.4,0.5,0.6,0.9,0.7l2.4,0.4L27,30z"/>
		</g>
	</svg>

);

const EventsIcon: FunctionComponent<IIcon> = (): JSX.Element => {
	return <Icon component={ EventsSvg } />;
};


export default EventsIcon;