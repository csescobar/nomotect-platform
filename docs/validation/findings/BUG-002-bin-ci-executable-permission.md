# BUG-002: Missing Executable Permission on bin/ci

## Description
Executing `bin/ci` directly from terminal returns `Permission denied` (exit code 126) because the file lacks executable permission bits (`chmod +x`).

## Environment
- **OS / Platform:** Linux x86_64
- **File:** `bin/ci`

## Steps to Reproduce
1. Execute directly:
   ```bash
   bin/ci
   ```
2. Observe permission error.

## Expected Behavior
Scripts located in `bin/` should have executable permissions set (`-rwxr-xr-x`) to allow direct execution as specified in the quick start documentation.

## Actual Behavior / Error Logs
```text
bash: line 1: bin/ci: Permission denied
```

## Security, Privacy, or Tenant Isolation Impact
None (File permissions on developer scripts).

## Proposed Fix
Run `chmod +x bin/ci` and commit the file mode change to Git.
