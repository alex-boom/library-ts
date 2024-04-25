import React from 'react';
import { Link } from "react-router-dom";
import { Dropdown } from "antd";
import { DownOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { useLogout } from "components/use-hooks";
import Icons from "components/icons";
import { Localize } from "components/service";
import type { TUser } from "graphql/type/user-gql-types";

import "./dropdown-menu.scss";

interface DropMenuProps
{
    me?: TUser | null;
}


const DropMenu: React.FC<DropMenuProps> = ({ me }) =>
{

    const { logout } = useLogout();

    const items = [
        {
            key: "profile",
            label: (
                <Link to={{ pathname: `/users/${me?.id}` }}>
                    <UserOutlined /> &nbsp;
                    <Localize>MENUS_DROP.Label_MyProfile</Localize>
                </Link>
            ),
        },
        {
            key: "logout",
            label: (
                <span onClick={() => logout({ redirectRoute: "/" })}>
                    <LogoutOutlined /> &nbsp; <Localize>MENUS_DROP.Label_Logout</Localize>
                </span>
            ),
        },
    ];

    return (
        <Dropdown
            className="dropdown-profile"
            overlayClassName="dropdown-profile-overlay"
            menu={{ items }}
            trigger={[ "click" ]}
        >
            <div>
                <div className="user-logo-icon">
                    <Icons.Profile />
                </div>
                <span className="my-profile-link" onClick={(e) => e.preventDefault()}>
                    <span className="profile-info">
                        <strong className="name">
                            {me?.name} {me?.surname}
                        </strong>
                        <DownOutlined />
                        <br />
                        <span className="role">
                            <Localize>{me?.roles[ 0 ]?.slug}</Localize>
                        </span>
                    </span>
                </span>
            </div>
        </Dropdown>
    );
};

export default DropMenu;
