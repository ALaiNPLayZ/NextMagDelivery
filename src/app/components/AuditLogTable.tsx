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
    <div>
      <h3>Audit Logs</h3>
      <table>
        <thead>
          <tr>
            <th>Event</th>
            <th>User</th>
            <th>Details</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log: any) => (
            <tr key={log.id}>
              <td>{log.event}</td>
              <td>{log.userId}</td>
              <td>{log.details}</td>
              <td>{new Date(log.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
