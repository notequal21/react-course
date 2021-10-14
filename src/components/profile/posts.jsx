import PostsAll from "./posts-all";
import PostNew from "./post-new";
import PostsList from "./posts-list";

const Posts = () => {
   return (
       <div className="posts">
           <PostsAll/>
           <PostNew/>
           <PostsList/>
       </div>
   )
}

export default Posts;