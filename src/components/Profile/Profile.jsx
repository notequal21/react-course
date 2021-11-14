import User from "./User/User";
import Posts from "./Posts/Posts";
import './Profile.scss'

const Profile = (props) => {
    return (
        <div className={'content'}>
            <User/>
            <Posts state={props.state.posts}
                   dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;