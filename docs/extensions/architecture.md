# Enterprise Extension Platform Architecture

Epic 9 Phase 5 establishes a provider-neutral contract for trusted,
independently versioned Ruby packages. The platform supplies the integration
surface; proprietary capabilities remain outside the Apache-licensed
community repository.

## Package boundary

Supported extensions are Bundler-installed gems declared with `require: false`.
Each gem exposes a `platform-extension.yml` file that can be read without
executing the extension entrypoint. Local package paths are supported only for
development and certification.

The community repository owns:

- versioned manifest and configuration schemas;
- compatibility, dependency and capability validation;
- explicit registration hooks;
- lifecycle, readiness and upgrade integration;
- author, operator and certification tooling.

An external extension repository owns its implementation, tests, migrations,
assets and separately licensed documentation. The community core must not
reference extension implementation constants or private repository locations.

## Contract boundary

The extension manifest declares identity, semantic version, supported platform
requirement, extension contract version, capabilities, dependencies and all
component surfaces. Unknown fields are rejected. Component paths must remain
relative to the package root.

The extension configuration identifies packages that an installation enables
and whether each one is operationally required. Configuration is
credential-free; extension secrets continue to use the platform secret-store
boundary.

## Security boundary

Extensions execute inside the Rails process and therefore have the privileges
of the application. They are trusted code, not sandboxed plugins. The platform
prevents code execution before compatibility validation, but it cannot contain
a malicious package after loading.

No extension installation, download, license verification, entitlement,
signature verification or package publication is part of this phase.
