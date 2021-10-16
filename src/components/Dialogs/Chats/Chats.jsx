import s from "./Chats.module.scss";
import ChatsUser from "./ChatsUser/ChatsUser";
import userImg from "./img_user.png";

const Chats = () => {

    let dialogsData = [
        {id: 1, userName: 'Name Surname', userImg: userImg},
        {id: 2, userName: 'Name Surname', userImg: userImg},
        {id: 3, userName: 'Name Surname', userImg: userImg},
    ]

    return (
        <div className={`${s.chats}`}>
            <ChatsUser id={dialogsData[0].id} userName={dialogsData[0].userName} userImg={dialogsData[0].userImg}/>
            <ChatsUser id={dialogsData[1].id} userName={dialogsData[1].userName} userImg={dialogsData[1].userImg}/>
            <ChatsUser id={dialogsData[2].id} userName={dialogsData[2].userName} userImg={dialogsData[2].userImg}/>
        </div>
    )
}

export default Chats;