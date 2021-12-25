import { connect } from "react-redux";
import {
    follow, requestUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unFollow
} from "../../redux/findUsers-reducer";
import FindUsers from "./FindUsers";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/users-selectors";
import { UsersType } from "../../types/types";
import { AppStateType } from "../../redux/redux-store";


type MapStatePropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: any
    followed?: any
}

type MapDispatchPropsType = {
    follow: any
    unFollow: any
    getUsers: any
}

type OwnPropsType = {
    pageTitle: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class FindUsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {/* <h2>{this.props.pageTitle}</h2> */}
            {this.props.isFetching ? <Preloader /> : null}

            <FindUsers
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                followed={this.props.followed}
                // toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />

        </>
    }

}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
};

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
        (mapStateToProps, { follow, unFollow, getUsers: requestUsers, }),
)(FindUsersContainer);