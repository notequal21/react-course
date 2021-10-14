import s from "./Nav.module.scss";
import Link from "./Link/Link";
import Ico_Profile from "./Icons/Ico_Profile";
import Ico_Messages from "./Icons/Ico_Messages";
import Ico_Settings from "./Icons/Ico_Settings";
import Ico_News from "./Icons/Ico_News";
import Ico_Music from "./Icons/Ico_Music";

const Nav = () => {
    return (
        <nav className={`${s.nav}`}>
            <Link linkName={`Profile`} linkIco={<Ico_Profile/>}/>
            <Link linkName={`Messages`} linkIco={<Ico_Messages/>}/>
            <Link linkName={`News`} linkIco={<Ico_News/>}/>
            <Link linkName={`Music`} linkIco={<Ico_Music/>}/>
            <Link linkName={`Settings`} linkIco={<Ico_Settings/>}/>
        </nav>
    )
};

export default Nav;