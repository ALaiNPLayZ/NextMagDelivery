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
    <div>
      <h3>Van Locations</h3>
      <ul>
        {vans.map((van) => (
          <li key={van.id}>
            Van {van.id}: ({van.locationLat}, {van.locationLng})
          </li>
        ))}
      </ul>
    </div>
  );
}
