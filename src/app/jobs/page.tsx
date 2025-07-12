"use client";
import { useState } from "react";

export default function JobsPage() {
  const [result, setResult] = useState("");

  async function runJob(endpoint: string) {
    setResult("Running...");
    const res = await fetch(endpoint, { method: "POST" });
    const data = await res.json();
    setResult(
      data.success !== undefined
        ? String(data.success)
        : JSON.stringify(data, null, 2)
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "var(--background)",
        color: "var(--gray-700)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "2rem 0",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: 1200,
          background: "var(--card-bg)",
          border: "1px solid var(--border)",
          borderRadius: "14px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          padding: "2rem 1.5rem",
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: "1.6rem",
            fontWeight: 800,
            marginBottom: "1.2rem",
            color: "var(--gray-700)",
            letterSpacing: "-0.5px",
          }}
        >
          Jobs & Workers
        </h1>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginBottom: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => runJob("/api/jobs/mock-etl")}
            style={{
              background: "var(--gray-700)",
              color: "#fff",
              padding: "0.7rem 1.5rem",
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: "1rem",
              border: "none",
              boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
              cursor: "pointer",
              transition: "background 0.18s, color 0.18s",
            }}
          >
            Run Mock ETL Job
          </button>
          <button
            onClick={() => runJob("/api/jobs/inventory-sync")}
            style={{
              background: "var(--gray-700)",
              color: "#fff",
              padding: "0.7rem 1.5rem",
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: "1rem",
              border: "none",
              boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
              cursor: "pointer",
              transition: "background 0.18s, color 0.18s",
            }}
          >
            Run Inventory Sync
          </button>
          {/* <button
            onClick={() => runJob("/api/jobs/feedback-trigger")}
            style={{
              background: "var(--gray-700)",
              color: "#fff",
              padding: "0.7rem 1.5rem",
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: "1rem",
              border: "none",
              boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
              cursor: "pointer",
              transition: "background 0.18s, color 0.18s",
            }}
          >
            Run Feedback Trigger
          </button> */}
        </div>
        <div style={{ width: "100%" }}>
          <strong>Result:</strong>
          <pre
            style={{
              background: "var(--gray-100)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "1rem",
              marginTop: "0.5rem",
              color: "var(--gray-700)",
              fontSize: "1rem",
              minHeight: "60px",
              whiteSpace: "pre-wrap",
              wordBreak: "break-all",
            }}
          >
            {result}
          </pre>
        </div>
      </section>
    </main>
  );
}
