import s from './Login.module.scss'
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={`${s.loginForm}`}>
            <div className={`${s.loginForm__input}`}>
                <Field component={`input`} name={`login`} placeholder={`Login`} />
            </div>
            <div className={`${s.loginForm__input}`}>
                <Field component={`input`} name={`password`} type={`password`} placeholder={`Password`} />
            </div>
            <div className={`${s.loginForm__input}`}>
                <label>
                    <Field component={`input`} name={`rememberMe`} type="checkbox"/>
                    <span>Remember me</span>
                </label>
            </div>
            <div className={`${s.loginForm__btn}`}>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div className={`${s.login}`}>
            <div className={`${s.login__title}`}>
                Login
            </div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;