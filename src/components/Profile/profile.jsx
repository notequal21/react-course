import User from "./User/User";
import Posts from "./Posts/Posts";
import './profile.scss'

const Profile = () => {
    return (
        <div className={'content'}>
            <User/>
            <Posts/>
        </div>
    )
}

export default Profile;