import './App.scss';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settgings/Settings";
import Friends from "./components/Friends/Friends";
import FindUsersContainer from "./components/FindUsers/FindUsersContainer";

function App(props) {
    return (
        <div className={'appWrapper'}>
            <Header/>
            <Nav/>

            <Route render={() => <Profile state={props.state} /> } path={'/profile'}/>
            <Route render={() => <Dialogs state={props.state} />} path={'/dialogs'}/>
            <Route render={() => <News/>} path={'/news'}/>
            <Route render={() => <Music/>} path={'/music'}/>
            <Route render={() => <Friends/>} path={'/friends'}/>
            <Route render={() => <FindUsersContainer/>} path={'/friendFind'}/>
            <Route render={() => <Settings/>} path={'/settings'}/>

        </div>
    );
}

export default App;
