import s from "./Posts-list.module.scss";
import Post from "./Post/Post";

const PostsList = () => {
    return (
        <div className={`${s.postsList}`}>
            <Post
                name={`Name Surname`}
                time={`18:21`}
                date={`12.10.2021`}
                text={`Lorem ipsum dolor sit amet.`}
            />
            <Post
                name={`Name Surname`}
                time={`12:21`}
                date={`12.10.2021`}
                text={`Lorem ipsum dolor sit amet, consectetur adipisicing.`}
            />
            <Post
                name={`Name Surname`}
                time={`02:21`}
                date={`12.10.2021`}
                text={`Lorem ipsum dolor sit amet, consectetur adipisicingsit amet, consectetur adipisicing sit amet, consectetur adipisicing.`}
            />
            <Post
                name={`Name Surname`}
                time={`00:21`}
                date={`12.10.2021`}
                text={`Lorem.`}
            />
        </div>
    )
}

export default PostsList;