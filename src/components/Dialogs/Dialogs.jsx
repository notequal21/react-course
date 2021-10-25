import s from "./Dialogs.module.scss";
import Chats from "./Chats/Chats";
import ChatContent from "./ChatContent/ChatContent";
import ChatNewMsg from "./ChatNewMsg/ChatNewMsg";

const Dialogs = (props) => {
    return (
        <div className={`${s.content}`}>

            <Chats state={props.state.dialogs}/>

            <div className={`${s.chat}`}>

                <ChatContent state={props.state.messages}/>
                <ChatNewMsg/>

            </div>

        </div>
    )
}

export default Dialogs;