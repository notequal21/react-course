import s from "./Message.module.scss";

const Message = (props) => {
    return (
        <div className={`${s.messsage}`}>
            <div className={`${s.messsage__name}`}>{props.userName}</div>
            <div className={`${s.messsage__ico}`}><img src={props.userImg} alt=""/></div>
            <div className={`${s.messsage__text}`}>{props.messageText}</div>
        </div>
    )
}

export default Message;