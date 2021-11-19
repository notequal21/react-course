import userImg from "../components/Dialogs/Chats/img_user.png";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        {id: 1, followed: true, userName: 'Name Surname', userImg: userImg, status: 'im fine', location: {city: 'Moscow', country: 'Russia'}},
        {id: 2, followed: true, userName: 'Name Surname', userImg: userImg, status: 'im fine', location: {city: 'Moscow', country: 'Russia'}},
        {id: 3, followed: false, userName: 'Name Surname', userImg: userImg, status: 'im fine', location: {city: 'Moscow', country: 'Russia'}},
        {id: 4, followed: false, userName: 'Name Surname', userImg: userImg, status: 'im fine', location: {city: 'Moscow', country: 'Russia'}},
        {id: 5, followed: true, userName: 'Name Surname', userImg: userImg, status: 'im fine', location: {city: 'Moscow', country: 'Russia'}},
        {id: 6, followed: false, userName: 'Name Surname', userImg: userImg, status: 'im fine', location: {city: 'Moscow', country: 'Russia'}},
    ],
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
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }

}

export const followAC = (userID) => ({type: FOLLOW, userID});

export const unFollowAC = (userID) => ({type: UNFOLLOW, userID});

export const setUsersAC = (users) => ({type: SET_USERS, users});

export default findUsersReducer;