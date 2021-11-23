import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unFollow
} from "../../redux/findUsers-reducer";
import FindUsers from "./FindUsers";
import React from "react";
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloader";

class FindUsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return <>

            {this.props.isFetching ? <Preloader /> : null}

            <FindUsers
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
            />

        </>
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.findUsersPage.users,
        pageSize: state.findUsersPage.pageSize,
        totalUsersCount: state.findUsersPage.totalUsersCount,
        currentPage: state.findUsersPage.currentPage,
        isFetching: state.findUsersPage.isFetching,
    }
};

export default connect(mapStateToProps, {
    follow, unFollow, setUsers,
    setCurrentPage, setTotalUsersCount,
    toggleIsFetching,}) (FindUsersContainer);