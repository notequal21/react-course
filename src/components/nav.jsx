import Profile from '../img/navbar/profile'
import Messages from "../img/navbar/messages";
import News from "../img/navbar/news";
import Music from "../img/navbar/music";
import Settings from "../img/navbar/settings";


const Nav = () => {
    return (
        <nav className={'nav'}>
            <a href={'#link'}><Profile/> Profile</a>
            <a href={'#link'}><Messages/> Messages</a>
            <a href={'#link'}><News/> News</a>
            <a href={'#link'}><Music/> Music</a>
            <a href={'#link'}><Settings/> Settings</a>
        </nav>
    )
};

export default Nav;