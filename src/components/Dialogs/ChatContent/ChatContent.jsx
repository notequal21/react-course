import s from "./ChatContent.module.scss";
import Message from "./Message/Message";
import MyMessage from "./MyMessage/MyMessage";
import userImg from "./img_user.png";

const ChatContent = () => {

    let messagesData = [
        {id: 1, userName: 'Name Surname', userImg: userImg, message: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem  '},
        {id: 2, userName: 'Name Surname', userImg: userImg, message: 'lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem  '}
    ]

    return (
        <div className={`${s.chatContent}`}>
            <Message userImg={messagesData[0].userImg} userName={messagesData[0].userName} messageText={messagesData[0].message}/>
            <MyMessage messageText={messagesData[1].message}/>
        </div>
    )
}

export default ChatContent;