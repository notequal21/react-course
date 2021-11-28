import Ico_arrowDown from "./Ico_arrow-down";
import s from "./Posts-new.module.scss";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormControls/FormControls";

const PostNew = (props) => {

    let addNewPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <AddNewPostFormRedux onSubmit={addNewPost}/>
    )
}

const maxLength = maxLengthCreator(10);

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={`${s.postsNew}`}>
            <Field component={Textarea} validate={[required, maxLength]} placeholder={`Enter your text here...`} name={'newPostText'} className={`${s.postsNew__input}`}/>
            <button className={`${s.postsNew__btn}`}><Ico_arrowDown/></button>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "NewPostForm"})(NewPostForm);

export default PostNew;