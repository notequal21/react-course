import s from "./User-info.module.scss";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const UserInfo = (props) => {
    return (
        <div className={`${s.userInfo}`}>
            <div className={`${s.userInfo__name}`}>{props.profileIfno.fullName}</div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        </div>
    )
}

export default UserInfo;