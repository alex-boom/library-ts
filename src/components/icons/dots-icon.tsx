import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";


const DotsSvg = () => (

	<svg fill="currentColor" width="1em" height="1em" viewBox="0 0 48 48" strokeWidth="1">
		<g>
			<path d="M9.7,20.3C7.7,20.3,6,22,6,24.1s1.7,3.8,3.8,3.8c2.1,0,3.8-1.7,3.8-3.8S11.8,20.3,9.7,20.3z" />
			<path d="M24.3,20.3c-2.1,0-3.8,1.7-3.8,3.8s1.7,3.8,3.8,3.8c2.1,0,3.8-1.7,3.8-3.8S26.4,20.3,24.3,20.3z" />
			<circle cx="39" cy="24.1" r="3.8" />
		</g>
	</svg>
);

const DotsIcon: FunctionComponent<IIcon> = (): JSX.Element => {
	return <Icon component={ DotsSvg } />;
};


export default DotsIcon;

