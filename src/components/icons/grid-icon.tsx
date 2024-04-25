import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";


const GridSvg = () => (

	<svg fill="currentColor" width="1em" height="1em" viewBox="0 0 48 48" strokeWidth="1">
		<g>
			<path d="M20.4,5.7H4.9c-1.1,0-2,0.9-2,2v13.1c0,1.1,0.9,2,2,2h15.5c1.1,0,2-0.9,2-2V7.7C22.4,6.6,21.5,5.7,20.4,5.7z M18.4,18.8
		H6.9V9.7h11.5V18.8z"/>
			<path d="M42.1,5.7H26.6c-1.1,0-2,0.9-2,2v13.1c0,1.1,0.9,2,2,2h15.5c1.1,0,2-0.9,2-2V7.7C44.1,6.6,43.2,5.7,42.1,5.7z M40.1,18.8
		H28.6V9.7h11.5V18.8z"/>
			<path d="M20.4,26.1H4.9c-1.1,0-2,0.9-2,2v13.1c0,1.1,0.9,2,2,2h15.5c1.1,0,2-0.9,2-2V28.1C22.4,27,21.5,26.1,20.4,26.1z M18.4,39.3
		H6.9v-9.1h11.5V39.3z"/>
			<path d="M42.1,26.1H26.6c-1.1,0-2,0.9-2,2v13.1c0,1.1,0.9,2,2,2h15.5c1.1,0,2-0.9,2-2V28.1C44.1,27,43.2,26.1,42.1,26.1z
		 M40.1,39.3H28.6v-9.1h11.5V39.3z"/>
		</g>
	</svg>
);

const GridIcon: FunctionComponent<IIcon> = (): JSX.Element => {
	return <Icon component={ GridSvg } />;
};


export default GridIcon;

