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
    <div>
      <h3>RFM Score</h3>
      <p>{rfm !== null ? rfm : "N/A"}</p>
    </div>
  );
}
