import React from "react";
import profilePlaceholder from "../../assets/img/profile-placeholder.png";
import s from  "./FindUsers.module.scss";
import UserCard from "./UserCard/UserdCard";
import * as axios from "axios";

class FindUsers extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

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
                            return <div className={`${s.findUsers__paginationItem} ${this.props.currentPage === p 
                                ? s.findUsers__paginationItemActive : null } `}
                                        onClick={ (e) => {this.onPageChanged(p)} } >{p}</div>
                        })}
                    </div>
                </div>
                <div className={`${s.cardsBody}`}>
                    {
                        this.props.users.map(u => <UserCard key={u.id} id={u.id}
                           follow={this.props.follow} unFollow={this.props.unFollow}
                           userImg={u.photos.large != null ? u.photos.large != null : profilePlaceholder} userName={u.name}
                           country={`u.location.country`} city={`u.location.city`}
                           status={`u.status`} followed={u.followed}
                        />)
                    }
                </div>
            </div>
        )
    }

}

export default FindUsers;