# GitHub Release Publication

GitHub Release publication is an explicit, protected operation. The workflow
accepts an approved main commit and the run identifier of a previously
certified `distribution-bundle`. It does not prepare or rebuild release
artifacts.

`Prepare Distribution` is the only baseline producer of that named bundle. It
accepts a successful `main` CI run for the same current commit, downloads its
packaging evidence and combines it with the approved versioned release
documents. The workflow has read-only permissions and cannot create tags,
releases or image aliases.

The `release` environment must require maintainer approval. The publishing job
receives `contents: write` only after that gate. It verifies that the requested
commit is the current `main`, checks out that exact commit and downloads the
named bundle through the workflow-run identifier.

## Bundle contract

The bundle contains `distribution-manifest.json` and an `artifacts` directory
with:

- `release-notes.md`;
- `migration-notes.md`;
- `upgrade-notes.md`;
- `nomotect-starter.tar.gz`;
- `nomotect-starter.zip`;
- `compatibility.json`;
- `sbom.cdx.json`;
- `container-sbom.cdx.json`;
- `packaging-manifest.json`;
- `release-provenance.json`;
- `SHA256SUMS`.

`bin/github-release-publish plan` validates the complete set locally without
credentials. Every file must be a regular, non-symbolic-link child of the
bundle directory and every non-checksum artifact must match `SHA256SUMS`.

`apply` is restricted to GitHub Actions on `main`, requires the protected
environment marker and refuses an existing tag or release. It creates the
release with `--target` bound to the manifest commit. Versions below `1.0.0`
are published as prereleases.

Starter asset names remain stable across immutable releases so the README can
use GitHub's `/releases/latest/download/` URLs. The manifest inside each archive
records the exact NomoTect version and source commit.

If tag creation succeeds but asset upload does not complete, the operation
stops for operator review. Neither the tag nor release is deleted or
overwritten automatically. Forward recovery is added only after the observed
partial state has been independently verified.
