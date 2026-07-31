# Opt-in Telemetry

NomoTect performs no telemetry collection or transmission by default. An
operator must explicitly enable one or more documented categories before an
envelope can be produced. The community platform does not define an automatic
sender or a hidden endpoint.

The initial contract supports only aggregate capability usage and operational
health. Each category has a fixed attribute allowlist. Attributes outside that
allowlist are removed, and their field names are included in
`redacted_fields`, making minimization visible without exposing their values.

Disabling telemetry takes effect immediately and clears all selected
categories. A disabled policy cannot retain category consent. Telemetry does
not include tenant records, user data, support identifiers, customer
identifiers, credentials or arbitrary exception messages.

Extensions that transmit an envelope must separately document the destination,
retention, controller, processor and deletion policy. The core contract grants
no permission to transmit data merely because an extension is installed.
