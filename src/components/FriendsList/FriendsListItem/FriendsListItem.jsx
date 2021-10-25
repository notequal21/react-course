import s from "../FriendsList.module.scss";

const FriendsListItem = (props) => {
    return (
        <div className={`${s.freindsList__item}`}>
            <img src={props.userImg} alt=""/>
            <span>{props.name}</span>
        </div>
    )
}

export default FriendsListItem;