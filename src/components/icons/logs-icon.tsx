import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";


const LogsSvg = () => (

	<svg fill="currentColor" width="1em" height="1em" viewBox="0 0 48 48" strokeWidth="1">
		<path d="M41.5,15.4c0-0.3-0.1-0.7-0.4-0.9L30.4,4.1c0,0,0,0,0,0c0,0,0,0,0,0c-0.2-0.2-0.6-0.4-0.9-0.4H15.3c-0.7,0-1.2,0.6-1.2,1.3
	v3.7h-3.7c-0.7,0-1.2,0.6-1.2,1.2v33c0,0.7,0.6,1.2,1.2,1.2h25c0.7,0,1.2-0.6,1.2-1.2v-3.7h3.7c0.7,0,1.2-0.6,1.2-1.2L41.5,15.4
	C41.5,15.4,41.5,15.4,41.5,15.4z M30.7,7.8l6.6,6.4l-6.6,0L30.7,7.8z M34.1,41.6H11.6V11.1H14v26.8c0,0.7,0.6,1.2,1.2,1.2h18.8V41.6
	z M39,36.6H16.5V6.1h11.6l0,9.3c0,0.7,0.6,1.3,1.2,1.3l9.6,0V36.6z"/>
	</svg>

);

const LogsIcon: FunctionComponent<IIcon> = (): JSX.Element => {
	return <Icon component={ LogsSvg } />;
};


export default LogsIcon;