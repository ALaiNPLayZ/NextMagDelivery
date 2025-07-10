"use client";
import { useState } from "react";

export default function JobsPage() {
  const [result, setResult] = useState("");

  async function runJob(endpoint: string) {
    setResult("Running...");
    const res = await fetch(endpoint, { method: "POST" });
    const data = await res.json();
    setResult(JSON.stringify(data));
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Jobs & Workers</h1>
      <button onClick={() => runJob("/api/jobs/mock-etl")}>
        Run Mock ETL Job
      </button>
      <button onClick={() => runJob("/api/jobs/inventory-sync")}>
        Run Inventory Sync
      </button>
      <button onClick={() => runJob("/api/jobs/feedback-trigger")}>
        Run Feedback Trigger
      </button>
      <div>
        <strong>Result:</strong>
        <pre>{result}</pre>
      </div>
    </div>
  );
}
