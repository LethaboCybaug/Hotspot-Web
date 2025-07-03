import Layout from "../components/Layout";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    

    /*// TODO: put your real auth logic here (call API, validate, etc.)
    // For now we just redirect:
    navigate("/map");*/
  };

  return (
    <div className="centered">
      <h2>Admin Login</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
