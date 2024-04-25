import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";


const SubContractorsSvg = () => (
	<svg fill="currentColor" width="1em" height="1em" viewBox="0 0 48 48" strokeWidth="1">
		<path d="M41,27.3c-2.3-2.3-5.6-3.2-8.7-2.5l-3.2-3.2l5.6-5.6l0.6,0.6c0.2,0.2,0.6,0.4,0.9,0.4s0.6-0.1,0.9-0.4l5.2-5.2
	c0.2-0.2,0.4-0.6,0.4-0.9s-0.1-0.6-0.4-0.9l-2.9-2.9c-0.5-0.5-1.3-0.5-1.8,0l-5.2,5.2c-0.5,0.5-0.5,1.3,0,1.8l0.6,0.6l-5.6,5.6
	l-2.7-2.7c0.7-3-0.1-6.3-2.5-8.7c-2.9-2.9-7.4-3.6-11-1.6c-0.3,0.2-0.6,0.5-0.6,0.9c-0.1,0.4,0.1,0.8,0.4,1.1l4.5,4.5l-1.5,1.5
	l-4.5-4.5C9,10.1,8.6,9.9,8.2,10c-0.4,0.1-0.7,0.3-0.9,0.6c-2,3.6-1.3,8.1,1.6,11c1.8,1.8,4.2,2.7,6.6,2.7c0.7,0,1.4-0.1,2.1-0.2
	l2.7,2.7l-1.4,1.4L16.6,26c-0.5-0.5-1.3-0.5-1.8,0c-0.5,0.5-0.5,1.3,0,1.8l0.1,0.1l-8.6,8.6c-0.6,0.6-1,1.4-1,2.3s0.3,1.7,1,2.3
	l1.5,1.5c0.6,0.6,1.4,1,2.3,1s1.7-0.3,2.3-1L21,34l0.1,0.1c0.2,0.2,0.6,0.4,0.9,0.4s0.6-0.1,0.9-0.4c0.5-0.5,0.5-1.3,0-1.8L20.7,30
	l1.4-1.4l3.2,3.2c-0.7,3,0.1,6.3,2.5,8.7c1.8,1.8,4.2,2.7,6.6,2.7c1.5,0,3-0.4,4.4-1.1c0.3-0.2,0.6-0.5,0.6-0.9
	c0.1-0.4-0.1-0.8-0.4-1.1l-4.5-4.5l1.5-1.5l4.5,4.5c0.3,0.3,0.7,0.4,1.1,0.4c0.4-0.1,0.7-0.3,0.9-0.6C44.5,34.8,43.9,30.2,41,27.3z
	 M38.5,9.3l1.1,1.1l-3.5,3.5l-1.1-1.1L38.5,9.3z M10.7,40.8c-0.3,0.3-0.8,0.3-1.1,0l-1.5-1.5C8,39.2,7.9,39,7.9,38.8
	s0.1-0.4,0.2-0.5l8.4-8.4l2.5,2.5L10.7,40.8z M10.7,19.9c-1.7-1.7-2.3-4.2-1.8-6.4l4.1,4.1c0.2,0.2,0.6,0.4,0.9,0.4
	c0.3,0,0.6-0.1,0.9-0.4l3.3-3.3c0.2-0.2,0.4-0.6,0.4-0.9s-0.1-0.6-0.4-0.9l-4.1-4.1c2.3-0.5,4.7,0.1,6.4,1.8c2.7,2.7,2.7,7,0,9.7
	C17.7,22.6,13.3,22.6,10.7,19.9z M20.1,23.2c0.7-0.4,1.4-0.9,2-1.5c0.6-0.6,1.1-1.3,1.5-2l6.2,6.2c-0.7,0.4-1.4,0.9-2,1.5
	c-0.6,0.6-1.1,1.3-1.5,2L20.1,23.2z M41,35.6l-4.1-4.1c-0.5-0.5-1.3-0.5-1.8,0l-3.2,3.2c-0.5,0.5-0.5,1.3,0,1.8l4.1,4.1
	c-2.3,0.5-4.7-0.1-6.4-1.8c-2.7-2.7-2.7-7,0-9.7c1.3-1.3,3.1-2,4.8-2c1.7,0,3.5,0.7,4.8,2C40.9,30.8,41.5,33.3,41,35.6z"/>
	</svg>


);

const SubContractorsIcon: FunctionComponent<IIcon> = (): JSX.Element => {
	return <Icon component={ SubContractorsSvg } />;
};


export default SubContractorsIcon;