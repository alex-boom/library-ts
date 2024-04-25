import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { Layout, Tooltip } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { GET_APP_PARAMS } from "graphql/query/local-store-gql";
import Menus from 'components/menus';
import { TopBar } from 'components/layout';
import { AppRoutes } from "components/routes";
import { Suspense } from "components/request-result";
import { useMe, useLogout, useWindowSize } from "components/use-hooks";
import { FetchPolicy } from "@apollo/client";
import Breadcrumbs from 'components/breadcrumbs';
import { Localize } from 'components/service';
import Icons from 'components/icons';
import logo from "assets/logo.svg";
import './app.scss';

const { Sider } = Layout;

const PrivateApp: React.FC = (): JSX.Element =>
{
    const [ toggleSider, setToggleSider ] = useState(false);

    const { loading, me, error } = useMe("cache-and-network" as FetchPolicy, true);
    const { data: { appParams } } = useQuery(GET_APP_PARAMS);
    const { logout } = useLogout();

    return (
        <div className={`app ${appParams.appBlockClass.join(" ")}`}>
            <header id="header">
                <Link className="logo" to="/">
                    <div className="logo-box">
                        <img src={logo} alt="My Stand Project" />
                    </div>
                </Link>

                <Menus.DropMenu me={me} />
            </header>
            <Suspense type="block" state={{ loading, error }} blockClass="loader-main">
                <Layout className='app-layout'>
                    <Sider
                        trigger={null}
                        collapsed={(useWindowSize()?.width || 0) < 1200 && toggleSider}
                        className="sider"
                        width={(useWindowSize()?.width || 0) < 1200 ? 100 : 52}
                        breakpoint="xl"
                        collapsedWidth="0"
                        onBreakpoint={(broken) => setToggleSider(broken)}
                    >
                        <span className='nav-opener absolute' onClick={() => setToggleSider(!toggleSider)} ><MenuFoldOutlined /></span>
                        <Menus.Sidebar appParams={appParams} setToggleSider={setToggleSider} />
                        <span className='sider-logout' onClick={() => logout({ redirectRoute: "/" })}>
                            <Tooltip overlayClassName="menu-tooltip" placement="right" title={<Localize>MENUS_DROP.Label_Logout</Localize>}>
                                <span><Icons.Menu.Logout /></span>
                            </Tooltip>
                        </span>
                    </Sider>
                    <Layout className="content-holder">
                        <main id='main'>
                            <TopBar>
                                <span className='nav-opener' onClick={() => setToggleSider(!toggleSider)} ><MenuUnfoldOutlined /></span>
                                <Breadcrumbs />
                            </TopBar>
                            <AppRoutes />
                        </main>
                    </Layout>
                </Layout>
            </Suspense>
        </div>
    );
};

export default PrivateApp;
