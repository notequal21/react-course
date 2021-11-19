import s from "./Nav.module.scss";
import Link from "./Link/Link";
import Ico_Profile from "./Icons/Ico_Profile";
import Ico_Dialogs from "./Icons/Ico_Dialogs";
import Ico_Settings from "./Icons/Ico_Settings";
import Ico_News from "./Icons/Ico_News";
import Ico_Music from "./Icons/Ico_Music";
import Ico_Friends from "./Icons/Ico_Friends";
import FriendsList from "../FriendsList/FriendsList";
import Ico_FindUsers from "./Icons/Ico_FindUsers";

const Nav = () => {
    return (
        <nav className={`${s.nav}`}>
            <Link linkName={`Profile`} linkHref={'/profile'} linkIco={<Ico_Profile/>}/>
            <Link linkName={`News`} linkHref={'/news'} linkIco={<Ico_News/>}/>
            <Link linkName={`Friends`} linkHref={'/friends'} linkIco={<Ico_Friends/>}/>
            <Link linkName={`Dialogs`} linkHref={'/dialogs'} linkIco={<Ico_Dialogs/>}/>
            <Link linkName={`Music`} linkHref={'/music'} linkIco={<Ico_Music/>}/>
            <Link linkName={`Find user`} linkHref={'/friendFind'} linkIco={<Ico_FindUsers/>}/>
            <FriendsList/>
            <Link linkName={`Settings`} linkHref={'/settings'} linkIco={<Ico_Settings/>}/>
        </nav>
    )
};

export default Nav;