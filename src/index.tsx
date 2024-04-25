import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { ApolloProvider } from "@apollo/client";

import client from "graphql/client";

import App from "components/app";
import Auth from "components/auth";

import customizeTheme from "components/customize-theme";

import { cssVariable } from "graphql/cache";
import { getCSSVariables } from "utils";

import "antd/dist/reset.css";
import "scss/default.scss";



const cssVar: Record<string, string> = getCSSVariables();

const RootComponent: React.FC = () =>
{
    cssVariable(cssVar);

    return (
        <ConfigProvider theme={customizeTheme.DarkTheme()}>
            <ApolloProvider client={client}>
                <BrowserRouter>
                    <Auth public={<App.Public />} private={<App.Private />} />
                </BrowserRouter>
            </ApolloProvider>
        </ConfigProvider>
    );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement as HTMLElement);

root.render(<RootComponent />);
