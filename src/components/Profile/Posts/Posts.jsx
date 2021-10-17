import PostsAll from "./PostsAll/Posts-all";
import PostNew from "./PostsNew/Post-new";
import PostsList from "./PostsList/Posts-list";
import s from "./Posts.module.scss";

const Posts = (props) => {
   return (
       <div className={`${s.posts}`}>
           <PostsAll/>
           <PostNew/>
           <PostsList posts={props.posts}/>
       </div>
   )
}

export default Posts;