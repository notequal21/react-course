import {createSelector} from "reselect";
import {AppStateType} from "./redux-store";

const getUsersSelector = (state: AppStateType) => {
    return state.findUsersPage.users;
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
})

export const getPageSize = (state: AppStateType) => {
    return state.findUsersPage.pageSize;
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.findUsersPage.totalUsersCount;
}

export const getCurrentPage = (state: AppStateType) => {
    return state.findUsersPage.currentPage;
}

export const getIsFetching = (state: AppStateType) => {
    return state.findUsersPage.isFetching;
}

export const getFollowingInProgress = (state: AppStateType) => {
    return state.findUsersPage.followingInProgress;
}