import s from "./FindUsers.module.scss";
import UserCard from "./UserCard/UserdCard";
import profilePlaceholder from "../../assets/img/profile-placeholder.png";
import React from "react";

const FindUsers = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return (
        <div className={`${s.cards}`}>
            <div className={`${s.cards__title}`}>
                Пользователи
                <div className={`${s.findUsers__pagination}`}>
                    {/*<div className={`${s.findUsers__paginationItem} ${s.findUsers__paginationItemActive}`}>1</div>*/}
                    {pages.map(p => {
                        return <div className={`${s.findUsers__paginationItem} ${props.currentPage === p
                            ? s.findUsers__paginationItemActive : null } `}
                                    onClick={ (e) => {props.onPageChanged(p)} } >{p}</div>
                    })}
                </div>
            </div>
            <div className={`${s.cardsBody}`}>
                {
                    props.users.map(u => <UserCard key={u.id} id={u.id}
                        follow={props.follow} unFollow={props.unFollow}
                        userImg={u.photos.large != null ? u.photos.large != null : profilePlaceholder} userName={u.name}
                        country={`u.location.country`} city={`u.location.city`}
                        status={`u.status`} followed={u.followed}
                    />)
                }
            </div>
        </div>
    )
}

export default FindUsers;