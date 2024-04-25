import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";


const ProfileSvg = () => (

	<svg fill="currentColor" width="1em" height="1em" viewBox="0 0 48 48" strokeWidth="1">
		<style type="text/css">
			{ `.st0{opacity:0.5;}` }
		</style>
		<g>
			<circle cx="24.1" cy="15.4" r="10.2" />
			<path className="st0" d="M44.6,44.6c-0.3-12.6-7.1-16.7-20-16.7c-0.1,0-0.2,0-0.4,0c-0.1,0-0.2,0-0.4,0C11,27.9,4.2,32,3.9,44.6H44.6z"
			/>
			<path d="M19.3,28.2c0,0,3.2-0.5,9.7-0.1l-4.7,10.7L19.3,28.2z" />
		</g>
	</svg>
);

const ProfileMenuIcon: FunctionComponent<IIcon> = (): JSX.Element => {
	return <Icon component={ ProfileSvg } />;
};


export default ProfileMenuIcon;



