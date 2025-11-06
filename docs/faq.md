# Praeon FAQ

**Is Praeon an agent framework?**  
No. Orchestrators export to PlanLang; the Kernel enforces policies and produces audit-ready traces.

**Is replay bit-identical?**  
We target semantic equivalence with adapter-specific success criteria; bit-identical where feasible.

**Can we store traces on-prem?**  
Yes. Operational traces stay encrypted on-prem; audit traces are exportable and redacted.

**Do you handle secrets?**  
Tokens never appear in traces; fetched from HSM/KMS at execution; replay requires fresh authorization.

**Which adapters ship first?**  
Email, Slack/Teams, Salesforce, Jira/ServiceNow, Git, Payments.
