import { Link } from "react-router-dom";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div>
      <nav className="navbar">
        <div className="brand">Crime Hotspot Admin</div>
        <ul className="nav-links">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/resolved">Resolved</Link>
          </li>
          <li>
            <Link to="/alerts">Alerts</Link>
          </li>
          <li>
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </nav>
      <main className="content">{children}</main>
    </div>
  );
}
