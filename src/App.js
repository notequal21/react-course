import './scss/App.scss';
import Header from "./components/Header";
import Nav from "./components/nav";
import Profile from "./components/profile";

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
