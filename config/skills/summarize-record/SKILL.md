---
name: summarize-record
description: Generates a concise, structured executive summary of a specific domain record
permissions:
  - records.read
tools:
  - records.show
---
# Summarize Record Skill

## Purpose
This skill guides the AI assistant in extracting, synthesizing, and summarizing key domain attributes, operational history, and relevant status of a target record.

## Execution Workflow
1. **Retrieve Record**: Call `records.show` with the target record ID.
2. **Verify Scoping**: Ensure the record belongs to the active tenant (`Current.organization`).
3. **Extract Core Data**:
   - Primary Identifiers (ID, Title/Name, Code).
   - Current Lifecycle State and Status.
   - Key Timestamps (Created At, Last Updated At).
   - Recent Activities & Modifications.
4. **Synthesize Executive Summary**:
   - Present a 2-3 sentence high-level overview.
   - List key attributes in a clean key-value table.
   - Highlight any urgent flags, pending actions, or recent changes.

## Constraints & Security
- Never output sensitive PII (Social Security Numbers, full credit card details, raw passwords).
- If the record does not exist or user lacks permission, return a clear, polite error without revealing sensitive metadata.
