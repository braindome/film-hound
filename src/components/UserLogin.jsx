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
          <button className="logout_btn" onClick={handleLogout}>Logout</button>
          
        </div>
        
      ) : (
        
        <div>
          
          <input className="input-user"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          
          <input className="input-password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            
          />
          <div className="btn-design">
        <button className="login_btn" onClick={handleLogin}>Sign In</button>
        </div>
          
        </div>
        
        
      )}
    </div>
  );
};

export default UserLogin;
