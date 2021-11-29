import logo from "../../logo.svg";
import s from './Header.module.scss';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={`${s.header}`}>
            <a href={'#link'} className={`${s.header__logo}`}>
                <img src={logo} alt=""/>
            </a>

            <div className={`${s.header__login}`}>
                { props.isAuth
                    ?  <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                    : <NavLink to={'/login'}>Sign in</NavLink>
                }
            </div>
        </header>
    )
};

export default Header;