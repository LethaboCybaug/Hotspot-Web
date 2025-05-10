import Layout from "../components/Layout";

export default function Login() {
  return (
    <div className="centered">
      <h2>Admin Login</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </div>
  );
}
