import s from './Login.module.scss'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {createField, Input} from "../common/FormControls/FormControls";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const maxLength = maxLengthCreator(50);

const LoginForm = ({handleSubmit, error, captchaURL}) => {
    return (
        <form onSubmit={handleSubmit} className={`${s.loginForm}`}>
            {createField(Input, [required, maxLength], `email`, `Email`)}
            {createField(Input, [required, maxLength], `password`, `Password`, {type: 'password'})}
            <div className={`${s.loginForm__input}`}>
                <label>
                    <Field component={Input} validate={[required, maxLength]} name={`rememberMe`} type="checkbox"/>
                    <span>Remember me</span>
                </label>
            </div>
            {
                error && <div className={`${s.formErr}`}>
                    {error}
                </div>
            }
            {
                captchaURL && <img src={captchaURL} alt="captcha"/>
            }
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
            <LoginReduxForm captchaURL={props.captchaURL} onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    captchaURL: state.auth.captchaURL,
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {login})(Login);