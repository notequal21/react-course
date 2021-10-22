import User from "./User/User";
import Posts from "./Posts/Posts";
import './Profile.scss'

const Profile = (props) => {
    return (
        <div className={'content'}>
            <User/>
            <Posts posts={props.posts}/>
        </div>
    )
}

export default Profile;