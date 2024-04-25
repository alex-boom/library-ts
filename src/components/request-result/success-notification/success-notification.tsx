import { notification } from "antd";


import { ISuccessNotification } from "common/types";



const successNotification = ({
    title,
    description,
    duration = 4,
}: ISuccessNotification): void =>
{


    notification[ 'success' ]({
        message: title,
        description: description,
        duration: duration,
        className: "success-notification",
        //icon: <Icons.ActionStatus type="success"/>,
        // closeIcon: <Icons.Close />,
    });

};

export default successNotification;