import s from "./ChatNewMsg.module.scss";

const ChatNewMsg = () => {
    return (
        <div className="chat__msg">
            <textarea className="chat__msgInput"></textarea>
            <button className="chat__msgBtn">Send!</button>
        </div>
    )
}

export default ChatNewMsg;