import React from "react";
import {
    onChangeMessageBodyCreator,
    sendMessageCreator
} from "../../../redux/dialogs-reducer";
import ChatNewMsg from "./ChatNewMsg";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage,
        newMessageBody: state.dialogsPage.newMessageBody,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        onMessageBodyChange: (newMessageBody) => {
            let action = onChangeMessageBodyCreator(newMessageBody);
            dispatch(action);
        }
    }
}


const ChatNewMsgContainer = connect(mapStateToProps, mapDispatchToProps)(ChatNewMsg);

export default ChatNewMsgContainer;