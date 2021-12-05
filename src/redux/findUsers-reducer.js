import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'findUsers/FOLLOW';
const UNFOLLOW = 'findUsers/UNFOLLOW';
const SET_USERS = 'findUsers/SET-USERS';
const SET_CURRENT_PAGE = 'findUsers/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'findUsers/SET-TOTAL-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'findUsers/TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'findUsers/TOGGLE-IS-FOLLOWING-PROGRESS';

let initialState = {
    users: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}

const findUsersReducer = (state = initialState, action) => {

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

export const followSuccess = (userID) => ({type: FOLLOW, userID});

export const unFollowSuccess = (userID) => ({type: UNFOLLOW, userID});

export const setUsers = (users) => ({type: SET_USERS, users});

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage });

export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount });

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching });

export const toggleFollowingProgress = (isFetching, userID) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userID });



export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page))

    let data = await usersAPI.getUsers(page, pageSize);

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}

const followUnfollowFlow = async (dispatch, userID, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userID))
    let response = await apiMethod(userID);

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userID));
    }
    dispatch(toggleFollowingProgress(false, userID));
}

export const follow = (userID, ) => async (dispatch) => {
    let apiMethod = usersAPI.follow.bind(usersAPI);

    followUnfollowFlow(dispatch, userID, apiMethod, followSuccess);
}

export const unFollow = (userID) => async (dispatch) => {
    let apiMethod = usersAPI.unFollow.bind(usersAPI);

    followUnfollowFlow(dispatch, userID, apiMethod, unFollowSuccess);
}

export default findUsersReducer;