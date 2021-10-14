import User from "./profile/user";
import Posts from "./profile/posts";
import '../scss/profile.scss'

const Profile = () => {
    return (
        <div className={'content'}>
            <User/>
            <Posts/>
        </div>
    )
}

export default Profile;