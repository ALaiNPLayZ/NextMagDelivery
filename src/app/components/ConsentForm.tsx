"use client";
import { useState } from "react";

export default function ConsentForm({ userId }: { userId: string }) {
  const [consent, setConsent] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  async function fetchConsent() {
    setLoading(true);
    setNotFound(false);
    try {
      const res = await fetch("/api/consent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, consent: true }),
      });
      const data = await res.json();
      if (!data.user) {
        setNotFound(true);
        setConsent(null);
      } else {
        setConsent(data.user.consent ?? null);
      }
    } catch (e) {
      setNotFound(true);
      setConsent(null);
    }
    setLoading(false);
  }

  async function updateConsent(newConsent: boolean) {
    setLoading(true);
    setNotFound(false);
    try {
      const res = await fetch("/api/consent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, consent: newConsent }),
      });
      const data = await res.json();
      if (!data.user) {
        setNotFound(true);
        setConsent(null);
      } else {
        setConsent(newConsent);
      }
    } catch (e) {
      setNotFound(true);
      setConsent(null);
    }
    setLoading(false);
  }

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.2rem",
      }}
    >
      <button
        disabled={loading}
        onClick={fetchConsent}
        style={{
          background: "var(--gray-700)",
          color: "#fff",
          padding: "0.7rem 2rem",
          borderRadius: "999px",
          fontWeight: 700,
          fontSize: "1rem",
          border: "none",
          boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
          cursor: loading ? "not-allowed" : "pointer",
          opacity: loading ? 0.7 : 1,
          transition: "background 0.18s, color 0.18s, opacity 0.18s",
        }}
      >
        {loading ? "Checking..." : "Check Consent"}
      </button>
      {notFound && (
        <div
          style={{
            color: "var(--gray-400)",
            background: "var(--gray-100)",
            border: "1px solid var(--border)",
            borderRadius: "10px",
            padding: "1rem",
            width: "100%",
            textAlign: "center",
            fontWeight: 600,
          }}
        >
          User not found.
        </div>
      )}
      {consent !== null && !notFound && (
        <div
          style={{
            width: "100%",
            background: "var(--gray-100)",
            border: "1px solid var(--border)",
            borderRadius: "10px",
            padding: "1.2rem 1rem",
            textAlign: "center",
            boxShadow: "0 1px 4px rgba(0,0,0,0.02)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <span
            style={{
              fontSize: "1.1rem",
              fontWeight: 700,
              color: consent ? "var(--gray-700)" : "var(--gray-400)",
              marginBottom: "0.5rem",
            }}
          >
            Consent: {consent ? "Granted" : "Denied"}
          </span>
          <button
            disabled={loading}
            onClick={() => updateConsent(!consent)}
            style={{
              background: consent ? "var(--gray-300)" : "var(--gray-700)",
              color: consent ? "var(--gray-700)" : "#fff",
              padding: "0.7rem 2rem",
              borderRadius: "999px",
              fontWeight: 700,
              fontSize: "1rem",
              border: "none",
              boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1,
              transition: "background 0.18s, color 0.18s, opacity 0.18s",
            }}
          >
            {consent ? "Revoke Consent" : "Grant Consent"}
          </button>
        </div>
      )}
    </div>
  );
}
