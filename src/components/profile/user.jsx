import userImage from "../../img/profile/userimg.jpg";
import UserInfo from "./user-info";

const User = () => {
    return (
        <div className="user">
            <div className="user__img"><img src={userImage} alt=""/></div>
            <UserInfo/>
        </div>
    )
}

export default User;