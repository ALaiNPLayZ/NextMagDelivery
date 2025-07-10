"use client";
import { useState } from "react";

export default function ConsentForm({ userId }: { userId: string }) {
  const [consent, setConsent] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  async function fetchConsent() {
    setLoading(true);
    const res = await fetch("/api/consent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, consent: true }),
    });
    const data = await res.json();
    setConsent(data.user?.consent ?? null);
    setLoading(false);
  }

  async function updateConsent(newConsent: boolean) {
    setLoading(true);
    await fetch("/api/consent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, consent: newConsent }),
    });
    setConsent(newConsent);
    setLoading(false);
  }

  return (
    <div>
      <h3>Consent</h3>
      <button disabled={loading} onClick={fetchConsent}>
        Check Consent
      </button>
      {consent !== null && (
        <div>
          <p>Consent: {consent ? "Granted" : "Denied"}</p>
          <button disabled={loading} onClick={() => updateConsent(!consent)}>
            {consent ? "Revoke Consent" : "Grant Consent"}
          </button>
        </div>
      )}
    </div>
  );
}
