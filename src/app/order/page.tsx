"use client";
import { useState } from "react";
import OrderList from "../components/OrderList";

export default function OrderPage() {
  const [userId, setUserId] = useState("u1");

  return (
    <div style={{ padding: 24 }}>
      <h1>Orders</h1>
      <input
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID"
      />
      <OrderList userId={userId} />
    </div>
  );
}
