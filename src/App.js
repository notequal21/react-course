import './App.scss';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";


function App() {
    return (
        <div className={'appWrapper'}>
            <Header />
            <Nav />

                <Profile />
                <Dialogs />

        </div>
    );
}

export default App;
