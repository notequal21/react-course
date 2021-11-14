import userImg from "../components/Dialogs/Chats/img_user.png";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_BODY = 'UPDATE-MESSAGE-BODY';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, userName: 'Name Surname', postTime: '0:21', postDate: '12.10.2021', postText: 'Lorem ipsum dolor sit amet.'},
                {id: 2, userName: 'Name Surname', postTime: '02:21', postDate: '12.10.2021', postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
                {id: 3, userName: 'Name Surname', postTime: '12:21', postDate: '12.10.2021', postText: 'Lorem ipsum dolor sit amet, consectetur adipisicingsit amet, consectetur adipisicing sit amet, consectetur adipisicing.'},
                {id: 4, userName: 'Name Surname', postTime: '23:21', postDate: '12.10.2021', postText: 'Lorem.'},
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, userName: 'Name Surname', userImg: userImg,},
                {id: 2, userName: 'Name Surname', userImg: userImg,},
                {id: 3, userName: 'Name Surname', userImg: userImg,},
            ],
            messages: [
                {id: 1, myMsg: false, userName: 'Name Surname', userImg: userImg, message: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem  '},
                {id: 2, myMsg: true, userName: 'Name Surname', userImg: userImg, message: 'lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem  '},
                {id: 3, myMsg: false, userName: 'Name Surname', userImg: userImg, message: 'lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem  '},
                {id: 4, myMsg: false, userName: 'Name Surname', userImg: userImg, message: 'lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem  '},
                {id: 5, myMsg: true, userName: 'Name Surname', userImg: userImg, message: 'lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem  '},
            ],
            newMessageBody: '',
        }
    },
    _callSubscriber() {
        console.log(`state is changed`)
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                userName: 'Name Surname',
                postTime: '7:00',
                postDate: '26.10.2021',
                postText: this._state.profilePage.newPostText,
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.messages.push({id: 6, myMsg: true, userName: 'Name Surname', userImg: userImg, message: body});
            this._state.dialogsPage.newMessageBody = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.newMessageBody;
            this._callSubscriber(this._state);
        }
    },
}

export const addPostCreator = () => ({type: ADD_POST})

export const onPostChangeCreator = (newPostText) =>
    ({type: UPDATE_NEW_POST_TEXT, newPostText: newPostText,})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const onChangeMessageBodyCreator = (newMessageBody) =>
    ({type: UPDATE_MESSAGE_BODY, newMessageBody: newMessageBody,})

export default store;