import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";


const ImageSvg = () => (

	<svg fill="currentColor" width="1em" height="1em" viewBox="0 0 48 48" strokeWidth="1">
		<g>
			<path d="M38.3,3.3H9.4c-3.2,0-5.9,2.6-5.9,5.9V38c0,3.2,2.6,5.9,5.9,5.9h28.8c3.2,0,5.9-2.6,5.9-5.9V9.2
		C44.1,5.9,41.5,3.3,38.3,3.3z M9.4,7.3h28.8c1,0,1.9,0.8,1.9,1.9v26.7L32,19.6c-0.3-0.7-1-1.1-1.7-1.1c-0.7,0-1.4,0.4-1.8,1
		l-6.6,11.1l-4.3-3.7c-0.4-0.4-1-0.5-1.6-0.5c-0.6,0.1-1.1,0.4-1.4,0.8L7.6,37.3V9.2C7.6,8.1,8.4,7.3,9.4,7.3z M37.7,39.9h-27l6-8.6
		l4.4,3.9c0.4,0.4,1,0.6,1.6,0.5c0.6-0.1,1.1-0.4,1.4-1l5.9-10L37.7,39.9z"/>
			<path d="M19.4,22.2c2.8,0,5.1-2.3,5.1-5.1s-2.3-5.1-5.1-5.1c-2.8,0-5.1,2.3-5.1,5.1S16.6,22.2,19.4,22.2z M19.4,16.1
		c0.6,0,1.1,0.5,1.1,1.1s-0.5,1.1-1.1,1.1c-0.6,0-1.1-0.5-1.1-1.1S18.8,16.1,19.4,16.1z"/>
		</g>
	</svg>
);

const ImageIcon: FunctionComponent<IIcon> = (): JSX.Element => {
	return <Icon component={ ImageSvg } />;
};


export default ImageIcon;

