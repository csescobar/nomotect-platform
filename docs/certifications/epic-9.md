# Epic 9 Certification

This certification closes the Distribution, Installation and Enterprise
Extensions epic without authorizing a stable `v1.0.0` release.

The machine-readable catalog records the evidence for every phase and the
cross-cutting contracts. The executable validator also requires the
authoritative Epic 9 roadmap section to be complete, contain no unfinished
checklist items and explicitly mark its exit criteria as satisfied.

Run the focused certification with:

```bash
ruby bin/epic-9-certify
```

A non-zero exit status means the catalog or roadmap no longer satisfies the
Epic 9 completion contract. Epic 10 remains responsible for representative
application validation and the stable-release gate.
