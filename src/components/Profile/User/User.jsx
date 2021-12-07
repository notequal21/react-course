import UserInfo from "./UserInfo/User-info";
import s from "./User.module.scss";
import Preloader from "../../common/Preloader/Preloader";
import userImage from "../../../assets/img/profile-placeholder.png";

const User = (props) => {

    let userImg = null

    if (!props.profile) {
        return <Preloader/>
    }

    if (props.profile.photos.large === null) {
        userImg = userImage;
    } else {
        userImg = props.profile.photos.large;
    }

    return (
        <div className={`${s.user}`}>
            <div className={`${s.user__img}`}>
                <img src={userImg} alt=""/>
            </div>
            <UserInfo savePhoto={props.savePhoto}
                      isOwner={props.isOwner}
                      profileIfno={props.profile}
                      status={props.status}
                      updateStatus={props.updateStatus}
                      saveProfile={props.saveProfile}/>
        </div>
    )
}

export default User;