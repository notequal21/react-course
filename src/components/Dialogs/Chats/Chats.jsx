import s from "./Chats.module.scss";
import ChatsUser from "./ChatsUser/ChatsUser";
import userImg from "./img_user.png";

const Chats = () => {

    let dialogs = [
        {id: 1, userName: 'Name Surname', userImg: userImg},
        {id: 2, userName: 'Name Surname', userImg: userImg},
        {id: 3, userName: 'Name Surname', userImg: userImg},
    ]

    let dialog = dialogs
        .map(d => <ChatsUser id={d.id} userName={d.userName} userImg={d.userImg}/>)

    return (
        <div className={`${s.chats}`}>
            {dialog}
        </div>
    )
}

export default Chats;