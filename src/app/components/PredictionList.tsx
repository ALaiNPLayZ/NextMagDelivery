"use client";
import { useEffect, useState } from "react";

export default function PredictionList({ userId }: { userId: string }) {
  const [predictions, setPredictions] = useState<any[]>([]);
  useEffect(() => {
    fetch("/api/predictionQueue?userId=" + userId)
      .then((res) => res.json())
      .then((data) => setPredictions(data.dbQueue || []));
  }, [userId]);
  if (!userId) return <div>Enter userId to see predictions.</div>;
  return (
    <div>
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
      <h3>Predicted Items</h3>
      <ul>
        {predictions.map((p: any) => (
          <li key={p.id}>
            {p.productId} (Confidence: {p.confidence})
          </li>
        ))}
      </ul>
    </div>
  );
}
