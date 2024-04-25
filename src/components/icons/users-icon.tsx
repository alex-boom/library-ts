import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";


const UsersSvg = () => (

	<svg fill="currentColor" width="1em" height="1em" viewBox="0 0 48 48" strokeWidth="1">
		<style type="text/css">
			{ `.st0{ opacity:0.5;}` }
		</style>
		<g>
			<g className="st0">
				<circle cx="30.4" cy="16.3" r="7.9" />
				<path d="M44.9,41c0.8,0,1.4-0.7,1.4-1.5c-0.7-9.2-6-13.6-15.5-13.6c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.3,0c-9.5,0-14.8,4.4-15.5,13.6c-0.1,0.8,0.6,1.5,1.4,1.5H44.9z" />
			</g>
			<g>
				<circle cx="17.5" cy="16.3" r="7.9" />
				<path d="M32,41c0.8,0,1.4-0.7,1.4-1.5c-0.7-9.2-6-13.6-15.5-13.6c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.3,0c-9.5,0-14.8,4.4-15.5,13.6C1.8,40.3,2.4,41,3.2,41H32z" />
			</g>
		</g>
	</svg>
);

const UsersMenuIcon: FunctionComponent<IIcon> = (): JSX.Element => {
	return <Icon component={ UsersSvg } />;
};


export default UsersMenuIcon;
