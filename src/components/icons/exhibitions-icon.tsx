import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";

const ExhibitionsSvg = () => (

	<svg fill="currentColor" width="1em" height="1em" viewBox="0 0 48 48" strokeWidth="1">
		<style type="text/css">
			{ `	.st0{opacity:0.5;}` }
		</style>
		<g>
			<g>
				<path className="st0" d="M8,8.2h32.2c1.2,0,2.2,1,2.2,2.2v8.8H5.9v-8.8C5.9,9.2,6.8,8.2,8,8.2z" />
				<path d="M13.8,13L13.8,13c-1,0-1.7-0.8-1.7-1.7V6.5c0-1,0.8-1.7,1.7-1.7h0c1,0,1.7,0.8,1.7,1.7v4.7C15.6,12.2,14.8,13,13.8,13z" />
				<path d="M34.4,13L34.4,13c-1,0-1.7-0.8-1.7-1.7V6.5c0-1,0.8-1.7,1.7-1.7l0,0c1,0,1.7,0.8,1.7,1.7v4.7C36.2,12.2,35.4,13,34.4,13z"
				/>
				<path d="M5.9,19.2v18.6c0,1.9,1.5,3.4,3.4,3.4h29.6c1.9,0,3.4-1.5,3.4-3.4V19.2H5.9z M30.4,28.5l-2.8,2.7l0.7,3.8
			c0.1,0.5-0.5,0.9-0.9,0.7L23.8,34l-3.5,1.8c-0.5,0.2-1-0.2-0.9-0.7l0.7-3.8l-2.8-2.7c-0.4-0.4-0.2-1,0.4-1.1l3.9-0.6l1.7-3.5
			c0.2-0.5,0.9-0.5,1.1,0l1.7,3.5l3.9,0.6C30.5,27.5,30.7,28.2,30.4,28.5z"/>
			</g>
		</g>
	</svg>
);

const ExhibitionsMenuIcon: FunctionComponent<IIcon> = (): JSX.Element => {
	return <Icon component={ ExhibitionsSvg } />;
};


export default ExhibitionsMenuIcon;
