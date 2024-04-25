import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";


const DownloadSvg = () => (

	<svg fill="currentColor" width="1em" height="1em" viewBox="0 0 48 48" strokeWidth="1">
		<g>
			<path d="M21.8,31.7c0.4,0.5,1,0.9,1.7,0.9s1.3-0.4,1.7-0.9l10.2-10.6c0.8-0.8,0.7-2.1-0.1-2.8c-0.8-0.8-2.1-0.7-2.8,0.1l-7,7.3V6.9
		c0-1.1-0.9-2-2-2s-2,0.9-2,2v18.7l-7-7.3c-0.8-0.8-2-0.8-2.8-0.1c-0.8,0.8-0.8,2-0.1,2.8L21.8,31.7z"/>
			<path d="M43,26.7c-1.1,0-2,0.9-2,2v9.6H7.4v-9.6c0-1.1-0.9-2-2-2s-2,0.9-2,2v11.6c0,1.1,0.9,2,2,2H43c1.1,0,2-0.9,2-2V28.7
		C45,27.6,44.1,26.7,43,26.7z"/>
		</g>
	</svg>


);

const DownloadIcon: FunctionComponent<IIcon> = (): JSX.Element => {
	return <Icon component={ DownloadSvg } />;
};


export default DownloadIcon;

