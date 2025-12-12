insighthunter/
├── wrangler.toml
├── package.json
├── tsconfig.json
├── README.md
├── migrations/
│   └── 001_init.sql
├── seeds/
│   └── 001_seed.sql
├── workers/
│   ├── index.ts
│   ├── quiz.ts
│   ├── preview.ts
│   ├── report.ts
│   ├── audit.ts
│   └── cleanup.ts
├── frontend/
│   ├── next.config.js
│   ├── app/
│   │   ├── page.tsx
│   │   ├── wizard/
│   │   │   ├── page.tsx
│   │   │   ├── QuizStep.tsx
│   │   │   ├── PreviewStep.tsx
│   │   │   ├── ReportStep.tsx
│   │   │   └── ProgressBar.tsx
│   │   ├── admin/
│   │   │   ├── page.tsx
│   │   │   ├── AuditLogTable.tsx
│   │   │   ├── ReportHistory.tsx
│   │   │   └── CleanupControls.tsx
│   ├── styles/
│   │   └── globals.scss
│   ├── app/api/
│   │   ├── audit/route.ts
│   │   ├── cleanup/route.ts
│   │   └── report/route.ts
├── tests/
│   ├── workers.quiz.spec.ts
│   ├── workers.preview.spec.ts
│   ├── workers.report.spec.ts
│   ├── frontend.wizard.spec.tsx
│   └── e2e.onboarding.spec.ts
