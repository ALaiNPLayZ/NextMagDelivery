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
    <div>
      <h3>Inventory</h3>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Inventory</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item: any) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.inventory}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
