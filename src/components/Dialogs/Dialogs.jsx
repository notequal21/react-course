import s from "./Dialogs.module.scss";
import Chats from "./Chats/Chats";
import ChatContent from "./ChatContent/ChatContent";
import ChatNewMsgContainer from "./ChatNewMsg/ChatNewMsgContainer";

const Dialogs = (props) => {

    return (
        <div className={`${s.content}`}>

            <Chats state={props.state.getState().dialogsPage.dialogs}/>

            <div className={`${s.chat}`}>

                <ChatContent state={props.state.getState().dialogsPage.messages}/>
                <ChatNewMsgContainer store={props.state}/>

            </div>

        </div>
    )
}

export default Dialogs;