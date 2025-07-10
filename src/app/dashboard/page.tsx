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
      <PredictionList userId={user.id} />
    </div>
  );
}
