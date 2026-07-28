# Release Consistency Validation

Run consistency validation after release preparation and supply-chain evidence
generation, but before any publication approval:

```sh
bin/release-consistency tmp/release/evidence.json
```

The evidence file follows
[`release-evidence.schema.json`](../contracts/release-evidence.schema.json).
Every referenced path must remain below the evidence file's directory. The
validator compares the canonical version with:

- the `vVERSION` tag;
- versioned release metadata and notes;
- release compatibility data and its digest;
- application and container CycloneDX component metadata;
- the packaging manifest and OCI version label;
- the provenance statement's `platform_version` external parameter.

A successful report has status `ready`. A blocked report exits with status 2
and reports stable codes such as `tag_version_mismatch`,
`application_sbom_version_mismatch`, `oci_label_version_mismatch` and
`provenance_version_mismatch`.

The command is read-only. It does not create or verify a remote tag, publish an
image, approve a deployment, sign evidence or contact an external provider.
Phase 6 publication automation must collect the named evidence and run this
validator before publishing.
