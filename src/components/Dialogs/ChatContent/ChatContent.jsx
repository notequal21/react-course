import s from "./ChatContent.module.scss";
import Message from "./Message/Message";
import MyMessage from "./MyMessage/MyMessage";
import userImg from "./img_user.png";

const ChatContent = () => {
    return (
        <div className={`${s.chatContent}`}>
            <Message
                userImg={userImg}
                userName={`Name Surname`}
                messageText={`
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem  
                `}
            />
            <MyMessage
                messageText={`lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem`}
            />
        </div>
    )
}

export default ChatContent;