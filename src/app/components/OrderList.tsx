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
      <h3>Recent Orders</h3>
      <ul>
        {orders.map((o: any, i) => (
          <li key={i}>
            {o.product} - {o.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
