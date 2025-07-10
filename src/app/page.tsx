import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 32 }}>
      <h1>Magical Delivery System</h1>
      <p>
        Welcome to the Magical Delivery dashboard. Use the navigation bar above
        to explore features:
      </p>
      <ul>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/consent">Consent Management</Link>
        </li>
        <li>
          <Link href="/prediction">Predictions</Link>
        </li>
        <li>
          <Link href="/prediction-queue">Prediction Queue</Link>
        </li>
        <li>
          <Link href="/van">Van Tracking</Link>
        </li>
        <li>
          <Link href="/order">Orders</Link>
        </li>
        <li>
          <Link href="/inventory">Inventory</Link>
        </li>
        <li>
          <Link href="/feedback">Feedback</Link>
        </li>
        <li>
          <Link href="/governance">Governance & Audit Logs</Link>
        </li>
        <li>
          <Link href="/jobs">Jobs & Workers</Link>
        </li>
      </ul>
      <p>
        Start by visiting the <Link href="/dashboard">Dashboard</Link> or any
        section above.
      </p>
    </main>
  );
}
