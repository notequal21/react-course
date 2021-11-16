import React from "react";
import {addPostCreator, onPostChangeCreator} from "../../../../redux/profile-reducer";
import PostNew from "./Post-new";

const PostNewContainer = (props) => {

    let addPost = () => {
        props.store.dispatch(addPostCreator());
    }
    let onPostChange = (newPostText) => {
        let action = onPostChangeCreator(newPostText);
        props.store.dispatch(action);
    }

    return (
        <PostNew state={props.store.getState().profilePage.newPostText} updateNewPostText={(onPostChange)} addPost={addPost}  newPostText={props.store.newPostText} />
    )
}

export default PostNewContainer;