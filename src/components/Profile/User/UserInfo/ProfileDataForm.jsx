import {createField, Input, Textarea} from "../../../common/FormControls/FormControls";
import {reduxForm} from "redux-form";
import s from "../../../Login/Login.module.scss";

const ProfileDataForm = ({handleSubmit, profileInfo, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {
                <button>save</button>
            }
            {
                error && <div className={`${s.formErr}`}>
                    {error}
                </div>
            }
            <div>
                Full name: {createField(Input, [], 'fullName', '', {type: 'text'})}
            </div>
            <div>
                Looking for a job: {createField(Input, [], 'lookingForAJob', '', {type: 'checkbox'})}
            </div>
            {
                <div>
                    My professional skills: {createField(Textarea, [], 'lookingForAJobDescription', 'Your skills')}
                </div>
            }
            <div>
                About me: {createField(Input, [], 'aboutMe', 'Enter some text about you')}
            </div>
            <div>
                Contacts: {Object.keys(profileInfo.contacts).map(key => {
                return (
                    <div>
                        {key} : {createField(Input, [], `contacts.${key}`, key)}
                    </div>
                )
            })}
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'editProfileInfo'})(ProfileDataForm);

export default ProfileDataFormReduxForm;