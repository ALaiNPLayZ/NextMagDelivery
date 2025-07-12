"use client";
import { useEffect, useState } from "react";

export default function InventoryTable() {
  const [inventory, setInventory] = useState<any[]>([]);
  useEffect(() => {
    fetch("/api/fulfillment")
      .then((res) => res.json())
      .then((data) => setInventory(data.inventory || []));
  }, []);
  return (
    <div style={{ width: "100%" }}>
      <h3
        style={{
          fontSize: "1.2rem",
          fontWeight: 700,
          color: "var(--gray-700)",
          marginBottom: "1rem",
        }}
      >
        Inventory
      </h3>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "var(--gray-100)",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
        }}
      >
        <thead>
          <tr
            style={{
              background: "var(--gray-200)",
              color: "var(--gray-700)",
              fontWeight: 700,
              fontSize: "1rem",
            }}
          >
            <th
              style={{
                padding: "0.9rem 1rem",
                textAlign: "left",
                borderBottom: "1px solid var(--border)",
              }}
            >
              Product
            </th>
            <th
              style={{
                padding: "0.9rem 1rem",
                textAlign: "left",
                borderBottom: "1px solid var(--border)",
              }}
            >
              Inventory
            </th>
          </tr>
        </thead>
        <tbody>
          {inventory.length === 0 ? (
            <tr>
              <td
                colSpan={2}
                style={{
                  padding: "1rem",
                  color: "var(--gray-400)",
                  textAlign: "center",
                }}
              >
                No inventory found.
              </td>
            </tr>
          ) : (
            inventory.map((item: any) => (
              <tr
                key={item.id}
                style={{
                  background: "var(--gray-50)",
                  borderBottom: "1px solid var(--border)",
                  transition: "background 0.15s",
                }}
              >
                <td style={{ padding: "0.8rem 1rem", fontWeight: 500 }}>
                  {item.name}
                </td>
                <td style={{ padding: "0.8rem 1rem" }}>{item.inventory}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
