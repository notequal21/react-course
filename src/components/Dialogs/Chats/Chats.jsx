import s from "./Chats.module.scss";
import ChatsUser from "./ChatsUser/ChatsUser";
import userImg from "./img_user.png";

const Chats = (props) => {

    let dialog = props.dialogs
        .map(d => <ChatsUser id={d.id} userName={d.userName} userImg={d.userImg}/>)

    return (
        <div className={`${s.chats}`}>
            {dialog}
        </div>
    )
}

export default Chats;