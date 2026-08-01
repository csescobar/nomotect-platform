# Application Starter Distribution

The Application Starter is the supported adoption surface for a new product.
Platform contributors clone the NomoTect repository; product teams download a
versioned starter archive and initialize a new Git repository without NomoTect's
development history.

## Build contract

`config/distributions/application_starter.yml` is the authoritative allowlist.
The builder copies only tracked, approved files, overlays a starter README and
new changelog, and emits equivalent TAR.GZ and ZIP archives with checksums and a
machine-readable provenance manifest.

```shell
ruby bin/application-starter-build \
  --version "$(cat VERSION)" \
  --source-commit "$(git rev-parse HEAD)" \
  --output /tmp/nomotect-starter
```

The output directory must be outside the source tree. Platform roadmaps,
historical change fragments, release history, marketing assets and official
publication workflows are not starter content.

## Product initialization

Linux and macOS:

```shell
./bin/nomotect-init --product-name "My Product" --organization "My Company" --repository my-product
```

Windows PowerShell:

```powershell
.\bin\nomotect-init.ps1 --product-name "My Product" --organization "My Company" --repository my-product
```

Both launchers delegate to `bin/nomotect-init.rb`. Initialization updates only
the declared product-identity files, writes `config/nomotect/adoption.json`, and
fails if it has already run. It deliberately preserves NomoTect provenance,
licensing and compatibility identifiers elsewhere.

After initialization, create the private repository history with `git init`,
review the generated changes, commit them and configure the private remote.

## Windows support boundary

ZIP extraction, PowerShell initialization, Git setup and the Antigravity CLI MCP
bootstrap are direct Windows contracts. The complete Rails application runtime
uses Docker Desktop or WSL2 unless native Windows runtime certification is added
separately.
