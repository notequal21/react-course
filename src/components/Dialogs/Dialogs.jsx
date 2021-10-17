import s from "./Dialogs.module.scss";
import Chats from "./Chats/Chats";
import ChatContent from "./ChatContent/ChatContent";
import ChatNewMsg from "./ChatNewMsg/ChatNewMsg";
import userImg from "./Chats/img_user.png";

const Dialogs = () => {

    let dialogs = [
        {id: 1, userName: 'Name Surname', userImg: userImg},
        {id: 2, userName: 'Name Surname', userImg: userImg},
        {id: 3, userName: 'Name Surname', userImg: userImg},
    ]
    let messages = [
        {id: 1, myMsg: false, userName: 'Name Surname', userImg: userImg, message: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem  '},
        {id: 2, myMsg: true, userName: 'Name Surname', userImg: userImg, message: 'lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem  '},
        {id: 3, myMsg: false, userName: 'Name Surname', userImg: userImg, message: 'lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem  '},
        {id: 4, myMsg: false, userName: 'Name Surname', userImg: userImg, message: 'lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem  '},
        {id: 5, myMsg: true, userName: 'Name Surname', userImg: userImg, message: 'lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem  '},
    ]

    return (
        <div className={`${s.content}`}>

            <Chats dialogs={dialogs}/>

            <div className={`${s.chat}`}>

                <ChatContent messages={messages}/>
                <ChatNewMsg/>

            </div>

        </div>
    )
}

export default Dialogs;