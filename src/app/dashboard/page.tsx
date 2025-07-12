"use client";
import { useEffect, useState } from "react";
import OrderList from "../components/OrderList";
import PredictionList from "../components/PredictionList";
import FeatureScore from "../components/FeatureScore";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    fetch("/api/dashboard")
      .then((res) => res.json())
      .then((data) => setUser(data.user));
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "var(--background)",
        color: "var(--gray-700)",
        padding: "2rem 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Top: Welcome + RFM Score in a single card */}
      <section
        style={{
          width: "100%",
          maxWidth: 1000,
          margin: "0 auto",
          marginBottom: "2rem",
          background: "var(--card-bg)",
          border: "1px solid var(--border)",
          borderRadius: "14px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          padding: "1.5rem 2rem",
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        {/* Left: Welcome and Consent */}
        <div style={{ textAlign: "left" }}>
          <div
            style={{
              fontSize: "2.1rem",
              fontWeight: 900,
              color: "var(--gray-700)",
              marginBottom: "0.5rem",
              lineHeight: 1.1,
            }}
          >
            Welcome, {user.name}
          </div>
          <div
            style={{
              fontSize: "1.2rem",
              fontWeight: 700,
              color: user.consent ? "var(--gray-500)" : "var(--gray-400)",
              marginTop: "0.2rem",
            }}
          >
            Consent:{" "}
            <span
              style={{
                color: user.consent ? "var(--gray-700)" : "var(--gray-400)",
                fontWeight: 700,
              }}
            >
              {user.consent ? "Granted" : "Denied"}
            </span>
          </div>
        </div>
        {/* Right: RFM Score */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--gray-100)",

            boxShadow: "0 1px 4px rgba(0,0,0,0.02)",
            padding: "1.2rem 1.5rem",
            minWidth: 120,
            minHeight: 80,
          }}
        >
          <FeatureScore userId={user.id} />
        </div>
      </section>

      {/* Bottom 2-column grid: Orders + Predictions */}
      <section
        style={{
          width: "100%",
          maxWidth: 1000,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.2rem",
          margin: "0 auto",
        }}
      >
        {/* Recent Orders */}
        <div
          style={{
            background: "var(--gray-100)",
            border: "1px solid var(--border)",
            borderRadius: "14px",
            padding: "1.2rem 1rem",
            boxShadow: "0 1px 4px rgba(0,0,0,0.02)",
            display: "flex",
            flexDirection: "column",
            minHeight: 160,
          }}
        >
          <OrderList userId={user.id} />
        </div>
        {/* Predicted Items */}
        <div
          style={{
            background: "var(--gray-100)",
            border: "1px solid var(--border)",
            borderRadius: "14px",
            padding: "1.2rem 1rem",
            boxShadow: "0 1px 4px rgba(0,0,0,0.02)",
            display: "flex",
            flexDirection: "column",
            minHeight: 160,
          }}
        >
          <PredictionList userId={user.id} />
        </div>
      </section>
    </main>
  );
}
