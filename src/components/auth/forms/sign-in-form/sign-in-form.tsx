import React from "react";
import { useMutation } from "@apollo/client";
import { Form, Input, Button, ConfigProvider } from "antd";
import { USER_LOGIN } from "graphql/mutation/user-gql";
import { IS_LOGGED_IN } from "graphql/query/local-store-gql";
import { errorNotification } from "components/request-result";
import { Localize } from "components/service";
import customizeTheme from "components/customize-theme";

import logo from "assets/logo.svg";


interface ILoginFormValues
{
    username: string;
    password: string;
}

const SignInForm: React.FC = (): JSX.Element =>
{
    const [ form ] = Form.useForm();

    const [ loginRequest, { loading } ] = useMutation(USER_LOGIN, {
        update(cache, { data: { userLogin } })
        {
            const { access_token } = userLogin;

            localStorage.setItem("authToken", access_token);
            cache.writeQuery({
                query: IS_LOGGED_IN,
                data: {
                    isLoggedIn: access_token,
                },
            });
        },
        onError(error)
        {
            errorNotification(error);
        },
    });

    return (
        <div className="sign-in-form">
            <div className="holder-date-logo">
                <div className="logo">
                    <div className="logo-box">
                        <img src={logo} alt="My Stand Project" />
                    </div>
                </div>
            </div>

            <strong style={{ color: "var(--primary-color)" }}>
                <Localize>FORMS.Input_Label_SignIn</Localize>
            </strong>

            <ConfigProvider theme={customizeTheme.LightTheme()}>
                <Form
                    className=""
                    form={form}
                    layout="vertical"
                    onFinish={(values: ILoginFormValues) =>
                    {
                        loginRequest({
                            variables: {
                                data: {
                                    username: values.username,
                                    password: values.password,
                                },
                            },
                        }).catch((error) =>
                        {
                            errorNotification(error);
                        });
                    }}
                >
                    <Form.Item
                        label={<Localize>FORMS.Input_Label_Login</Localize>}
                        name="username"
                    >
                        <Input
                            name="username"
                            placeholder={
                                Localize({ children: "FORMS.Input_Placeholder_Email" }).props
                                    .children
                            }
                        />
                    </Form.Item>
                    <Form.Item
                        label={<Localize>FORMS.Input_Label_Password</Localize>}
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: <Localize>FORM_RULES.Required_Password</Localize>,
                            },
                        ]}
                    >
                        <Input.Password
                            name="password"
                            placeholder={
                                Localize({ children: "FORMS.Input_Placeholder_Password" }).props
                                    .children
                            }
                        />
                    </Form.Item>
                    <Form.Item>
                        <div className="form-actions">
                            <Button type="primary" htmlType="submit" loading={loading}>
                                <Localize>GLOBAL.Button_Text_Login</Localize>
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </ConfigProvider>
        </div>
    );
};

export default SignInForm;
