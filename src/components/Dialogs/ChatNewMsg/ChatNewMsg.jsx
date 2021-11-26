import s from "./ChatNewMsg.module.scss";
import Ico_arrowDown from "./Ico_arrow-down";
import React from "react";
import {Field, reduxForm} from "redux-form";

const ChatNewMsg = (props) => {

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <AddMessageFormRedux onSubmit={addNewMessage} />
    )
}

const ChatNewMsgForm = (props) => {
    return (
        <form className={`${s.chat__msg}`} onSubmit={props.handleSubmit}>
            <Field component={`textarea`} name={`newMessageBody`} placeholder={`Enter your message`} onChange={props.onMessageBodyChange} value={props.newMessageBody} className={`${s.chat__msgInput}`}/>
            <button className={`${s.chat__msgBtn}`}><Ico_arrowDown/></button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(ChatNewMsgForm)

export default ChatNewMsg;