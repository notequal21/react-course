import s from "./FriendsList.module.scss";
import FriendsListItem from "./FriendsListItem/FriendsListItem";
import userImg from "./img_user.png";

const FriendsList = () => {
    return (
        <div className={`${s.freindsList}`}>
            <FriendsListItem name={`Name`} userImg={userImg}/>
            <FriendsListItem name={`Name`} userImg={userImg}/>
            <FriendsListItem name={`Name`} userImg={userImg}/>
            <FriendsListItem name={`Name`} userImg={userImg}/>
            <FriendsListItem name={`Name`} userImg={userImg}/>
            <FriendsListItem name={`Name`} userImg={userImg}/>
        </div>
    )
}

export default FriendsList;