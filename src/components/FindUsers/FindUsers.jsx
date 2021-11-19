import userImg from "../Dialogs/Chats/img_user.png";
import s from  "./FindUsers.module.scss";
import UserCard from "./UserCard/UserdCard";

const FindUsers = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {id: 1, followed: true, userName: 'Name Surname', userImg: userImg, status: 'im fine', location: {city: 'Moscow', country: 'Russia'}},
            {id: 2, followed: true, userName: 'Name Surname', userImg: userImg, status: 'im fine', location: {city: 'Moscow', country: 'Russia'}},
            {id: 3, followed: false, userName: 'Name Surname', userImg: userImg, status: 'im fine', location: {city: 'Moscow', country: 'Russia'}},
            {id: 4, followed: false, userName: 'Name Surname', userImg: userImg, status: 'im fine', location: {city: 'Moscow', country: 'Russia'}},
            {id: 5, followed: true, userName: 'Name Surname', userImg: userImg, status: 'im fine', location: {city: 'Moscow', country: 'Russia'}},
            {id: 6, followed: false, userName: 'Name Surname', userImg: userImg, status: 'im fine', location: {city: 'Moscow', country: 'Russia'}},
        ])
    }

    return (
        <div className={`${s.cards}`}>
            <div className={`${s.cards__title}`}>Пользователи</div>
            <div className={`${s.cardsBody}`}>
                {
                    props.users.map(u => <UserCard key={u.id} id={u.id}
                       follow={props.follow} unFollow={props.unFollow}
                       userImg={u.userImg} userName={u.userName}
                       country={u.location.country} city={u.location.city}
                       status={u.status} followed={u.followed}
                    />)
                }
            </div>
        </div>
    )

}

export default FindUsers;