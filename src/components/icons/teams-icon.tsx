import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";


const TeamsSvg = () => (

	<svg fill="currentColor" width="1em" height="1em" viewBox="0 0 48 48" strokeWidth="1">
		<style type="text/css">
			{ `.st0{opacity:0.5;}` }
		</style>
		<g>
			<path className="st0" d="M41,35.7H7.6l16.7-25.5L41,35.7z M13.5,32.5h21.5L24.3,16.1L13.5,32.5z" />
			<circle cx="24.5" cy="13.6" r="7.2" />
			<circle cx="37.5" cy="33.8" r="7.2" />
			<circle cx="10.6" cy="33.8" r="7.2" />
		</g>
	</svg>
);

const TeamsMenuIcon: FunctionComponent<IIcon> = (): JSX.Element => {
	return <Icon component={ TeamsSvg } />;
};


export default TeamsMenuIcon;