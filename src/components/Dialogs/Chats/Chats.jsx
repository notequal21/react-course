import s from "./Chats.module.scss";
import ChatsUser from "./ChatsUser/ChatsUser";

const Chats = () => {
    return (
        <div className={`${s.chats}`}>
            <ChatsUser/>
            <ChatsUser/>
            <ChatsUser/>
        </div>
    )
}

export default Chats;