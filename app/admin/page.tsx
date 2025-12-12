import AuditLogTable from "./AuditLogTable";
import ReportHistory from "./ReportHistory";
import CleanupControls from "./CleanupControls";
import "../../styles/globals.scss";

export default function AdminPage() {
  return (
    <main className="admin-dashboard">
      <h1>InsightHunter Admin</h1>
      <AuditLogTable />
      <ReportHistory />
      <CleanupControls />
    </main>
  );
}
