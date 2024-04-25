import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";


const EquipmentSvg = () => (

	<svg fill="currentColor" width="1em" height="1em" viewBox="0 0 48 48" strokeWidth="1">
		<style type="text/css">
			{ `.st0{opacity:0.5;}` }
		</style>
		<g>
			<path d="M10.3,14.6h-0.1c-1.9,0-3.5-1.6-3.5-3.5v0c0-1.9,1.6-3.5,3.5-3.5h0.1c1.9,0,3.5,1.6,3.5,3.5v0C13.8,13,12.2,14.6,10.3,14.6
		z"/>
			<path className="st0" d="M38.7,14.6H19.8c-1.9,0-3.5-1.6-3.5-3.5v0c0-1.9,1.6-3.5,3.5-3.5h18.8c1.9,0,3.5,1.6,3.5,3.5v0
		C42.2,13,40.6,14.6,38.7,14.6z"/>
			<path d="M10.3,27.8h-0.1c-1.9,0-3.5-1.6-3.5-3.5v0c0-1.9,1.6-3.5,3.5-3.5h0.1c1.9,0,3.5,1.6,3.5,3.5v0
		C13.8,26.2,12.2,27.8,10.3,27.8z"/>
			<path className="st0" d="M38.7,27.8H19.8c-1.9,0-3.5-1.6-3.5-3.5v0c0-1.9,1.6-3.5,3.5-3.5h18.8c1.9,0,3.5,1.6,3.5,3.5v0
		C42.2,26.2,40.6,27.8,38.7,27.8z"/>
			<path d="M10.3,40.7h-0.1c-1.9,0-3.5-1.6-3.5-3.5v0c0-1.9,1.6-3.5,3.5-3.5h0.1c1.9,0,3.5,1.6,3.5,3.5v0
		C13.8,39.1,12.2,40.7,10.3,40.7z"/>
			<path className="st0" d="M38.7,40.7H19.8c-1.9,0-3.5-1.6-3.5-3.5v0c0-1.9,1.6-3.5,3.5-3.5h18.8c1.9,0,3.5,1.6,3.5,3.5v0
		C42.2,39.1,40.6,40.7,38.7,40.7z"/>
		</g>
	</svg>

);

const EquipmentMenuIcon: FunctionComponent<IIcon> = (): JSX.Element => {
	return <Icon component={ EquipmentSvg } />;
};


export default EquipmentMenuIcon;
