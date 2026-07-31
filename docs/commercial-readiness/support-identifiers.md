# Support Identifiers

NomoTect creates one random, local installation identifier. It contains no
hostname, account, email address, network address or other personal data and
does not cause a network request.

Support and customer identifiers are optional opaque UUIDs. They are absent in
the community baseline and may be created only when an operator explicitly
enables a support relationship. Enabling support does not grant entitlements or
disable community capabilities.

The `support-identity` contract has three boundaries:

- the installation identifier remains stable when support is enabled, rotated
  or disabled;
- rotating support creates a new random support identifier and records the
  rotation time, without retaining the previous identifier;
- disabling support removes both support and customer identifiers.

Identifiers must not encode personal or deployment information. Operators
should rotate a support identifier when its disclosure scope changes and
disable it when the support relationship ends. Consumers must treat a missing
support identifier as the normal community state.
