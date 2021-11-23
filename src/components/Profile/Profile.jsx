import User from "./User/User";
import Posts from "./Posts/Posts";
import './Profile.scss'

const Profile = (props) => {
    return (
        <div className={'content'}>
            <User profile={props.profile}/>
            <Posts state={props.state}/>
        </div>
    )
}

export default Profile;