import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";


const DocumentSvg = () => (

	<svg fill="currentColor" width="1em" height="1em" viewBox="0 0 48 48" strokeWidth="1">
		<path d="M40.5,17.5c0-0.5-0.2-1-0.6-1.4L28,4.6c0,0,0,0,0,0c0,0,0,0,0,0c-0.4-0.4-0.9-0.6-1.4-0.6H11c-1.1,0-2,0.9-2,2v36.3
	c0,1.1,0.9,2,2,2h27.5c1.1,0,2-0.9,2-2L40.5,17.5C40.5,17.5,40.5,17.5,40.5,17.5z M28.6,10.6l5.1,4.9l-5.1,0L28.6,10.6z M36.5,40.2
	H13V7.9h11.6l0,9.6c0,0.5,0.2,1,0.6,1.4c0.4,0.4,0.9,0.6,1.4,0.6l10,0V40.2z"/>
	</svg>
);

const DocumentIcon: FunctionComponent<IIcon> = (): JSX.Element => {
	return <Icon component={ DocumentSvg } />;
};


export default DocumentIcon;

