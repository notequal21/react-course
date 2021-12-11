import s from "./FindUsers.module.scss";
import UserCard from "./UserCard/UserdCard";
import profilePlaceholder from "../../assets/img/profile-placeholder.png";
import React from "react";
import Paginator from "../common/Paginator/Paginator";
import {UsersType} from "../../types/types";

type PropsType = {
    currentPage: number
    onPageChanged: any
    totalUsersCount: number
    pageSize: number
    users: Array<UsersType>
    followingInProgress: Array<number>
    follow: () => {}
    unFollow: () => {}
    followed: any
}

const FindUsers: React.FC<PropsType> = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {

    return (
        <div className={`${s.cards}`}>
            <div className={`${s.cards__title}`}>
                Пользователи
                <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                           totalItemsCount={totalUsersCount} pageSize={pageSize}/>
            </div>
            <div className={`${s.cardsBody}`}>
                {
                    users.map(u => <UserCard key={u.id} id={u.id}
                        follow={props.follow} unFollow={props.unFollow}
                        userImg={u.photos.large != null ? u.photos.large != null : profilePlaceholder} userName={u.name}
                        country={`u.location.country`} city={`u.location.city`}
                        status={`u.status`} followed={u.followed}
                        followingInProgress={props.followingInProgress}
                    />)
                }
            </div>
        </div>
    )
}

export default FindUsers;