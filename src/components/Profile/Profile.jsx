import User from "./User/User";
import Posts from "./Posts/Posts";
import './Profile.scss'

const Profile = () => {

    let posts = [
        {id: 1, userName: 'Name Surname', postTime: '18:21', postDate: '12.10.2021', postText: 'Lorem ipsum dolor sit amet.'},
        {id: 2, userName: 'Name Surname', postTime: '12:21', postDate: '12.10.2021', postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
        {id: 3, userName: 'Name Surname', postTime: '02:21', postDate: '12.10.2021', postText: 'Lorem ipsum dolor sit amet, consectetur adipisicingsit amet, consectetur adipisicing sit amet, consectetur adipisicing.'},
        {id: 4, userName: 'Name Surnam', postTime: '00:21', postDate: '12.10.2021', postText: 'Lorem.'},
    ]

    return (
        <div className={'content'}>
            <User/>
            <Posts posts={posts}/>
        </div>
    )
}

export default Profile;