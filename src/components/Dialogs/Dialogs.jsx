import s from "./Dialogs.module.scss";
import Chats from "./Chats/Chats";
import ChatContent from "./ChatContent/ChatContent";
import ChatNewMsg from "./ChatNewMsg/ChatNewMsg";

const Dialogs = () => {
    return (
        <div className={`${s.content}`}>

            <Chats/>

            <div className={`${s.chat}`}>

                <ChatContent/>
                <ChatNewMsg/>

            </div>

        </div>
    )
}

export default Dialogs;