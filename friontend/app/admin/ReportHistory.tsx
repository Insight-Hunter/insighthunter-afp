export default function ReportHistory() {
  return (
    <section>
      <h2>Report history</h2>
      <p>Reports are stored in R2 at prefix: reports/{`<contributorId>`}.pdf</p>
      <p>Expose signed URLs via a Worker endpoint when needed.</p>
    </section>
  );
}
