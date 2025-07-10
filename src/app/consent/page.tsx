"use client";
import { useState } from "react";
import ConsentForm from "../components/ConsentForm";

export default function ConsentPage() {
  const [userId, setUserId] = useState("u1");

  return (
    <div style={{ padding: 24 }}>
      <h1>User Consent</h1>
      <input
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID"
      />
      <ConsentForm userId={userId} />
    </div>
  );
}
