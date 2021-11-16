import s from "./ChatNewMsg.module.scss";
import Ico_arrowDown from "./Ico_arrow-down";
import React from "react";

const ChatNewMsg = (props) => {

    let onSendMessage = () => {
        props.sendMessage()
    }
    let onMessageBodyChange = (e) => {
        let body = e.target.value;
        props.onMessageBodyChange(body)
    }

    return (
        <div className={`${s.chat__msg}`}>
            <textarea onChange={onMessageBodyChange} value={props.newMessageBody} className={`${s.chat__msgInput}`}/>
            <button onClick={onSendMessage} className={`${s.chat__msgBtn}`}><Ico_arrowDown/></button>
        </div>
    )
}

export default ChatNewMsg;