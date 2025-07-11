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
    <div style={{ padding: 24 }}>
      <h1>Welcome, {user.name}</h1>
      <p>Consent: {user.consent ? "Granted" : "Denied"}</p>
      <FeatureScore userId={user.id} />
      <OrderList userId={user.id} />
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
      <PredictionList userId={user.id} />
    </div>
  );
}
