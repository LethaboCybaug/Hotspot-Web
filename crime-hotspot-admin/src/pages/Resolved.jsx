import Layout from "../components/Layout";

export default function Resolved() {
  return (
    <Layout>
      <div>
        <h1>Resolved Incidents</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Location</th>
              <th>Resolved Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>101</td>
              <td>Burglary</td>
              <td>Maple Ave</td>
              <td>2025-04-28 11:00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
