import s from "./Posts-list.module.scss";
import Post from "./Post/Post";

const PostsList = () => {

    let posts = [
        {id: 1, userName: 'Name Surname', postTime: '18:21', postDate: '12.10.2021', postText: 'Lorem ipsum dolor sit amet.'},
        {id: 2, userName: 'Name Surname', postTime: '12:21', postDate: '12.10.2021', postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
        {id: 3, userName: 'Name Surname', postTime: '02:21', postDate: '12.10.2021', postText: 'Lorem ipsum dolor sit amet, consectetur adipisicingsit amet, consectetur adipisicing sit amet, consectetur adipisicing.'},
        {id: 4, userName: 'Name Surname', postTime: '00:21', postDate: '12.10.2021', postText: 'Lorem.'},
    ]

    let post = posts
        .map(p => <Post name={p.userName} time={p.postTime} date={p.postDate} text={p.postText}/>)

    return (
        <div className={`${s.postsList}`}>
            {post}
        </div>
    )
}

export default PostsList;