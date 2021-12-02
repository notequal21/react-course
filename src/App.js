import './App.scss';
import Nav from "./components/Nav/Nav";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settgings/Settings";
import Friends from "./components/Friends/Friends";
import FindUsersContainer from "./components/FindUsers/FindUsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import React from "react";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className={'appWrapper'}>
                <HeaderContainer/>
                <Nav/>

                <Route render={() => <ProfileContainer state={this.props.state}/>} path={'/profile/:userId?'}/>
                <Route render={() => <DialogsContainer state={this.props.state}/>} path={'/dialogs'}/>
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

export default connect(mapStateToProps, initializeApp)(App);