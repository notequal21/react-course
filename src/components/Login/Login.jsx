import s from './Login.module.scss'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Input} from "../common/FormControls/FormControls";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const maxLength = maxLengthCreator(50);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={`${s.loginForm}`}>
            <div className={`${s.loginForm__input}`}>
                <Field component={Input} validate={[required, maxLength]} name={`email`} placeholder={`Email`} />
            </div>
            <div className={`${s.loginForm__input}`}>
                <Field component={Input} validate={[required, maxLength]} name={`password`} type={`password`} placeholder={`Password`} />
            </div>
            <div className={`${s.loginForm__input}`}>
                <label>
                    <Field component={Input} validate={[required, maxLength]} name={`rememberMe`} type="checkbox"/>
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
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={`/profile`} />
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

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);