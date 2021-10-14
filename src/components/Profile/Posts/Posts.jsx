import PostsAll from "./PostsAll/posts-all";
import PostNew from "./PostsNew/Post-new";
import PostsList from "./PostsList/posts-list";
import s from "./Posts.module.scss";

const Posts = () => {
   return (
       <div className={`${s.posts}`}>
           <PostsAll/>
           <PostNew/>
           <PostsList/>
       </div>
   )
}

export default Posts;