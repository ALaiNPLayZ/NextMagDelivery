"use client";
import { useEffect, useState } from "react";

export default function OrderList({ userId }: { userId: string }) {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/dashboard")
      .then((res) => res.json())
      .then((data) => setOrders(data.user?.recentOrders || []));
  }, []);

  return (
    <div>
      <h3
        style={{
          fontSize: "1.15rem",
          fontWeight: 700,
          color: "var(--gray-700)",
          marginBottom: "0.7rem",
        }}
      >
        Recent Orders
      </h3>
      <ul style={{ paddingLeft: 0, margin: 0, listStyle: "none" }}>
        {orders.length === 0 ? (
          <li style={{ color: "var(--gray-400)", fontStyle: "italic" }}>
            No orders found.
          </li>
        ) : (
          orders.map((o: any, i) => (
            <li
              key={i}
              style={{
                marginBottom: "0.5rem",
                padding: "0.5rem 0.7rem",
                borderRadius: "6px",
                background: "var(--gray-200)",
                color: "var(--gray-700)",
                fontWeight: 500,
                fontSize: "1rem",
                boxShadow: "0 1px 2px rgba(0,0,0,0.02)",
              }}
            >
              🛒 <b>{o.product}</b>{" "}
              <span style={{ color: "var(--gray-500)" }}>– {o.status}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
