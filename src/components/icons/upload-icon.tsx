import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";


const UploadSvg = () => (

	<svg fill="currentColor" width="1em" height="1em" viewBox="0 0 48 48" strokeWidth="1">
		<g>
			<path d="M14.5,19.2l7-7.3v18.7c0,1.1,0.9,2,2,2s2-0.9,2-2V12l7,7.3c0.4,0.4,0.9,0.6,1.4,0.6c0.5,0,1-0.2,1.4-0.6
		c0.8-0.8,0.8-2,0.1-2.8L25.2,5.8c-0.4-0.5-1-0.9-1.7-0.9s-1.3,0.4-1.7,0.9L11.6,16.4c-0.8,0.8-0.7,2.1,0.1,2.8
		C12.5,20,13.8,20,14.5,19.2z"/>
			<path d="M43,26.7c-1.1,0-2,0.9-2,2v9.6H7.4v-9.6c0-1.1-0.9-2-2-2s-2,0.9-2,2v11.6c0,1.1,0.9,2,2,2H43c1.1,0,2-0.9,2-2V28.7
		C45,27.6,44.1,26.7,43,26.7z"/>
		</g>
	</svg>
);

const UploadIcon: FunctionComponent<IIcon> = (): JSX.Element => {
	return <Icon component={ UploadSvg } />;
};


export default UploadIcon;

