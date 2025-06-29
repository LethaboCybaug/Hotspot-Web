import Layout from "../components/Layout";

export default function Dashboard() {
  return (
    <Layout>
      <div>
        <h1>All Incidents</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Location</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Robbery</td>
              <td>Main Street</td>
              <td>Resolved</td>
              <td>
                <button>Resolve</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Assault</td>
              <td>Market Road</td>
              <td>Active</td>
              <td>
                <button>Resolve</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
