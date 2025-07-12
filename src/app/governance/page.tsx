"use client";
import AuditLogTable from "../components/AuditLogTable";

export default function GovernancePage() {
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
          width: "100%",
          maxWidth: 1100,
          background: "var(--card-bg)",
          border: "1px solid var(--border)",
          borderRadius: "16px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
          padding: "2.5rem 2rem",
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: "1.8rem",
            fontWeight: 800,
            marginBottom: "1.5rem",
            color: "var(--gray-700)",
            letterSpacing: "-0.5px",
          }}
        >
          Governance & Audit Logs
        </h1>
        <AuditLogTable />
      </section>
    </main>
  );
}
