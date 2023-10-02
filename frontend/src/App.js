import logo from './logo.svg';
import './App.css';
import LoginButton from './components/Login';
import LogoutButton from './components/Logout';
import Profile from './components/Profileuser';

function App() {
  return (
    <div className="App">
<LoginButton/>
<LogoutButton/>
<br></br>
<Profile/>
    </div>
  );
}

export default App;
