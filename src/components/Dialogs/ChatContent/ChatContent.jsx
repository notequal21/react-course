import s from "./ChatContent.module.scss";
import Message from "./Message/Message";
import userImg from "./img_user.png";

const ChatContent = (props) => {

    let message = props.messages
        .map(m =>  <Message myMsg={m.myMsg} userImg={m.userImg} userName={m.userName} messageText={m.message}/>)

    return (
        <div className={`${s.chatContent}`}>
            {message}
        </div>
    )
}

export default ChatContent;