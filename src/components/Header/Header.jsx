import logo from "../../logo.svg";
import s from './Header.module.scss';

const Header = () => {
    return (
        <header className={`${s.header}`}>
            <a href={'#link'} className={`${s.header__logo}`}>
                <img src={logo} alt=""/>
            </a>
        </header>
    )
};

export default Header;