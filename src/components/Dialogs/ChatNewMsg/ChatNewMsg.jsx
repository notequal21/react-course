import s from "./ChatNewMsg.module.scss";
import Ico_arrowDown from "./Ico_arrow-down";


const ChatNewMsg = () => {
    return (
        <div className={`${s.chat__msg}`}>
            <textarea className={`${s.chat__msgInput}`}></textarea>
            <button className={`${s.chat__msgBtn}`}><Ico_arrowDown/></button>
        </div>
    )
}

export default ChatNewMsg;