import userImg from "../components/Dialogs/Chats/img_user.png";

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_BODY = 'UPDATE-MESSAGE-BODY';

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
    newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, myMsg: true, userName: 'Name Surname', userImg: userImg, message: body}],
            }
        }
        case UPDATE_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.newMessageBody
            }
        }
        default:
            return state;
    }

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const onChangeMessageBodyCreator = (newMessageBody) =>
    ({type: UPDATE_MESSAGE_BODY, newMessageBody: newMessageBody,})

export default dialogsReducer;