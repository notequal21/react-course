import React from "react";
import {
    onChangeMessageBodyCreator,
    sendMessageCreator
} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import ChatNewMsg from "./ChatNewMsg";

let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage,
        newMessageBody: state.dialogsPage.newMessageBody,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        },
        onMessageBodyChange: (newMessageBody) => {
            let action = onChangeMessageBodyCreator(newMessageBody);
            dispatch(action);
        }
    }
}


const ChatNewMsgContainer = connect(mapStateToProps, mapDispatchToProps)(ChatNewMsg);

export default ChatNewMsgContainer;