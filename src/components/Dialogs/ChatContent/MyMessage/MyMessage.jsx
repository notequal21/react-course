 import s from "./MyMessage.module.scss";

const MyMessage = (props) => {
    return (
        <div className={`${s.messsage}`}>
            <div className={`${s.messsage__name}`}>Me</div>
            <div className={`${s.messsage__text}`}>{props.messageText}</div>
        </div>
    )
}

export default MyMessage;