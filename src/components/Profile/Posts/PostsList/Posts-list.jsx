import s from "./Posts-list.module.scss";
import Post from "./Post/Post";

const PostsList = (props) => {
    let post = props.posts
        .map(p => <Post name={p.userName} key={p.id} time={p.postTime} date={p.postDate} text={p.postText}/>)

    return (
        <div className={`${s.postsList}`}>
            {post}
        </div>
    )
}

export default PostsList;