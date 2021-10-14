import s from "./ChatsUser.module.scss";
import userImg from "./img_user.png";

const ChatsUser = () => {
    return (
        <div className={`${s.chats__user}`}>
            <div className={`${s.chats__userIco}`}><img src={userImg} alt=""/></div>
            <div className={`${s.chats__userName}`}>Name Surname</div>
        </div>
    )
}

export default ChatsUser;