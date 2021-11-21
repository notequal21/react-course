import React from "react";
import profilePlaceholder from "../../assets/img/profile-placeholder.png";
import s from  "./FindUsers.module.scss";
import UserCard from "./UserCard/UserdCard";
import * as axios from "axios";

class FindUsers extends React.Component {

    constructor(props) {
        super(props);
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items)
            });

    }

    render() {
        return (
            <div className={`${s.cards}`}>
                <div className={`${s.cards__title}`}>Пользователи</div>
                <div className={`${s.cardsBody}`}>
                    {
                        this.props.users.map(u => <UserCard key={u.id} id={u.id}
                           follow={this.props.follow} unFollow={this.props.unFollow}
                           userImg={u.photos.large != null ? u.photos.large != null : profilePlaceholder} userName={u.name}
                           country={`u.location.country`} city={`u.location.city`}
                           status={u.status} followed={u.followed}
                        />)
                    }
                </div>
            </div>
        )
    }
}

export default FindUsers;