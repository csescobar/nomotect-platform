# Support Consent

Enabling a support identity does not grant access to diagnostics. Every support
share requires a separate, explicit and time-bounded consent document tied to
the current opaque support identifier.

Consent is granted per scope: redacted diagnostic bundle, operational health
snapshot or redacted configuration. Unknown artifacts and unconstrained data
sources are excluded. Revocation takes effect immediately, expiry is
fail-closed and rotating the support identifier invalidates consent issued for
the previous relationship.

The platform produces a local share plan only. It never uploads automatically,
and the plan records that an operator must review and transmit the selected
artifacts. Database dumps, credentials, tenant records and arbitrary files are
outside the contract.

Telemetry consent and diagnostic consent are independent. Enabling either one
does not enable the other, grant entitlements or weaken community capabilities.
