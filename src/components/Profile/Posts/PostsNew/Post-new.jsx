import Ico_arrowDown from "./Ico_arrow-down";
import s from "./Posts-new.module.scss";
import React from "react";

const PostNew = (props) => {

    let newPost = React.createRef();
    let addPost = () => {
        let text = newPost.current.value;
        props.addPost(text);
    }

    return (
        <div className={`${s.postsNew}`}>
            <textarea ref={newPost} className={`${s.postsNew__input}`}/>
            <button onClick={addPost} className={`${s.postsNew__btn}`}><Ico_arrowDown/></button>
        </div>
    )
}

export default PostNew;