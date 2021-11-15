import s from "./ChatNewMsg.module.scss";
import Ico_arrowDown from "./Ico_arrow-down";
import React from "react";
import {
    onChangeMessageBodyCreator,
    sendMessageCreator
} from "../../../redux/dialogs-reducer";

const ChatNewMsg = (props) => {

    let newMessageBody = props.newMessageBody;
    let sendMessage = () => {
        props.dispatch(sendMessageCreator());
    }
    let onMessageBodyChange = (e) => {
        let body = e.target.value;
        let action = onChangeMessageBodyCreator(body);
        props.dispatch(action);
    }

    return (
        <div className={`${s.chat__msg}`}>
            <textarea onChange={onMessageBodyChange} value={newMessageBody} className={`${s.chat__msgInput}`}/>
            <button onClick={sendMessage} className={`${s.chat__msgBtn}`}><Ico_arrowDown/></button>
        </div>
    )
}

export default ChatNewMsg;