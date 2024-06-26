import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";

const AttentionSvg = () => (
    <svg
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 263.65 263.65"
        xmlSpace="preserve"

    >
        <g>
            <path d="M262.846,237.792L137.021,19.858c-1.072-1.856-3.053-3-5.196-3s-4.125,1.144-5.196,3L0.804,237.792 c-1.072,1.856-1.072,4.144,0,6s3.053,3,5.196,3H257.65c2.144,0,4.125-1.144,5.196-3S263.918,239.649,262.846,237.792z  M16.392,234.792L131.825,34.858l115.433,199.935H16.392z" />
            <path d="M121.491,106.734l4.333,76.404c0.167,3.013,2.576,5.485,5.66,5.66c3.314,0.188,6.152-2.346,6.34-5.66l4.333-76.404 c0.021-0.383,0.022-0.78,0-1.172c-0.324-5.707-5.213-10.071-10.919-9.747S121.168,101.027,121.491,106.734z" />
            <path d="M131.825,201.915c-1.58,0-3.13,0.64-4.24,1.76c-1.12,1.11-1.76,2.66-1.76,4.24s0.64,3.13,1.76,4.24 c1.11,1.12,2.66,1.76,4.24,1.76s3.13-0.64,4.24-1.76c1.12-1.11,1.76-2.66,1.76-4.24s-0.64-3.13-1.76-4.24 C134.955,202.555,133.405,201.915,131.825,201.915z" />
        </g>
    </svg>
);

const AttentionIcon: FunctionComponent<IIcon> = (): JSX.Element => {
    return <Icon component={AttentionSvg} />;
};

export default AttentionIcon;
