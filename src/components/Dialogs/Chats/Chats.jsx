import s from "./Chats.module.scss";
import ChatsUser from "./ChatsUser/ChatsUser";

const Chats = (props) => {

    let dialog = props.state
        .map(d => <ChatsUser id={d.id} userName={d.userName} userImg={d.userImg} />)

    return (
        <div className={`${s.chats}`}>
            {dialog}
        </div>
    )
}

export default Chats;