import React, { FunctionComponent, JSX } from "react";
import Icon from "@ant-design/icons";

import { IIcon } from "./icons-interfaces";


const PadlockSvg = () => (

	<svg
		width="1em"
		height="1em"
		viewBox="0 0 1024 1024"
		xmlns="http://www.w3.org/2000/svg"
	>
		<title />
		<g id="icomoon-ignore" />
		<path d="M409.6 443.733h546.133c37.703 0 68.267 30.564 68.267 68.267v0 443.733c0 37.703-30.564 68.267-68.267 68.267v0h-546.133c-37.703 0-68.267-30.564-68.267-68.267v0-443.733c0-37.703 30.564-68.267 68.267-68.267v0zM716.8 741.461v77.739c0 18.851-15.282 34.133-34.133 34.133s-34.133-15.282-34.133-34.133v0-77.739c-20.549-12.023-34.133-33.986-34.133-59.121 0-37.703 30.564-68.267 68.267-68.267s68.267 30.564 68.267 68.267c0 25.135-13.584 47.097-33.811 58.946l-0.322 0.174zM443.733 375.467v-102.4c0-94.257-76.41-170.667-170.667-170.667s-170.667 76.41-170.667 170.667v0 102.4h-102.4v-102.4c0-150.811 122.256-273.067 273.067-273.067s273.067 122.256 273.067 273.067v0 102.4h-102.4z" />
	</svg>

);

const PadlockIcon: FunctionComponent<IIcon> = (): JSX.Element => {
	return <Icon component={ PadlockSvg } />;
};


export default PadlockIcon;