"use client";
import AuditLogTable from "../components/AuditLogTable";

export default function GovernancePage() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Governance & Audit Logs</h1>
      <AuditLogTable />
    </div>
  );
}
