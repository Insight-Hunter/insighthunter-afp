import { PDFDocument } from "pdf-lib";

export default {
  async fetch(request: Request, env: any): Promise<Response> {
    const { contributorId, profile } = await request.json();

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 800]);
    page.drawText(
      `InsightHunter Report
Contributor: ${contributorId}
Role: ${profile.role}
Domain: ${profile.domain}
Risk: ${profile.risk_tolerance}`,
      { x: 50, y: 750, size: 12 }
    );
    const pdfBytes = await pdfDoc.save();

    await env.R2.put(`reports/${contributorId}.pdf`, pdfBytes);

    await env.DB.prepare(
      "INSERT INTO audit_logs (contributor_id, action, details) VALUES (?, ?, ?)"
    ).bind(contributorId, "PDF_GENERATE", "Report generated").run();

    return new Response("PDF stored in R2", { status: 200 });
  }
};
