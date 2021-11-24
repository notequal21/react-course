import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import findUsersReducer from "./findUsers-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    findUsersPage: findUsersReducer,
    auth: authReducer,
});

let store = createStore(reducers);

export default store;