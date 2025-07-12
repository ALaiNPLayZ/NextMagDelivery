"use client";
import { useState } from "react";
import OrderList from "../components/OrderList";

export default function OrderPage() {
  const [userId, setUserId] = useState("u1");
  const [showOrders, setShowOrders] = useState(false);

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
          maxWidth: 500,
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
          Orders
        </h1>
        <input
          value={userId}
          onChange={(e) => {
            setUserId(e.target.value);
            setShowOrders(false);
          }}
          placeholder="User ID"
          style={{
            width: "100%",
            marginBottom: "1.2rem",
            padding: "0.7rem 1rem",
            borderRadius: "8px",
            border: "1px solid var(--gray-300)",
            background: "var(--gray-100)",
            color: "var(--gray-700)",
            fontSize: "1rem",
            outline: "none",
            transition: "border 0.2s",
          }}
        />
        {!showOrders && (
          <button
            onClick={() => setShowOrders(true)}
            style={{
              background: "var(--gray-700)",
              color: "#fff",
              padding: "0.7rem 2rem",
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: "1rem",
              border: "none",
              boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
              cursor: "pointer",
              marginBottom: "1.2rem",
              transition: "background 0.18s, color 0.18s",
            }}
          >
            Check Orders
          </button>
        )}
        {showOrders && <OrderList userId={userId} />}
      </section>
    </main>
  );
}
