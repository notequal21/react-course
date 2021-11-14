import Ico_arrowDown from "./Ico_arrow-down";
import s from "./Posts-new.module.scss";
import React from "react";
import {addPostCreator, onPostChangeCreator} from "../../../../redux/state";

const PostNew = (props) => {

    let newPost = React.createRef();
    let addPost = () => {
        props.dispatch(addPostCreator());
        newPost.current.value = '';
    }
    let onPostChange = () => {
        let newPostText = newPost.current.value;
        let action = onPostChangeCreator(newPostText)
        props.dispatch(action);
    }

    return (
        <div className={`${s.postsNew}`}>
            <textarea onChange={onPostChange} value={props.newPostText} ref={newPost} className={`${s.postsNew__input}`}/>
            <button onClick={addPost} className={`${s.postsNew__btn}`}><Ico_arrowDown/></button>
        </div>
    )
}

export default PostNew;