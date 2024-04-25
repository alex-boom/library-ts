import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";


const StandsSvg = () => (

	<svg fill="currentColor" width="1em" height="1em" viewBox="0 0 48 48" strokeWidth="1">
		<style type="text/css">
			{ `.st0{opacity:0.5;}` }
		</style>
		<g>
			<path className="st0" d="M40.4,15.7L24.3,5.5l-16,10.1c-0.9,0.6-1.4,1.6-1.4,2.6v16.3l17.5-11.1l17.5,11.1V18.1
		C41.8,17.2,41.3,16.3,40.4,15.7z"/>
			<path d="M6.8,34.6l17.5-11l17.5,11l-15.2,9.9c-1.4,0.9-3.2,0.9-4.5,0L6.8,34.6z" />
		</g>
	</svg>
);

const StandsMenuIcon: FunctionComponent<IIcon> = (): JSX.Element => {
	return <Icon component={ StandsSvg } />;
};


export default StandsMenuIcon;