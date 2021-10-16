import s from "./ChatsUser.module.scss";
import userImg from "../img_user.png";
import {NavLink} from "react-router-dom";

const ChatsUser = (props) => {
    return (
        <NavLink to={`/dialogs/${props.id}`} className={`${s.chats__user}`}>
            <div className={`${s.chats__userIco}`}><img src={props.userImg} alt=""/></div>
            <div className={`${s.chats__userName}`}>{props.userName}</div>
        </NavLink>
    )
}

export default ChatsUser;