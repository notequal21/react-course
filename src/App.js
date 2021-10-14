import './App.scss';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/profile";

function App() {
  return (
      <div className={'wrapper'}>
          <Header/>
          <Nav/>
          <Profile/>
      </div>
  );
}

export default App;
