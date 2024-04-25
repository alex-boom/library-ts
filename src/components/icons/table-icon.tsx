import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";


const TableSvg = () => (

	<svg fill="currentColor" width="1em" height="1em" viewBox="0 0 48 48" strokeWidth="1">
		<g>
			<path d="M6.4,13.9h35.3c1.1,0,2-0.9,2-2s-0.9-2-2-2H6.4c-1.1,0-2,0.9-2,2S5.3,13.9,6.4,13.9z" />
		</g>
		<g>
			<path d="M6.4,25.6h35.3c1.1,0,2-0.9,2-2s-0.9-2-2-2H6.4c-1.1,0-2,0.9-2,2S5.3,25.6,6.4,25.6z" />
		</g>
		<g>
			<path d="M6.4,37.4h35.3c1.1,0,2-0.9,2-2s-0.9-2-2-2H6.4c-1.1,0-2,0.9-2,2S5.3,37.4,6.4,37.4z" />
		</g>
	</svg>
);

const TableIcon: FunctionComponent<IIcon> = (): JSX.Element => {
	return <Icon component={ TableSvg } />;
};


export default TableIcon;

