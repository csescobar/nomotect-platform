---
name: generate-report
description: Compiles and formats domain data into structured executive reports
permissions:
  - reports.read
tools:
  - reports.generate
---
# Generate Report Skill

## Purpose
Guides the assistant in compiling domain data, calculating summary statistics, and producing audit-ready executive reports.

## Execution Workflow
1. **Gather Data Inputs**: Invoke necessary query tools matching report parameters.
2. **Compile Report Structure**:
   - Title & Metadata Header (Organization, Date Range, Generator).
   - Executive Summary.
   - Key Metrics & Data Tables.
   - Conclusion & Actionable Items.
3. **Format Output**: Generate clean Markdown or structured JSON payload as requested by user.

## Constraints
- Enforce tenant isolation and authorization checks before compiling report data.
