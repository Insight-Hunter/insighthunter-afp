INSERT INTO contributors (id, role, domain, risk_tolerance)
VALUES
  ('c-001', 'Treasurer', 'Liquidity', 'Moderate'),
  ('c-002', 'Risk Manager', 'Derivatives', 'High'),
  ('c-003', 'Controller', 'Accounting', 'Low');

INSERT INTO audit_logs (contributor_id, action, details)
VALUES
  ('c-001', 'QUIZ_SUBMIT', '{"role":"Treasurer","domain":"Liquidity","risk_tolerance":"Moderate"}'),
  ('c-001', 'PDF_GENERATE', 'Initial report generated'),
  ('c-002', 'PREVIEW_SEED', '{"velocity":12,"exposure":0.2}'),
  ('c-003', 'QUIZ_SUBMIT', '{"role":"Controller","domain":"Accounting","risk_tolerance":"Low"}');
