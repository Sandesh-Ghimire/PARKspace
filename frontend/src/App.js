
import './App.css';
import LoginButton from './components/Login';
import LogoutButton from './components/Logout';
import Profile from './components/Profileuser';
import { useAuth0 } from "@auth0/auth0-react";


function App() {
  const { isLoading, error } = useAuth0();

  return (
    <main className="column">
      {/* <h1>Auth0 Login</h1> */}
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <LoginButton />
          <LogoutButton />
          <Profile />
        </>
      )}
    </main>
  );
}


export default App;
