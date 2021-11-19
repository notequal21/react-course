import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC} from "../../redux/findUsers-reducer";
import FindUsers from "./FindUsers";

let mapStateToProps = (state) => {
    return {
        users: state.findUsersPage.users
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID));
        },
        unFollow: (userID) => {
            dispatch(unFollowAC(userID));
        },
        setUsers: (user) => {
            dispatch(setUsersAC(user))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FindUsers);