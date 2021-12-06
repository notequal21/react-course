import s from "./User-info.module.scss";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const UserInfo = (props) => {

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div className={`${s.userInfo}`}>
            <div className={`${s.userInfo__name}`}>{props.profileIfno.fullName}</div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            {
                props.isOwner && <input onChange={onMainPhotoSelected} type="file"/>
            }
        </div>
    )
}

export default UserInfo;