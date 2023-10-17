import { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../features/userReducer";
import "./styles/UserLogin.css";

const UserLogin = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = () => {
    setLoggedIn(true);
    dispatch(actions.loginUsername(username));
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="user_bar">
      {loggedIn ? (
        <div>
          <div>Welcome, {username}</div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Sign In</button>
        </div>
      )}
    </div>
  );
};

export default UserLogin;
