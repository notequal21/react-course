import s from "./Posts-list.module.scss";
import Post from "./Post/Post";

const PostsList = () => {
    return (
        <div className={`${s.postsList}`}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default PostsList;