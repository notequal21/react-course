import Ico_arrowDown from "./Ico_arrow-down";
import s from "./Posts-new.module.scss";
import React from "react";

const PostNew = (props) => {

    let newPost = React.createRef();
    let onAddPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        let newPostText = newPost.current.value;
        props.updateNewPostText(newPostText);
    }
    return (
        <div className={`${s.postsNew}`}>
            <textarea onChange={onPostChange} value={props.state} ref={newPost} className={`${s.postsNew__input}`}/>
            <button onClick={onAddPost} className={`${s.postsNew__btn}`}><Ico_arrowDown/></button>
        </div>
    )
}

export default PostNew;