import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { breadCrumbsVar } from "graphql/cache";
import { useReactiveVar } from "@apollo/client";

import "./breadcrumbs.scss";

interface IBreadcrumbItem
{
    path: string;
    label: string;
}

const Breadcrumbs = () =>
{
    const breadcrumbs: IBreadcrumbItem[] = useReactiveVar(breadCrumbsVar);

    const items =
        breadcrumbs.length > 0 &&
        breadcrumbs.map((item) => ({
            title: <Link to={item.path}>{item.label}</Link>,
        }));

    return <Breadcrumb items={items || []} className="main-breadcrumb" />;
};

export default Breadcrumbs;


