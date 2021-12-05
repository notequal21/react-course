import './App.scss';
import Nav from "./components/Nav/Nav";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settgings/Settings";
import Friends from "./components/Friends/Friends";
import FindUsersContainer from "./components/FindUsers/FindUsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import React from "react";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {compose} from "redux";
import {withSuspense} from "./hoc/withSuspense";

// lazy imports
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className={'appWrapper'}>
                <HeaderContainer/>
                <Nav/>

                <Route path={'/profile/:userId?'}
                       render={withSuspense(ProfileContainer)}/>
                <Route path={'/dialogs'}
                       render={withSuspense(DialogsContainer)}/>
                <Route render={() => <News/>} path={'/news'}/>
                <Route render={() => <Music/>} path={'/music'}/>
                <Route render={() => <Friends/>} path={'/friends'}/>
                <Route render={() => <FindUsersContainer/>} path={'/friendFind'}/>
                <Route render={() => <Settings/>} path={'/settings'}/>
                <Route render={() => <LoginContainer/>} path={'/login'}/>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)