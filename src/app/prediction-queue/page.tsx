"use client";
import { useState } from "react";
import PredictionList from "../components/PredictionList";

export default function PredictionQueuePage() {
  const [userId, setUserId] = useState("u1");

  return (
    <div style={{ padding: 24 }}>
      <div style={{
        background: '#f0f4ff',
        border: '1px solid #b3c6ff',
        borderRadius: 6,
        padding: 12,
        marginBottom: 16,
        color: '#1a237e',
        fontSize: 14
      }}>
        <strong>AI Feature Preview</strong><br/>
        This section will eventually use a production-grade AI/ML model to generate personalized product recommendations based on your order history, feedback, and behavioral data.<br/>
        <strong>Planned technical details:</strong>
        <ul style={{margin: '4px 0 0 16px'}}>
          <li>Integration with a Python-based ML microservice (via REST/gRPC)</li>
          <li>Real-time feature extraction and user profiling</li>
          <li>Model versioning and A/B testing</li>
          <li>Caching and queueing with Redis for performance</li>
          <li>Monitoring and explainability dashboards</li>
        </ul>
        <em>Current status: The recommendations shown here are generated using simple rule-based logic as a placeholder.</em>
      </div>
      <h1>Prediction Queue</h1>
      <input
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID"
      />
      <PredictionList userId={userId} />
    </div>
  );
}
