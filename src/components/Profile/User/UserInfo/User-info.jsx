import s from "./User-info.module.scss";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import {useState} from "react";
import ProfileDataForm from "./ProfileDataForm";

const UserInfo = (props) => {

    let [editMode, setEditMode] = useState(false);

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        // await props.saveProfile(formData)
        // setEditMode(false);
        props.saveProfile(formData).then(() => {
            setEditMode(false);
        });
    }

    return (
        <div className={`${s.userInfo}`}>
            <div className={`${s.userInfo__name}`}>{props.profileIfno.fullName}</div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            {
                    editMode ? <ProfileDataForm initialValues={props.profileIfno} profileInfo={props.profileIfno} onSubmit={onSubmit}/>
                    : <ProfileData setEditMode={() => {setEditMode(true)}} profileInfo={props.profileIfno} isOwner={props.isOwner}/>
            }
            {
                props.isOwner && <input onChange={onMainPhotoSelected} type="file"/>
            }
        </div>
    )
}

const ProfileData = (props) => {
    return (
        <div>
            {
                props.isOwner &&
                <button onClick={props.setEditMode}>edit</button>
            }
            <div>
                Looking for a job: {props.profileInfo.lookingForAJob ? 'yes' : 'no'}
            </div>
            {
                props.profileInfo.lookingForAJob &&
                <div>
                    My professional skills: {props.profileInfo.lookingForAJobDescription}
                </div>
            }
            <div>
                About me: {props.profileInfo.aboutMe}
            </div>
            <div>
                Contacts: {Object.keys(props.profileInfo.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={props.profileInfo.contacts[key] }/>
            })}
            </div>
        </div>
    )
}


export const Contact = ({contactTitle, contactValue}) => {
    return (
        <div>
            {contactTitle}: {contactValue}
        </div>
    )
}

export default UserInfo;