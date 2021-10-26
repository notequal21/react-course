import User from "./User/User";
import Posts from "./Posts/Posts";
import './Profile.scss'

const Profile = (props) => {
    return (
        <div className={'content'}>
            <User/>
            <Posts state={props.state.posts} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;