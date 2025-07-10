"use client";
import { useState } from "react";
import FeedBackForm from "../components/FeedBackForm";

export default function FeedbackPage() {
  const [userId, setUserId] = useState("u1");
  const [orderId, setOrderId] = useState("");

  return (
    <div style={{ padding: 24 }}>
      <h1>Feedback</h1>
      <input
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID"
      />
      <input
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        placeholder="Order ID"
      />
      <FeedBackForm userId={userId} orderId={orderId} />
    </div>
  );
}
