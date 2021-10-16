import s from "./Posts-list.module.scss";
import Post from "./Post/Post";

const PostsList = () => {

    let postData = [
        {id: 1, userName: 'Name Surname', postTime: '18:21', postDate: '12.10.2021', postText: 'Lorem ipsum dolor sit amet.'},
        {id: 2, userName: 'Name Surname', postTime: '12:21', postDate: '12.10.2021', postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
        {id: 3, userName: 'Name Surname', postTime: '02:21', postDate: '12.10.2021', postText: 'Lorem ipsum dolor sit amet, consectetur adipisicingsit amet, consectetur adipisicing sit amet, consectetur adipisicing.'},
        {id: 4, userName: 'Name Surname', postTime: '00:21', postDate: '12.10.2021', postText: 'Lorem.'},
    ]

    return (
        <div className={`${s.postsList}`}>
            <Post name={postData[0].userName} time={postData[0].postTime} date={postData[0].postDate} text={postData[0].postText}/>
            <Post name={postData[1].userName} time={postData[1].postTime} date={postData[1].postDate} text={postData[1].postText}/>
            <Post name={postData[2].userName} time={postData[2].postTime} date={postData[2].postDate} text={postData[2].postText}/>
            <Post name={postData[3].userName} time={postData[3].postTime} date={postData[3].postDate} text={postData[3].postText}/>
        </div>
    )
}

export default PostsList;