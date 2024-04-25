import React, { useEffect, useState, useRef, FC } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Skeleton } from "antd";
import { Pages } from "components/pages";

import "./page-wrap-default.scss";

interface IPageWrapDefaultProps
{
    pageHeaderContent?: JSX.Element | string;
    pageNavbar?: { path: string; label: string }[];
    loading?: boolean;
    headerRightBar?: JSX.Element;
    headerNavRightBar?: JSX.Element
    dataExist?: boolean;
    pageContentVisible?: boolean;
    staticPath?: string;
    title?: JSX.Element | string;
    className?: string;
    tabsIndent?: string;
    heightAuto?: string;
    children?: React.ReactNode;
}

const PageWrapDefault: FC<IPageWrapDefaultProps> = ({
    pageHeaderContent = null,
    pageNavbar = [],
    loading = false,
    headerRightBar = null,
    headerNavRightBar = null,
    dataExist = false,
    pageContentVisible = true,
    staticPath = null,
    title = "",
    className = "",
    tabsIndent = "",
    heightAuto = "",
    children,
}) =>
{
    const { path } = useParams();
    const [ isScrolled, setIsScrolled ] = useState(false);
    const [ initialObservationCompleted, setInitialObservationCompleted ] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() =>
    {
        const options = {
            root: null,
            rootMargin: "50px 0px",
            threshold: 0.1,
        };

        const handleIntersection = (entries: IntersectionObserverEntry[]) =>
        {
            entries.forEach((entry) =>
            {
                setIsScrolled(entry.isIntersecting);
                setInitialObservationCompleted(true);
            });
        };

        const observer = new IntersectionObserver(handleIntersection, options);
        const currentContainerRef = containerRef.current;

        if (currentContainerRef) {
            observer.observe(currentContainerRef);
        }

        return () =>
        {
            if (currentContainerRef) {
                observer.unobserve(currentContainerRef);
            }
        };
    }, []);

    return (
        <div className={`page ${className} ${initialObservationCompleted && !isScrolled ? "sticky" : ""}`}>
            <div className="page-header" ref={containerRef}>
                <div className="page-header-top-bar">
                    <h1>{!loading ? title : <Skeleton title />}</h1>
                    {headerRightBar && <div className="right-bar">{headerRightBar}</div>}
                </div>

                {pageHeaderContent && <div className="page-header-content">{pageHeaderContent}</div>}

                {!!pageNavbar.length && (
                    <nav className="page-navbar">
                        <ul className="page-links">
                            {pageNavbar.map((item, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={`${staticPath ?? path}/${item.path}`}
                                        className={({ isActive }) => isActive ? "active" : ""}
                                    >
                                        {item?.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        {headerNavRightBar && <div className="right-bar">{headerNavRightBar}</div>}
                    </nav>
                )}
            </div>

            {pageContentVisible && (
                <div className={`page-content ${tabsIndent && "tabs-indent"} ${heightAuto && "height-auto"}`}>
                    {dataExist ? children : !loading && <Pages.Page404 />}
                    {loading && <Skeleton active paragraph={{ rows: 15 }} />}
                </div>
            )}
        </div>
    );
};

export default PageWrapDefault;
