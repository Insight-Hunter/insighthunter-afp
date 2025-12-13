
# Insight Hunter — Financial Nervous System

InsightHunter is a Cloudflare‑native SaaS platform designed to give companies **real‑time financial intelligence** with unmatched security, automation, and transparency.  
We transform complex workflows into a seamless lifecycle: **quiz → preview → branded PDF report → secure storage → retrieval → admin oversight & cleanup.**

---

## 🌟 Why InsightHunter?

- **For Companies, Investors, or Individual Freelancers:**  
  - A scalable SaaS architecture built entirely on Cloudflare Workers, R2, KV, and D1.  
  - Automated operational hygiene (storage lifecycle, audit logs, cleanup) ensures long‑term sustainability.  
  - Contributor‑friendly onboarding and futuristic UI/UX drive adoption and retention.  
  - Clear monetization path: tiered access to reporting, analytics, and admin dashboards.  
  - Instant onboarding with wizard‑driven setup.  
  - Branded, neon‑styled PDF reports that communicate financial posture clearly.  
  - Secure access via Cloudflare Access — role‑based controls for company vs. admin.  
  - Transparent audit logs and report history for compliance and trust.  


## 📂 Project Structure

insighthunter/
├─ workers/       # Cloudflare Workers (backend)
├─ frontend/      # Next.js app (company + admin dashboards)
├─ wrangler.toml  # Worker config

---

## ⚙️ Backend Highlights

- **Workers**: Modular endpoints for quiz, preview, report generation, signed URLs, admin listing, and cleanup.  
- **Storage**: R2 for reports, D1 for audit logs, KV for previews.  
- **Security**: Cloudflare Access with JWT‑based RBAC.  
- **Automation**: Nightly CRON cleanup ensures storage hygiene.  

---

## 🎨 Frontend Highlights

- **Company Dashboard**:  
  - Snapshot of role, domain, risk tolerance.  
  - “Download Latest Report” button → secure PDF access.  

- **Admin Dashboard**:  
  - Report history table across all companies.  
  - Cleanup controls to purge old reports.  
  - Audit log visibility for oversight.  
o
- **Design**: Futuristic dark palette with neon purple & cyan accents for emotional impact.  

---

## 🚀 Market Readiness

- **Scalable**: Built entirely on serverless Cloudflare infrastructure.  
- **Secure**: Role‑based access, audit logs, and automated cleanup.  
- **Engaging**: Immersive UI/UX designed to delight users and impress stakeholders.  
- **Transparent**: Every action logged, every report auditable.  

---

## 🧪 Demo Flow

1. Company completes wizard → PDF generated in R2.  
2. Company dashboard → download latest report.  
3. Admin dashboard → list reports, download, run cleanup.  o
4. Audit logs → confirm every event.  

---

## 📈 Investor Takeaway

InsightHunter is positioned as a **next‑generation SaaS platform** for enterprise financial intelligence:  
- Cloudflare‑native = low cost, high scalability, global reach.  
- Automated lifecycle = operational excellence baked in.  
- Immersive design = strong differentiation in a crowded SaaS market.  
- Transparent workflows = compliance and trust for enterprise adoption.  

---

## ✅ Lifecycle Checklist

- [x] Quiz → Preview → Report generation  
- [x] PDF stored in R2  
- [x] Signed URL retrieval  
- [x] Company dashboard download  
- [x] Admin dashboard listing + cleanup  
- [x] Audit logging  
- [x] CRON cleanup  

---
winsighthunter/
├─ workers/       # Cloudflare Workers (backend)
├─ frontend/      # Next.js app (company + admin dashboards)
├─ wrangler.toml  # Worker config
##
