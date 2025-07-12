"use client";
import { useEffect, useState } from "react";

export default function FeatureScore({ userId }: { userId: string }) {
  const [rfm, setRfm] = useState<number | null>(null);

  useEffect(() => {
    if (!userId) return;
    fetch("/api/feature?userId=" + userId)
      .then((res) => res.json())
      .then((data) => setRfm(data.rfm));
  }, [userId]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.3rem",
      }}
    >
      <span
        style={{
          fontSize: "1.1rem",
          color: "var(--gray-500)",
          fontWeight: 600,
          letterSpacing: "0.5px",
        }}
      >
        RFM Score
      </span>
      <span
        style={{
          fontSize: "2.2rem",
          fontWeight: 900,
          color: "var(--gray-700)",
          background: "var(--gray-200)",
          borderRadius: "0.5rem",
          padding: "0.2rem 1.2rem",
          minWidth: 60,
          textAlign: "center",
          boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
        }}
      >
        {rfm !== null ? rfm : "N/A"}
      </span>
    </div>
  );
}
