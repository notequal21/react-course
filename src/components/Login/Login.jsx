import s from './Login.module.scss'

const LoginForm = (props) => {
    return (
        <form action="" className={`${s.loginForm}`}>
            <div className={`${s.loginForm__input}`}>
                <input type="text" placeholder={`Login`} />
            </div>
            <div className={`${s.loginForm__input}`}>
                <input type="password" placeholder={`Password`} />
            </div>
            <div className={`${s.loginForm__input}`}>
                <label>
                    <input type="checkbox"/>
                    <span>Remember me</span>
                </label>
            </div>
            <div className={`${s.loginForm__btn}`}>
                <button>Login</button>
            </div>
        </form>
    )
}

const Login = (props) => {
    return (
        <div className={`${s.login}`}>
            <div className={`${s.login__title}`}>
                Login
            </div>
            <LoginForm/>
        </div>
    )
}

export default Login;