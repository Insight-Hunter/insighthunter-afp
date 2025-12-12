"use client";
import { useEffect, useState } from "react";

interface AuditLog {
  id: number;
  contributor_id: string;
  action: string;
  details: string;
  created_at: string;
}

export default function AuditLogTable() {
  const [logs, setLogs] = useState<AuditLog[]>([]);

  useEffect(() => {
    fetch("/api/audit").then(res => res.json()).then(setLogs);
  }, []);

  return (
    <section>
      <h2>Audit logs</h2>
      <table className="audit-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Contributor</th>
            <th>Action</th>
            <th>Details</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {logs.map(log => (
            <tr key={log.id}>
              <td>{log.id}</td>
              <td>{log.contributor_id}</td>
              <td>{log.action}</td>
              <td>{log.details}</td>
              <td>{log.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
"use client";
import { useEffect, useState } from "react";

interface AuditLog {
  id: number;
  contributor_id: string;
  action: string;
  details: string;
  created_at: string;
}

export default function AuditLogTable() {
  const [logs, setLogs] = useState<AuditLog[]>([]);

  useEffect(() => {
    fetch("/api/audit").then(res => res.json()).then(setLogs);
  }, []);

  return (
    <section>
      <h2>Audit logs</h2>
      <table className="audit-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Contributor</th>
            <th>Action</th>
            <th>Details</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {logs.map(log => (
            <tr key={log.id}>
              <td>{log.id}</td>
              <td>{log.contributor_id}</td>
              <td>{log.action}</td>
              <td>{log.details}</td>
              <td>{log.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
