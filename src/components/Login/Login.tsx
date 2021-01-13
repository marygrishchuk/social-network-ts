import React from "react";
import {Field, reduxForm} from "redux-form";
import {RootStateType} from "../../redux/redux-store";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {required} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControls";
import s from "./Login.module.css";

type LoginFormPropsType = {
    serverErrorMessage: string
    captchaURL: string
}

const LoginForm = (props: any & LoginFormPropsType) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder="Email" name={"email"} component={Input} validate={[required]}/>
        </div>
        <div>
            <Field placeholder="Password" name={"password"} component={Input} validate={[required]} type={"password"}/>
        </div>
        <div>
            <Field component={"input"} name={"rememberMe"} type="checkbox"/> Remember me
        </div>
        <div>
            <span className={s.error}>{props.serverErrorMessage}</span>
            {props.captchaURL &&
            <div>
                <img src={props.captchaURL}/>
                <div>
                    <Field placeholder="enter symbols from captcha" name={"captcha"} component={Input}
                           validate={[required]}/>
                </div>
            </div>}
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

type LoginType = {
    login: (email: string, password: string, rememberMe: boolean, captcha?: string) => void
    isAuth: boolean
    serverErrorMessage: string
    captchaURL: string
}

class Login extends React.Component<LoginType> {
    onSubmit = (formData: any) => {
        this.props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    render() {
        if (this.props.isAuth) {
            return <Redirect to={"/profile"}/>
        }
        return <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={this.onSubmit} {...this.props}/>
        </div>
    }
}

type MapStatePropsType = {
    isAuth: boolean
    serverErrorMessage: string
    captchaURL: string
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        serverErrorMessage: state.auth.serverErrorMessage,
        captchaURL: state.auth.captchaURL,
    }
}

export default connect(mapStateToProps, {login})(Login)