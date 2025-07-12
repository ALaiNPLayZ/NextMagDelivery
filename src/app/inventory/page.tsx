"use client";
import InventoryTable from "../components/InventoryTable";

export default function InventoryPage() {
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
          width: "200%",
          maxWidth: 1400,
          background: "var(--card-bg)",
          border: "1px solid var(--border)",
          borderRadius: "18px",
          boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
          padding: "2rem 2.5rem",
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <InventoryTable />
      </section>
    </main>
  );
}
