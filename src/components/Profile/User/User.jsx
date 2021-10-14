import userImage from "./Img_userimg.jpg";
import UserInfo from "./UserInfo/User-info";
import s from "./User.module.scss";

const User = () => {
    return (
        <div className={`${s.user}`}>
            <div className={`${s.user__img}`}><img src={userImage} alt=""/></div>
            <UserInfo/>
        </div>
    )
}

export default User;