import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_STATUS = 'profile/SET-STATUS';
const DELETE_POST = 'profile/DELETE-POST';

let initialState =  {
    posts: [
        {id: 1, userName: 'Name Surname', postTime: '0:21', postDate: '12.10.2021', postText: 'Lorem ipsum dolor sit amet.'},
        {id: 2, userName: 'Name Surname', postTime: '02:21', postDate: '12.10.2021', postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
        {id: 3, userName: 'Name Surname', postTime: '12:21', postDate: '12.10.2021', postText: 'Lorem ipsum dolor sit amet, consectetur adipisicingsit amet, consectetur adipisicing sit amet, consectetur adipisicing.'},
        {id: 4, userName: 'Name Surname', postTime: '23:21', postDate: '12.10.2021', postText: 'Lorem.'},
    ],
    newPostText: '',
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 5, userName: 'Name Surname', postTime: '7:00',
                    postDate: '26.10.2021', postText: action.newPostText,}]
            }
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postID)
            }
        default:
            return state;
    }

}

export const addPostCreator = (newPostText) => ({type: ADD_POST, newPostText})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setStatus = (status) => ({type: SET_STATUS, status})

export const deletePost = (postID) => ({type: DELETE_POST, postID})



export const getUserProfile = (userID) => async (dispatch) => {
    let response = await usersAPI.getProfile(userID);
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await getStatus(userId);
    dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}



export default profileReducer;