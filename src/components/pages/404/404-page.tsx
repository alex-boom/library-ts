import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";
import { Localize } from "components/service";


const Page404 = () =>
{
    return (
        <div className="page-holder bg-white">
            <Result
                status="404"
                title="404"
                subTitle={<Localize>PAGES.Text_404</Localize>}
                extra={<Button type="primary"><Link to="/"><Localize>GLOBAL.Button_Text_BackHome</Localize></Link></Button>}
            />
        </div>
    );
};

export default Page404;