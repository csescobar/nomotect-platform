# Distribution Verification and Attestation

Verification runs after channel publication and is read-only. It consumes the
approved distribution manifest, checksum-verified public artifact bundle,
immutable GHCR digest and credential-free observations of GitHub Releases and
GHCR.

`bin/distribution-verify` fails closed unless both observations identify the
active repository, manifest version, `vVERSION` tag and exact source commit.
The GitHub Release reference must identify the canonical repository release
URL. The GHCR reference must equal the digest-qualified image selected for
semantic promotion.

Successful verification writes versioned `publication-evidence` with:

- the repository, source commit and canonical manifest digest;
- verified immutable references for both channels;
- names, sizes and SHA-256 digests for the complete public artifact set;
- an empty finding list and `published` status.

Failure writes `verification_failed` evidence with stable blocker codes. It
does not delete tags, releases, assets or images.

The protected GitHub Release workflow attests every public bundle artifact with
GitHub artifact attestations before release creation. The existing
commit-addressable container digest retains the build provenance and SBOM
attestation created by the container-publication workflow; semantic promotion
does not replace or rebuild that subject.

Evidence contains no tokens, authorization headers, enterprise repository
metadata or proprietary extension artifacts.
