import React from "react";
import {addPostCreator, onPostChangeCreator} from "../../../../redux/profile-reducer";
import PostNew from "./Post-new";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        state: state.profilePage.newPostText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (newPostText) => {
            let action = onPostChangeCreator(newPostText);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostCreator());
        },
    }
}

const PostNewContainer = connect(mapStateToProps, mapDispatchToProps)(PostNew);

export default PostNewContainer;