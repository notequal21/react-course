import s from "./ChatContent.module.scss";
import Message from "./Message/Message";

const ChatContent = (props) => {

    let message = props.state
        .map(m =>  <Message myMsg={m.myMsg} key={m.id} userImg={m.userImg} userName={m.userName} messageText={m.message}/>)

    return (
        <div className={`${s.chatContent}`}>
            {message}
        </div>
    )
}

export default ChatContent;