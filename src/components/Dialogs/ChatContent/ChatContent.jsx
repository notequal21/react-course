import s from "./ChatContent.module.scss";
import Message from "./Message/Message";
import MyMessage from "./MyMessage/MyMessage";
import userImg from "./img_user.png";

const ChatContent = () => {

    let messages = [
        {id: 1, myMsg: false, userName: 'Name Surname', userImg: userImg, message: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem  '},
        {id: 2, myMsg: true, userName: 'Name Surname', userImg: userImg, message: 'lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem  '},
        {id: 3, myMsg: false, userName: 'Name Surname', userImg: userImg, message: 'lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem  '},
        {id: 4, myMsg: false, userName: 'Name Surname', userImg: userImg, message: 'lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem  '},
        {id: 5, myMsg: true, userName: 'Name Surname', userImg: userImg, message: 'lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem  '},
    ]

    let message = messages
        .map(m =>  <Message myMsg={m.myMsg} userImg={m.userImg} userName={m.userName} messageText={m.message}/>)

    return (
        <div className={`${s.chatContent}`}>
            {message}
        </div>
    )
}

export default ChatContent;