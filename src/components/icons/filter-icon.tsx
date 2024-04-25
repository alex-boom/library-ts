import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";

const FilterSvg = () => (

	<svg fill="currentColor" width="1em" height="1em" viewBox="0 0 48 48" strokeWidth="1">
		<path d="M28.4,44.5c-0.3,0-0.7-0.1-1-0.3l-7-4.1c-0.6-0.4-1-1-1-1.7V27.2L5.5,9.5C5,8.9,4.9,8.1,5.2,7.4s1-1.1,1.8-1.1h35.6
	c0.8,0,1.5,0.4,1.8,1.1s0.2,1.5-0.2,2.1L30.4,27.2v15.3c0,0.7-0.4,1.4-1,1.7C29,44.4,28.7,44.5,28.4,44.5z M23.3,37.2l3,1.8V26.5
	c0-0.4,0.1-0.9,0.4-1.2l11.7-15H11.1l11.7,15c0.3,0.4,0.4,0.8,0.4,1.2V37.2z"/>
	</svg>

);

const FilterIcon: FunctionComponent<IIcon> = (): JSX.Element => {
	return <Icon component={ FilterSvg } />;
};


export default FilterIcon;