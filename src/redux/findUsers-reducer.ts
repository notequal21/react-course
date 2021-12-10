import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";
import {UsersType} from "../types/types";

const FOLLOW = 'findUsers/FOLLOW';
const UNFOLLOW = 'findUsers/UNFOLLOW';
const SET_USERS = 'findUsers/SET-USERS';
const SET_CURRENT_PAGE = 'findUsers/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'findUsers/SET-TOTAL-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'findUsers/TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'findUsers/TOGGLE-IS-FOLLOWING-PROGRESS';

let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 18,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>, // array of users id
}

type InitialStateType = typeof initialState

const findUsersReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: true}),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: false}),
            }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
            }
        default:
            return state;
    }

}

type FollowSuccessActionType = {
    type: typeof FOLLOW
    userID: number
}
export const followSuccess = (userID: number):FollowSuccessActionType => ({type: FOLLOW, userID});

type UnFollowSuccessActionType = {
    type: typeof UNFOLLOW
    userID: number
}
export const unFollowSuccess = (userID: number):UnFollowSuccessActionType => ({type: UNFOLLOW, userID})

type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UsersType>
}
export const setUsers = (users: Array<UsersType>):SetUsersActionType => ({type: SET_USERS, users})

type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number):SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage})

type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}
export const setTotalUsersCount = (totalUsersCount: number):SetTotalUsersCountActionType => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount })

type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean):ToggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching })

type toggleFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userID: number
}
export const toggleFollowingProgress = (isFetching: boolean, userID: number):toggleFollowingProgressActionType => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userID})



export const requestUsers = (page: number, pageSize: number) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page))

    let data = await usersAPI.getUsers(page, pageSize);

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}

const followUnfollowFlow = async (dispatch: any, userID: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, userID))
    let response = await apiMethod(userID);

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userID));
    }
    dispatch(toggleFollowingProgress(false, userID));
}

export const follow = (userID: number) => async (dispatch: any) => {
    let apiMethod = usersAPI.follow.bind(usersAPI);

    followUnfollowFlow(dispatch, userID, apiMethod, followSuccess);
}

export const unFollow = (userID: number) => async (dispatch: any) => {
    let apiMethod = usersAPI.unFollow.bind(usersAPI);

    followUnfollowFlow(dispatch, userID, apiMethod, unFollowSuccess);
}

export default findUsersReducer;