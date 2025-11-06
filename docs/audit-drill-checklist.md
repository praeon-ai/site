# Praeon Audit Drill Checklist

## Scope
- Cover one production-grade workflow end-to-end.
- Execute 50 typed plans (PlanLang) through the Praeon Kernel.
- Capture approvals and semantic replay outcomes for each plan.

## Evidence Pack
- 10 redacted audit traces (export format JSON + PDF summaries).
- 1 operational trace provided under NDA for internal-only review.
- Kernel policy snapshots and adapter digests for the drill window.

## Controls Mapping
- Policies: include CEL/Rego files referenced by `policy://` URIs.
- Approvals: list approver roles, delegation windows, and escalation paths.
- Least-privilege credentials: document adapter scopes and rotations.
- KMS/HSM logs: include key usage reports covering the drill timeline.

## Replay Exercise
- Run sandbox replay with recorded inputs; validate semantic equivalence criteria per adapter.
- Perform elevated approval replay (live system) for one selected plan.
- Capture variance notes and remediation tasks for any divergence.

## Findings Template & Sign-off
- Summary of observed controls and variances.
- Remediation owner, due date, and follow-up evidence requirements.
- Executive sign-off from risk, compliance, and product owners.
