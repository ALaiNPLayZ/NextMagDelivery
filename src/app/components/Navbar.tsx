"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: 16,
        padding: 16,
        borderBottom: "1px solid #eee",
      }}
    >
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/consent">Consent</Link>
      <Link href="/prediction">Prediction</Link>
      <Link href="/prediction-queue">Prediction Queue</Link>
      <Link href="/van">Van Tracking</Link>
      <Link href="/order">Order</Link>
      <Link href="/inventory">Inventory</Link>
      <Link href="/feedback">Feedback</Link>
      <Link href="/governance">Governance</Link>
      <Link href="/jobs">Jobs</Link>
    </nav>
  );
}
