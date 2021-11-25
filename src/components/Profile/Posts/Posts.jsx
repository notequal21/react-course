import PostsAll from "./PostsAll/Posts-all";
import PostsList from "./PostsList/Posts-list";
import s from "./Posts.module.scss";
import PostNewContainer from "./PostsNew/Post-newContainer";

const Posts = (props) => {
   return (
       <div className={`${s.posts}`}>
           <PostsAll/>
           <PostNewContainer store={props.state}/>
           <PostsList posts={props.state.posts}/>
       </div>
   )
}

export default Posts;