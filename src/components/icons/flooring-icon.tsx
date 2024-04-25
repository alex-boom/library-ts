import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";


const FlooringSvg = () => (

	<svg fill="currentColor" width="1em" height="1em" viewBox="0 0 48 48" strokeWidth="1">
		<style type="text/css">
			{ `.st0{opacity:0.5;}` }
		</style>
		<g>
			<g>
				<path d="M12.8,16.3l9.8-6.2c0.9-0.5,2-0.5,2.8,0l9.8,6.2L24,23.6L12.8,16.3z" />
				<path className="st0" d="M44.4,26.5l-9.3-5.9l-11.1,7l-11.1-7l-9.3,5.9c-0.9,0.6-0.9,1.9,0,2.5l19.6,12.6c0.5,0.3,1.1,0.3,1.6,0
			L44.4,29C45.4,28.4,45.3,27.1,44.4,26.5z"/>
			</g>
		</g>
	</svg>

);

const FlooringMenuIcon: FunctionComponent<IIcon> = (): JSX.Element => {
	return <Icon component={ FlooringSvg } />;
};


export default FlooringMenuIcon;