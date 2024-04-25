import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";


const EditSvg = () => (

	<svg fill="currentColor" width="1em" height="1em" viewBox="0 0 48 48" strokeWidth="1">
		<path d="M42.5,13.2l-7.5-7.5c-0.8-0.8-2-0.8-2.8,0L7.7,30.2c-0.3,0.3-0.5,0.6-0.5,1l-2.1,9.5c-0.1,0.7,0,1.4,0.5,1.8
	C6,42.9,6.5,43.1,7,43.1c0.1,0,0.3,0,0.4,0l9.6-2c0.4-0.1,0.7-0.3,1-0.5L42.5,16c0.4-0.4,0.6-0.9,0.6-1.4S42.9,13.6,42.5,13.2z
	 M38.3,14.6L36.9,16l-4.6-4.6l1.4-1.4L38.3,14.6z M17.4,35.5l-4.6-4.6l16.7-16.7l4.6,4.6L17.4,35.5z M10.6,34.3l3.3,3.3l-4.2,0.9
	L10.6,34.3z"/>
	</svg>

);

const EditIcon: FunctionComponent<IIcon> = (): JSX.Element => {
	return <Icon component={ EditSvg } />;
};


export default EditIcon;