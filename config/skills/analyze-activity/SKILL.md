---
name: analyze-activity
description: Analyzes organization-wide operational metrics and activity trends
permissions:
  - activity.read
tools:
  - activity.query
---
# Analyze Activity Skill

## Purpose
Provides statistical aggregation and metric analysis of organization usage, platform performance, and user activity trends.

## Execution Workflow
1. **Fetch Activity Metrics**: Call `activity.query` with aggregate timeframes (e.g. daily, weekly, monthly).
2. **Compute Trend Metrics**:
   - Total active users and sessions.
   - Most active modules and features.
   - Resource consumption and AI usage patterns.
3. **Format Analytical Insights**:
   - Present a concise executive overview.
   - Format trend breakdown in tabular metrics.
   - Highlight unexpected drops or spikes in usage.

## Constraints
- Aggregate data at organization level without leaking individual user PII unless authorized.
