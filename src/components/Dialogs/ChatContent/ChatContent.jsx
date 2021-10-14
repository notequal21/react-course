import s from "./ChatContent.module.scss";
import Message from "./Message/Message";
import MyMessage from "./MyMessage/MyMessage";

const ChatContent = () => {
    return (
        <div className="chatContent">
            <Message/>
            <MyMessage/>
        </div>
    )
}

export default ChatContent;