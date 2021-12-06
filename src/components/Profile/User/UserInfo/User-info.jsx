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
            <div>
                Looking for a job: {props.profileIfno.lookingForAJob ? 'yes' : 'no'}
            </div>
            {
                props.profileIfno.lookingForAJob &&
                <div>
                    My professional skills: {props.profileIfno.lookingForAJobDescription ? 'yes' : 'no'}
                </div>
            }
            <div>
                About me: {props.profileIfno.aboutMe}
            </div>
            <div>
                Contacts: {Object.keys(props.profileIfno.contacts).map(key => {
                    return <Contact contactTitle={key} contactValue={props.profileIfno.contacts[key] }/>
            })}
            </div>
            {
                props.isOwner && <input onChange={onMainPhotoSelected} type="file"/>
            }
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div>
            {contactTitle}: {contactValue}
        </div>
    )
}

export default UserInfo;