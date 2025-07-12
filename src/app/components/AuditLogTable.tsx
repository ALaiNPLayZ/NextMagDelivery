"use client";
import { useEffect, useState } from "react";

export default function AuditLogTable() {
  const [logs, setLogs] = useState<any[]>([]);
  useEffect(() => {
    fetch("/api/governance")
      .then((res) => res.json())
      .then((data) => setLogs(data.logs || []));
  }, []);
  return (
    <div style={{ width: "100%" }}>
      <h3
        style={{
          fontSize: "1.2rem",
          fontWeight: 700,
          color: "var(--gray-700)",
          marginBottom: "1rem",
        }}
      >
        Audit Logs
      </h3>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "var(--gray-100)",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
        }}
      >
        <thead>
          <tr
            style={{
              background: "var(--gray-200)",
              color: "var(--gray-700)",
              fontWeight: 700,
              fontSize: "1rem",
            }}
          >
            <th
              style={{
                padding: "0.9rem 1rem",
                textAlign: "left",
                borderBottom: "1px solid var(--border)",
              }}
            >
              Event
            </th>
            <th
              style={{
                padding: "0.9rem 1rem",
                textAlign: "left",
                borderBottom: "1px solid var(--border)",
              }}
            >
              User
            </th>
            <th
              style={{
                padding: "0.9rem 1rem",
                textAlign: "left",
                borderBottom: "1px solid var(--border)",
              }}
            >
              Details
            </th>
            <th
              style={{
                padding: "0.9rem 1rem",
                textAlign: "left",
                borderBottom: "1px solid var(--border)",
              }}
            >
              Time
            </th>
          </tr>
        </thead>
        <tbody>
          {logs.length === 0 ? (
            <tr>
              <td
                colSpan={4}
                style={{
                  padding: "1rem",
                  color: "var(--gray-400)",
                  textAlign: "center",
                }}
              >
                No audit logs found.
              </td>
            </tr>
          ) : (
            logs.map((log: any) => (
              <tr
                key={log.id}
                style={{
                  background: "var(--gray-50)",
                  borderBottom: "1px solid var(--border)",
                  transition: "background 0.15s",
                }}
              >
                <td style={{ padding: "0.8rem 1rem", fontWeight: 500 }}>
                  {log.event}
                </td>
                <td style={{ padding: "0.8rem 1rem" }}>{log.userId}</td>
                <td style={{ padding: "0.8rem 1rem" }}>{log.details}</td>
                <td
                  style={{ padding: "0.8rem 1rem", color: "var(--gray-500)" }}
                >
                  {new Date(log.createdAt).toLocaleString()}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
