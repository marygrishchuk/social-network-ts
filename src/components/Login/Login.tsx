import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {RootStateType} from "../../redux/redux-store";
import {submitLoginData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const LoginForm = (props: InjectedFormProps) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder="Email" name={"email"} component={"input"}/>
        </div>
        <div>
            <Field placeholder="Password" name={"password"} component={"input"}/>
        </div>
        <div>
            <Field component={"input"} name={"rememberMe"} type="checkbox"/> Remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

type LoginType = {
    submitLoginData: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

class Login extends React.Component<LoginType> {
    onSubmit = (formData: any) => {
        this.props.submitLoginData(formData.email, formData.password, formData.rememberMe)
    }

    render() {
        if (this.props.isAuth) {
            return <Redirect to={"/profile"}/>
        }
        return <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={this.onSubmit}/>
        </div>
    }
}

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {submitLoginData})(Login)