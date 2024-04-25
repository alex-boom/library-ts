import { notification } from "antd";


import type { IErrorNotification } from "common/types";


const errorNotification = ( error : IErrorNotification ) : void => {

    if( error.graphQLErrors !== undefined ){

        error.graphQLErrors.map(({ message: label, extensions : {reason} }) => {
            notification['error']({
                message: label ,
                description: reason,
                className: "error-notification",
                // closeIcon: <Icons.Close />,
                //icon: <Icons.ActionStatus type="error"/>
            });

            return false;
        });

    }

    if(error.reason !== undefined && error.label !== undefined){

        notification['error']({
            message: error.label ,
            description: error.reason,
            className: "error-notification",
            // closeIcon: <Icons.Close />,
            //icon: <Icons.ActionStatus type="error"/>
        });

    }

};

export default errorNotification;