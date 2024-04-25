import React, { FunctionComponent, JSX } from 'react';
import Icon from '@ant-design/icons';

import { IIcon } from "./icons-interfaces";


const ArrowSvg = () => (
    <svg fill="currentColor" width="1em" height="1em" viewBox="0 0 48 48" strokeWidth="1" >
        <path d="M24.6,31.4c-0.4,0-0.7-0.1-1-0.4L11.1,19.5C10.4,19,10.4,18,11,17.4c0.6-0.6,1.5-0.7,2.1-0.1l11.6,10.6l11.6-10.6
        	c0.6-0.6,1.6-0.5,2.1,0.1c0.6,0.6,0.5,1.6-0.1,2.1L25.7,31C25.4,31.3,25,31.4,24.6,31.4z"
        />
    </svg>
);

const ArrowFilledSvg = () => (
    <svg fill="currentColor" width="1em" height="1em" viewBox="0 0 48 48" strokeWidth="1" >
        <polygon points="24.6,21.7 32.1,21.7 24.6,30.7 17.1,21.7 " />
    </svg>
);

const ArrowCircleSvg = () => (
    <svg fill="currentColor" width="1em" height="1em" viewBox="0 0 48 48" strokeWidth="1" >
        <path d="M22.6,14.7c-0.6-0.6-1.5-0.7-2.1-0.1c-0.6,0.6-0.7,1.5-0.1,2.1l6.9,7.5l-6.9,7.5c-0.6,0.6-0.5,1.6,0.1,2.1
		c0.3,0.3,0.7,0.4,1,0.4c0.4,0,0.8-0.2,1.1-0.5l7.8-8.6c0.5-0.6,0.5-1.5,0-2L22.6,14.7z"/>
        <path d="M24.4,6.9c-9.7,0-17.6,7.9-17.6,17.6s7.9,17.6,17.6,17.6S42,34.2,42,24.5S34.1,6.9,24.4,6.9z M24.4,39.1
		c-8,0-14.6-6.5-14.6-14.6c0-8,6.5-14.6,14.6-14.6S39,16.5,39,24.5C39,32.5,32.5,39.1,24.4,39.1z"/>
    </svg>
);

const ArrowIcon: FunctionComponent<IIcon> = (props): JSX.Element =>
{

    if (props.type === "filled") {
        return <Icon className={props.className} component={ArrowFilledSvg} />;
    }

    if (props.type === "circle") {
        return <Icon className={props.className} component={ArrowCircleSvg} />;
    }

    return <Icon className={props.className} component={ArrowSvg} />;

};


export default ArrowIcon;