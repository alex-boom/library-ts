import React, { JSX } from 'react';

import { AuthForms } from "components/auth";



const PublicApp: React.FC = (): JSX.Element =>
{

    return (
        <div className="public-app">
            <AuthForms.SignIn />
        </div>
    );
};

export default PublicApp;