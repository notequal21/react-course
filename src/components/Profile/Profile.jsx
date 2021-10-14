import User from "./User/User";
import Posts from "./Posts/Posts";
import './Profile.scss'

const Profile = () => {
    return (
        <div className={'content'}>
            <User/>
            <Posts/>
        </div>
    )
}

export default Profile;