import ReportHistory from "./ReportHistory";
import CleanupControls from "./CleanupControls";

export default function AdminPage() {
  return (
    <>
      <section className="section-card">
        <h2>Admin Control Panel</h2>
        <p>Oversight, report access, and cleanup.</p>
      </section>
      <ReportHistory />
      <CleanupControls />
    </>
  );
}
