
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-TOTAL-COUNT';

let initialState = {
    users: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
}

const findUsersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true};
                    }
                    return u;
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                   if (u.id === action.userID) {
                       return {...u, followed: false};
                   }
                   return u;
                }),
            }
        case SET_USERS: {
            return {
                ...state,
                // users: [...state.users, ...action.users]
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
        default:
            return state;
    }

}

export const followAC = (userID) => ({type: FOLLOW, userID});

export const unFollowAC = (userID) => ({type: UNFOLLOW, userID});

export const setUsersAC = (users) => ({type: SET_USERS, users});

export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage });

export const setUsersTotalCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount });

export default findUsersReducer;