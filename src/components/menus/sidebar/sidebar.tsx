import React, { useState, useEffect } from "react";
import { Menu, Tooltip } from "antd";
import { Link } from "react-router-dom";
import Icons from "components/icons";
import { Localize } from "components/service";

import "./sidebar.scss";

interface IMenuItem
{
    key: string;
    label: JSX.Element;
    onClick: () => void;
}

interface ISidebarProps
{
    appParams: {
        activeMenu: {
            selectedKeys?: string[];
            openKeys?: string[];
        };
    };
    setToggleSider: (value: boolean) => void;
}

const Sidebar: React.FC<ISidebarProps> = ({ appParams, setToggleSider }): JSX.Element =>
{
    const { selectedKeys = [ "dashboard" ], openKeys = [ "dashboard" ] } =
        appParams.activeMenu;

    const [ openSubMenu, setOpenSubMenu ] = useState<string[]>(openKeys);

    useEffect(() =>
    {
        setOpenSubMenu(openKeys);
    }, [ appParams.activeMenu, openKeys ]);

    const items: IMenuItem[] = [
        {
            key: "users",
            label: (
                <Tooltip
                    overlayClassName="menu-tooltip"
                    placement="right"
                    title={<Localize>MENUS_DROP.Label_Users</Localize>}
                >
                    <Link to="/users">
                        <Icons.Menu.Users />
                    </Link>
                </Tooltip>
            ),
            onClick: () => setToggleSider(true),
        },
        {
            key: "organizers",
            label: (
                <Tooltip
                    overlayClassName="menu-tooltip"
                    placement="right"
                    title={<Localize>MENUS_DROP.Label_Organizers</Localize>}
                >
                    <Link to="/organizers">
                        <Icons.Menu.Organizers />
                    </Link>
                </Tooltip>
            ),
            onClick: () => setToggleSider(true),
        },
        {
            key: "suppliers",
            label: (
                <Tooltip
                    overlayClassName="menu-tooltip"
                    placement="right"
                    title={<Localize>MENUS_DROP.Label_Suppliers</Localize>}
                >
                    <Link to="/suppliers">
                        <Icons.Menu.Suppliers />
                    </Link>
                </Tooltip>
            ),
            onClick: () => setToggleSider(true),
        },
        {
            key: "teams",
            label: (
                <Tooltip
                    overlayClassName="menu-tooltip"
                    placement="right"
                    title={<Localize>MENUS_DROP.Label_Teams</Localize>}
                >
                    <Link to="/teams">
                        <Icons.Menu.Teams />
                    </Link>
                </Tooltip>
            ),
            onClick: () => setToggleSider(true),
        },
        {
            key: "stands",
            label: (
                <Tooltip
                    overlayClassName="menu-tooltip"
                    placement="right"
                    title={<Localize>MENUS_DROP.Label_StandTypes</Localize>}
                >
                    <Link to="/stand-types">
                        <Icons.Menu.Stands />
                    </Link>
                </Tooltip>
            ),
            onClick: () => setToggleSider(true),
        },
        {
            key: "equipment",
            label: (
                <Tooltip
                    overlayClassName="menu-tooltip"
                    placement="right"
                    title={<Localize>MENUS_DROP.Label_Equipment</Localize>}
                >
                    <Link to="/equipment">
                        <Icons.Menu.Equipment />
                    </Link>
                </Tooltip>
            ),
            onClick: () => setToggleSider(true),
        },
        {
            key: "flooring",
            label: (
                <Tooltip
                    overlayClassName="menu-tooltip"
                    placement="right"
                    title={<Localize>MENUS_DROP.Label_Flooring</Localize>}
                >
                    <Link to="/flooring">
                        <Icons.Menu.Flooring />
                    </Link>
                </Tooltip>
            ),
            onClick: () => setToggleSider(true),
        },
        {
            key: "variable-lists",
            label: (
                <Tooltip
                    overlayClassName="menu-tooltip"
                    placement="right"
                    title={<Localize>MENUS_DROP.Label_Settings</Localize>}
                >
                    <Link to="/variable-lists">
                        <Icons.Menu.Settings />
                    </Link>
                </Tooltip>
            ),
            onClick: () => setToggleSider(true),
        },
    ];

    return (
        <>
            <Menu
                className="sidebar-menu"
                mode="inline"
                selectedKeys={selectedKeys}
                openKeys={openSubMenu}
                onOpenChange={(keys) => setOpenSubMenu(keys)}
                style={{ borderRight: 0 }}
            >
                {items.map((item) => (
                    <Menu.Item key={item.key} onClick={item.onClick}>
                        {item.label}
                    </Menu.Item>
                ))}
            </Menu>
        </>
    );
};

export default Sidebar;
