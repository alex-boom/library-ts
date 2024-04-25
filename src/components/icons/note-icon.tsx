import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";


const NoteSvg = () => (

	<svg fill="currentColor" width="1em" height="1em" viewBox="0 0 48 48" strokeWidth="1">
		<g>
			<path d="M31.1,28.6H17.8c-1.1,0-2,0.9-2,2s0.9,2,2,2h13.3c1.1,0,2-0.9,2-2S32.2,28.6,31.1,28.6z" />
			<path d="M31.1,21.5H17.8c-1.1,0-2,0.9-2,2s0.9,2,2,2h13.3c1.1,0,2-0.9,2-2S32.2,21.5,31.1,21.5z" />
			<path d="M38.2,8.3h-3.4V7.5c0-1.1-0.9-2-2-2h-2.5c-0.9-2.4-3.1-4-5.8-4c-2.6,0-4.9,1.7-5.8,4h-2.5c-1.1,0-2,0.9-2,2v0.8h-3.6
		c-1.1,0-2,0.9-2,2v32.7c0,1.1,0.9,2,2,2h27.6c1.1,0,2-0.9,2-2V10.3C40.2,9.1,39.3,8.3,38.2,8.3z M18.2,9.5h2.1c1.1,0,2-0.8,2-1.9
		c0.1-1.2,1-2.1,2.2-2.1s2.1,0.9,2.2,2.1c0,1.1,0.9,1.9,2,1.9h2.1v1.7H18.2V9.5z M36.2,40.9H12.6V12.3h1.6v1c0,1.1,0.9,2,2,2h16.6
		c1.1,0,2-0.9,2-2v-1h1.4V40.9z"/>
		</g>
	</svg>
);

const NoteIcon: FunctionComponent<IIcon> = (): JSX.Element => {
	return <Icon component={ NoteSvg } />;
};


export default NoteIcon;

