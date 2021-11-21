import profilePlaceholder from "../../assets/img/profile-placeholder.png";
import s from  "./FindUsers.module.scss";
import UserCard from "./UserCard/UserdCard";
import * as axios from "axios";

const FindUsers = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        });

    }

    return (
        <div className={`${s.cards}`}>
            <div className={`${s.cards__title}`}>Пользователи</div>
            <div className={`${s.cardsBody}`}>
                {
                    props.users.map(u => <UserCard key={u.id} id={u.id}
                       follow={props.follow} unFollow={props.unFollow}
                       userImg={u.photos.large != null ? u.photos.large != null : profilePlaceholder} userName={u.name}
                       country={`u.location.country`} city={`u.location.city`}
                       status={u.status} followed={u.followed}
                    />)
                }
            </div>
        </div>
    )

}

export default FindUsers;