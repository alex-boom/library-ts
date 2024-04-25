import React, { ReactNode } from 'react';
import './top-bar.scss';

interface TopBarProps
{
    children: ReactNode;
}

const TopBar: React.FC<TopBarProps> = ({ children }) =>
{
    return (
        <div className="top-bar">
            {children}
        </div>
    );
};

export default TopBar;
