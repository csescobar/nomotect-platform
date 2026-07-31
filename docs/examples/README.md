# Continuously Tested Examples

These examples are executable documentation for Epic 9 contracts. CI loads every
file through the same strict parser used by the platform, so incompatible edits,
unknown fields and missing requirements fail the test suite.

| Example | Contract | What it demonstrates |
| --- | --- | --- |
| `extension-manifest.yml` | Extension manifest v1 | A trusted in-process extension with one provided capability |
| `upgrade-manifest.json` | Upgrade manifest v1 | Backup verification, an irreversible migration and post-upgrade validation |
| `backup-manifest.json` | Operational backup manifest v1 | A complete credential-free backup set for every required component |

The identifiers, checksums, sizes and references are illustrative. Do not use
these files as production evidence and never add passwords, credentials, tokens,
private keys or tenant data. Copy an example, replace its values with
operator-generated evidence and run the repository test suite before use.

The canonical behavior and safety boundaries remain in the
[extension guide](../extensions/lifecycle-guide.md),
[upgrade architecture](../upgrades/architecture.md) and
[operator handbook](../operators/handbook.md).
