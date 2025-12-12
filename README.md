# InsightHunter

Cloudflare-native, TypeScript app for autonomous financial operations:
- Wizard: quiz → preview → report
- Workers: D1, KV, R2
- Admin: audit logs, cleanup controls
- Migrations + seeds, testing, deploy

## Quick start
1. npm install
2. npx wrangler login
3. npx wrangler d1 create insighthunter-db
4. npx wrangler kv namespace create KV
5. npx wrangler r2 bucket create insighthunter-reports
6. Update IDs in wrangler.toml
7. npm run migrate && npm run seed
8. npm run dev (frontend), npm run deploy (workers)
