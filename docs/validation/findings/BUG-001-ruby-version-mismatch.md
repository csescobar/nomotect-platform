# BUG-001: Ruby Version Requirement Mismatch

## Description
Running `bash bin/ci` fails on developer environments running Ruby 4.0.6 because `Gemfile` explicitly pins Ruby version to 4.0.5 (`ruby "4.0.5"`).

## Environment
- **Ruby version:** 4.0.6 (Host OS)
- **Gemfile constraint:** 4.0.5
- **OS / Platform:** Linux x86_64

## Steps to Reproduce
1. Ensure host system runs Ruby 4.0.6 (or any patch version above 4.0.5).
2. Execute:
   ```bash
   bash bin/ci
   ```
3. Command terminates with exit code 18.

## Expected Behavior
The CI script should run cleanly or accommodate compatible patch versions (e.g. `~> 4.0.5` or `.ruby-version` coordination), or document the exact version manager setup required.

## Actual Behavior / Error Logs
```text
Your Ruby version is 4.0.6, but your Gemfile specified 4.0.5
```

## Security, Privacy, or Tenant Isolation Impact
None (Build & Development environment configuration).

## Proposed Fix
Consider updating `Gemfile` to use `~> 4.0.5` or aligning `.ruby-version` / `.tool-versions` across all dev containers and local environments.
