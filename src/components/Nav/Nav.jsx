import s from "./Nav.module.scss";
import Link from "./Link/Link";

const Nav = () => {
    return (
        <nav className={`${s.nav}`}>
            <Link/>
            <Link/>
            <Link/>
            <Link/>
            <Link/>
        </nav>
    )
};

export default Nav;