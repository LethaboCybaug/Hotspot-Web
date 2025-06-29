import Layout from "../components/Layout";

export default function Alerts() {
  return (
    <Layout>
      <div>
        <h1>Active Alerts</h1>
        <div className="alert">
          <h2>Robbery</h2>
          <p>Location: Elm Street</p>
          <p>Time: 2025-05-02 17:45</p>
          <button>View Details</button>
        </div>
        <div className="alert">
          <h2>Assault</h2>
          <p>Location: Market Avenue</p>
          <p>Time: 2025-05-03 09:10</p>
          <button>View Details</button>
        </div>
      </div>
    </Layout>
  );
}
