import s from "./User-info.module.scss";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const UserInfo = (props) => {
    return (
        <div className={`${s.userInfo}`}>
            <div className={`${s.userInfo__name}`}>{props.profileIfno.fullName}</div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        </div>
    )
}

export default UserInfo;