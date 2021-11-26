import React from "react";
import {addPostCreator} from "../../../../redux/profile-reducer";
import PostNew from "./Post-new";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        state: state.profilePage.newPostText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostCreator(newPostText));
        },
    }
}

const PostNewContainer = connect(mapStateToProps, mapDispatchToProps)(PostNew);

export default PostNewContainer;