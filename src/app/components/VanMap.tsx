"use client";
import { useEffect, useState } from "react";

type Van = { id: string; locationLat: number; locationLng: number };

export default function VanMap() {
  const [vans, setVans] = useState<Van[]>([]);

  useEffect(() => {
    fetch("/api/vanOps")
      .then((res) => res.json())
      .then((data) => setVans((data.vans || []).filter(Boolean)));
  }, []);

  return (
    <div
      style={{
        width: "100%",
        background: "var(--gray-100)",

        boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
        padding: "1.2rem 1rem",
        marginTop: "0.5rem",
      }}
    >
      <h3
        style={{
          fontSize: "1.15rem",
          fontWeight: 700,
          color: "var(--gray-700)",
          marginBottom: "0.7rem",
        }}
      >
        Van Locations
      </h3>
      <ul style={{ paddingLeft: 0, margin: 0, listStyle: "none" }}>
        {vans.length === 0 ? (
          <li style={{ color: "var(--gray-400)", fontStyle: "italic" }}>
            No vans found.
          </li>
        ) : (
          vans.map((van) => (
            <li
              key={van.id}
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
              🚚 Van <b>{van.id}</b>:{" "}
              <span style={{ color: "var(--gray-500)" }}>
                ({van.locationLat}, {van.locationLng})
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
