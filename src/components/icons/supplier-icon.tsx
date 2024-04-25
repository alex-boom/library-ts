import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";


const SuppliersSvg = () => (

	<svg fill="currentColor" width="1em" height="1em" viewBox="0 0 48 48" strokeWidth="1">
		<style type="text/css">
			{ `.st0{opacity:0.5;} ` }
		</style>
		<g>
			<path className="st0" d="M26.1,13.1c0-3.8-2.4-7.1-5.8-8.4v8.1h-6.5V4.7C10.4,6,8.1,9.3,8.1,13.1c0,3.7,2.3,6.9,5.5,8.3v19.1
		c0,2,1.6,3.5,3.5,3.5h0c2,0,3.5-1.6,3.5-3.5V21.4C23.9,20,26.1,16.8,26.1,13.1z"/>
			<path className="st1" d="M38.7,28.7L37.6,26c-0.1-0.3-0.1-0.6,0-0.9l0.6-2.2h-2.5V12l0.8-3.4l-0.9-4.2h-3.7l-1,4.3l0.8,3.6v10.7H29
		l0.7,2.3c0.1,0.3,0.1,0.5,0,0.8l-1,3c-0.1,0.3-0.2,0.7-0.2,1v10.2c0,2.2,1.8,3.9,3.9,3.9H35c2.2,0,3.9-1.8,3.9-3.9V29.9
		C38.9,29.5,38.8,29.1,38.7,28.7z"/>
		</g>
	</svg>
);

const SuppliersMenuIcon: FunctionComponent<IIcon> = (): JSX.Element => {
	return <Icon component={ SuppliersSvg } />;
};


export default SuppliersMenuIcon;