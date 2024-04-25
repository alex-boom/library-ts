import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";

const InformationSvg = () => (

	<svg fill="currentColor" width="1em" height="1em" viewBox="0 0 48 48" strokeWidth="1">
		<g>
			<path d="M32.5,38.9h-6.1V17.5h6.1c1.1,0,2-0.9,2-2s-0.9-2-2-2H16.2c-1.1,0-2,0.9-2,2s0.9,2,2,2h6.1v21.4h-6.1c-1.1,0-2,0.9-2,2
		s0.9,2,2,2h16.2c1.1,0,2-0.9,2-2S33.6,38.9,32.5,38.9z"/>
			<path d="M24.3,9.8c1.4,0,2.5-1.1,2.5-2.5c0-1.4-1.1-2.5-2.5-2.5s-2.5,1.1-2.5,2.5C21.8,8.7,22.9,9.8,24.3,9.8z" />
		</g>
	</svg>
);

const InformationIcon: FunctionComponent<IIcon> = (): JSX.Element => {
	return <Icon component={ InformationSvg } />;
};


export default InformationIcon;

