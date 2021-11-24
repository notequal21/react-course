import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState =  {
    posts: [
        {id: 1, userName: 'Name Surname', postTime: '0:21', postDate: '12.10.2021', postText: 'Lorem ipsum dolor sit amet.'},
        {id: 2, userName: 'Name Surname', postTime: '02:21', postDate: '12.10.2021', postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
        {id: 3, userName: 'Name Surname', postTime: '12:21', postDate: '12.10.2021', postText: 'Lorem ipsum dolor sit amet, consectetur adipisicingsit amet, consectetur adipisicing sit amet, consectetur adipisicing.'},
        {id: 4, userName: 'Name Surname', postTime: '23:21', postDate: '12.10.2021', postText: 'Lorem.'},
    ],
    newPostText: '',
    profile: null,
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 5, userName: 'Name Surname', postTime: '7:00',
                    postDate: '26.10.2021', postText: state.newPostText,}]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newPostText
            }
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        default:
            return state;
    }

}

export const addPostCreator = () => ({type: ADD_POST})

export const onPostChangeCreator = (newPostText) => ({type: UPDATE_NEW_POST_TEXT, newPostText: newPostText,})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userID) => (dispatch) => {
    usersAPI.getProfile(userID).then(response => {
        dispatch(setUserProfile(response.data));
    })
}

export default profileReducer;