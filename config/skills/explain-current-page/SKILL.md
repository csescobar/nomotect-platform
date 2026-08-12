---
name: explain-current-page
description: Provides contextual assistance and explanation for the currently visible application view
permissions:
  - page.view
tools:
  - nomotect://current-context
  - nomotect://permissions
---
# Explain Current Page Skill

## Purpose
This skill provides users with contextual help, layout explanation, and available actions for the view/page currently loaded in the interface.

## Execution Workflow
1. **Fetch Page Context**: Read `nomotect://current-context` to determine active locale, route, and environment.
2. **Fetch User Capabilities**: Read `nomotect://permissions` to discover what actions the user is authorized to perform on this page.
3. **Generate View Breakdown**:
   - Explain the primary purpose of the current screen/module.
   - Describe available grid views, filters, and export options.
   - Highlight available actions matching the user's permissions.

## Constraints
- Do not advise actions for which the user lacks permissions.
- Adapt language to the active locale reported by `nomotect://current-context`.
