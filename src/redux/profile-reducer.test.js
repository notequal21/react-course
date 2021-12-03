import profileReducer, {addPostCreator} from "./profile-reducer";

let state =  {
    posts: [
        {id: 1, userName: 'Name Surname', postTime: '0:21', postDate: '12.10.2021', postText: 'Lorem ipsum dolor sit amet.'},
        {id: 2, userName: 'Name Surname', postTime: '02:21', postDate: '12.10.2021', postText: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
        {id: 3, userName: 'Name Surname', postTime: '12:21', postDate: '12.10.2021', postText: 'Lorem ipsum dolor sit amet, consectetur adipisicingsit amet, consectetur adipisicing sit amet, consectetur adipisicing.'},
        {id: 4, userName: 'Name Surname', postTime: '23:21', postDate: '12.10.2021', postText: 'Lorem.'},
    ],
}

test('posts length should be incremented', () => {
    let action = addPostCreator('yoYoYo')
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(5)
});

test('new message post should be correct', () => {
    let action = addPostCreator('yoYoYo')
    let newState = profileReducer(state, action);
    expect(newState.posts[4].postText).toBe('yoYoYo')
});