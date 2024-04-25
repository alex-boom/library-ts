import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";


const SearchSvg = () => (

	<svg fill="currentColor" width="1em" height="1em" viewBox="0 0 48 48" strokeWidth="1">
		<path d="M42.1,40.1L31.7,29.8c2.2-2.6,3.6-6,3.6-9.7c0-8.2-6.7-14.9-14.9-14.9S5.6,11.9,5.6,20.1S12.3,35,20.5,35
	c3.1,0,5.9-0.9,8.3-2.5l10.5,10.5c0.4,0.4,0.9,0.6,1.4,0.6s1-0.2,1.4-0.6C42.8,42.1,42.8,40.9,42.1,40.1z M9.6,20.1
	c0-6,4.9-10.9,10.9-10.9s10.9,4.9,10.9,10.9S26.5,31,20.5,31S9.6,26.1,9.6,20.1z"/>
	</svg>
);

const SearchIcon: FunctionComponent<IIcon> = (): JSX.Element => {
	return <Icon component={ SearchSvg } />;
};


export default SearchIcon;

