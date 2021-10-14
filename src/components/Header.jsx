import logo from "../logo.svg";


const Header = () => {
    return (
        <header className={'header'}>
            <a href={'#s'} className="header__logo">
                <img src={logo} alt=""/>
            </a>
        </header>
    )
};

export default Header;