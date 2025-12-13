
# InsightHunter — The Enterprise Financial Nervous System

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

---

## 📂 Project Structure

```
insighthunter/
├─ workers/       # Cloudflare Workers (backend)
├─ frontend/      # Next.js app (company + admin dashboards)
├─ wrangler.toml  # Worker config
```

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
3. Admin dashboard → list reports, download, run cleanup.  
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

## 🔧 Full Installation Guide

### Backend Setup (Workers)

1. **Provision Cloudflare resources**
   ```bash
   wrangler d1 create insighthunter-db
   wrangler kv:namespace create insighthunter-kv
   wrangler r2 bucket create insighthunter-reports
   ```

2. **Apply schema**
   ```bash
   npx wrangler d1 execute insighthunter-db --file workers/schema.sql
   ```

3. **Configure wrangler.toml**
   - Bind DB, KV, R2.
   - Add `[triggers] crons = ["0 2 * * *"]` for nightly cleanup.
   - Set secrets:
     ```bash
     npx wrangler secret put R2_S3_ACCESS_KEY_ID
     npx wrangler secret put R2_S3_SECRET_ACCESS_KEY
     ```

4. **Deploy Workers**
   ```bash
   npx wrangler deploy
   ```

---

### Frontend Setup (Next.js)

1. **Install dependencies**
   ```bash
   cd frontend
   cp .env.local.example .env.local
   npm install
   ```

2. **Run locally**
   ```bash
   npm run dev
   ```

3. **Deploy to Cloudflare Pages**
   - Connect repo.
   - Set `NEXT_PUBLIC_WORKER_BASE_URL` in Pages environment variables.

---

### Security (Cloudflare Access)

- Configure Access app with roles:
  - `company` → can only access own reports.
  - `admin` → can access all reports + cleanup.
- Map `companyId` claim for contributors.
- JWT verification handled in `workers/utils/auth.ts`.

---

### Storage

- **R2** → stores PDFs (`reports/<companyId>/<timestamp>.pdf`).  
- **D1** → tracks reports + audit logs.  
- **KV** → caches previews for dashboards.

---

### Testing

- Seed demo companies:
   ```bash
   npx wrangler d1 execute insighthunter-db --command \\
   "INSERT INTO reports (company_id, file_key, created_at) VALUES ('c-001', 'reports/c-001/demo.pdf', datetime('now'));"
   ```
- Upload matching PDF to R2.
- Verify company dashboard → download report.
- Verify admin dashboard → list reports, run cleanup.

---

### Production Rollout

- Deploy Workers + Pages.
- Protect endpoints with Access.
- Enable CRON cleanup.
- Demo flow:
  - Company completes wizard → PDF generated.
  - Company dashboard → download latest report.
  - Admin dashboard → oversight, cleanup, audit logs.
"""

# Save to file
output_path = "/mnt/data/InsightHunter_README.md"
with open(output_path, "w") as f:
    f.write(readme_content)

print("Investor-focused README.md created as InsightHunter_README.md")
