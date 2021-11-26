import userImg from "../components/Dialogs/Chats/img_user.png";

const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, myMsg: true, userName: 'Name Surname', userImg: userImg, message: body}],
            }
        }
        default:
            return state;
    }

}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;