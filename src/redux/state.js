import userImg from "../components/Dialogs/Chats/img_user.png";
import {rerenderEntireTree} from "../rerender";

let state = {
    profilePage: {
        posts: [
            {id: 1, userName: 'Name Surname', postTime: '0:21', postDate: '12.10.2021', postText: 'Lorem ipsum dolor sit amet.'},
            {id: 2, userName: 'Name Surname', postTime: '02:21', postDate: '12.10.2021', postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
            {id: 3, userName: 'Name Surname', postTime: '12:21', postDate: '12.10.2021', postText: 'Lorem ipsum dolor sit amet, consectetur adipisicingsit amet, consectetur adipisicing sit amet, consectetur adipisicing.'},
            {id: 4, userName: 'Name Surname', postTime: '23:21', postDate: '12.10.2021', postText: 'Lorem.'},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, userName: 'Name Surname', userImg: userImg},
            {id: 2, userName: 'Name Surname', userImg: userImg},
            {id: 3, userName: 'Name Surname', userImg: userImg},
        ],
        messages: [
            {id: 1, myMsg: false, userName: 'Name Surname', userImg: userImg, message: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem  '},
            {id: 2, myMsg: true, userName: 'Name Surname', userImg: userImg, message: 'lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem  '},
            {id: 3, myMsg: false, userName: 'Name Surname', userImg: userImg, message: 'lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem  '},
            {id: 4, myMsg: false, userName: 'Name Surname', userImg: userImg, message: 'lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem  '},
            {id: 5, myMsg: true, userName: 'Name Surname', userImg: userImg, message: 'lorem lorem  lorem lorem lorem lorem lorem lorem lorem lorem lorem  '},
        ],
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        userName: 'Name Surname',
        postTime: '7:00',
        postDate: '26.10.2021',
        postText: postMessage,
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;