import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export async function generateCompanyReportPDF(input: {
  companyId: string;
  role: string;
  domain: string;
  riskTolerance: string;
  metrics: { decisionVelocity: string; exposureIndex: string; confidenceScore: string };
  date: string;
}) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([612, 792]); // US Letter
  const { width, height } = page.getSize();

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const titleColor = rgb(0.49, 0.24, 1); // neon purple
  const accent = rgb(0, 0.9, 1); // cyan

  page.drawRectangle({ x: 0, y: height - 120, width, height: 120, color: rgb(0.04, 0.06, 0.11) });
  page.drawText("InsightHunter", { x: 40, y: height - 60, size: 24, font, color: titleColor });
  page.drawText("Company Financial Nervous System Report", { x: 40, y: height - 90, size: 14, font, color: accent });

  page.drawText(`Date: ${input.date}`, { x: 40, y: height - 140, size: 12, font, color: rgb(1,1,1) });
  page.drawText(`Company ID: ${input.companyId}`, { x: 40, y: height - 160, size: 12, font, color: rgb(1,1,1) });

  page.drawText("Company Profile", { x: 40, y: height - 200, size: 16, font, color: titleColor });
  page.drawText(`Role: ${input.role}`, { x: 40, y: height - 220, size: 12, font });
  page.drawText(`Domain: ${input.domain}`, { x: 40, y: height - 240, size: 12, font });
  page.drawText(`Risk Tolerance: ${input.riskTolerance}`, { x: 40, y: height - 260, size: 12, font });

  page.drawText("Simulation Metrics", { x: 40, y: height - 300, size: 16, font, color: titleColor });
  page.drawText(`Decision Velocity: ${input.metrics.decisionVelocity}`, { x: 40, y: height - 320, size: 12, font, color: accent });
  page.drawText(`Exposure Index: ${input.metrics.exposureIndex}`, { x: 40, y: height - 340, size: 12, font, color: accent });
  page.drawText(`Confidence Score: ${input.metrics.confidenceScore}`, { x: 40, y: height - 360, size: 12, font, color: accent });

  page.drawText("Strategic Insights", { x: 40, y: height - 400, size: 16, font, color: titleColor });
  page.drawText("Liquidity posture is stable under moderate risk.", { x: 40, y: height - 420, size: 12, font });
  page.drawText("Recommended: maintain allocation; monitor derivatives exposure weekly.", { x: 40, y: height - 440, size: 12, font });
  page.drawText("Next review: +30 days.", { x: 40, y: height - 460, size: 12, font });

  page.drawText("Confidential — for internal use only", { x: 40, y: 40, size: 10, font, color: rgb(0.8,0.8,0.8) });

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}
