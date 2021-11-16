import React from "react";
import {
    onChangeMessageBodyCreator,
    sendMessageCreator
} from "../../../redux/dialogs-reducer";
import ChatNewMsg from "./ChatNewMsg";

const ChatNewMsgContainer = (props) => {

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onMessageBodyChange = (newMessageBody) => {
        let action = onChangeMessageBodyCreator(newMessageBody);
        props.store.dispatch(action);
    }

    return (
        <ChatNewMsg sendMessage={sendMessage} onMessageBodyChange={onMessageBodyChange} newMessageBody={props.store.getState().dialogsPage.newMessageBody}/>
    )
}

export default ChatNewMsgContainer;