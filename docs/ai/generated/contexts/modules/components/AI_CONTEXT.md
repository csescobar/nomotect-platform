# Components AI Context

> Generated artifact. Source changes must be followed by regeneration.

## Responsibilities

- test: Components::MarketingComponents, Components::Ui::AvatarComponent, Components::Ui::AvatarGroupComponent, Components::Ui::ButtonComponent, Components::Ui::CommandPaletteComponent, Components::Ui::CoreComponents, Components::Ui::DangerZoneComponent, Components::Ui::Forms::FormComponents, Components::Ui::Layout::ApplicationShellComponent, Components::Ui::LocaleSwitcherComponent, Components::Ui::PermissionIndicatorComponent, Components::Ui::ProgressBarComponent, Components::Ui::ProgressSpinnerComponent, Components::Ui::RoleBadgeComponent, Components::Ui::SkeletonComponent, Components::Ui::StepperComponent, Components::Ui::TabsComponent, Components::Ui::ThemeSwitcherComponent, Components::Ui::ToastComponent, Components::Ui::TooltipComponent

## Source paths

- `test/components/marketing_components_test.rb`
- `test/components/ui/avatar_component_test.rb`
- `test/components/ui/avatar_group_component_test.rb`
- `test/components/ui/button_component_test.rb`
- `test/components/ui/command_palette_component_test.rb`
- `test/components/ui/core_components_test.rb`
- `test/components/ui/danger_zone_component_test.rb`
- `test/components/ui/forms/form_components_test.rb`
- `test/components/ui/layout/application_shell_component_test.rb`
- `test/components/ui/locale_switcher_component_test.rb`
- `test/components/ui/permission_indicator_component_test.rb`
- `test/components/ui/progress_bar_component_test.rb`
- `test/components/ui/progress_spinner_component_test.rb`
- `test/components/ui/role_badge_component_test.rb`
- `test/components/ui/skeleton_component_test.rb`
- `test/components/ui/stepper_component_test.rb`
- `test/components/ui/tabs_component_test.rb`
- `test/components/ui/theme_switcher_component_test.rb`
- `test/components/ui/toast_component_test.rb`
- `test/components/ui/tooltip_component_test.rb`

## Relationships

- `controller:Marketing` —TESTED_BY→ `test:Components::MarketingComponents`
- `component:Ui::Avatar` —TESTED_BY→ `test:Components::Ui::AvatarComponent`
- `component:Ui::Avatar` —TESTED_BY→ `test:Components::Ui::AvatarGroupComponent`
- `component:Ui::AvatarGroup` —TESTED_BY→ `test:Components::Ui::AvatarGroupComponent`
- `component:Ui::Button` —TESTED_BY→ `test:Components::Ui::ButtonComponent`
- `component:Ui::CommandPalette` —TESTED_BY→ `test:Components::Ui::CommandPaletteComponent`
- `component:Ui::DangerZone` —TESTED_BY→ `test:Components::Ui::DangerZoneComponent`
- `document:Design-system::Forms` —TESTED_BY→ `test:Components::Ui::Forms::FormComponents`
- `component:Application` —TESTED_BY→ `test:Components::Ui::Layout::ApplicationShellComponent`
- `component:Ui::Layout::ApplicationShell` —TESTED_BY→ `test:Components::Ui::Layout::ApplicationShellComponent`
- `controller:Application` —TESTED_BY→ `test:Components::Ui::Layout::ApplicationShellComponent`
- `job:Application` —TESTED_BY→ `test:Components::Ui::Layout::ApplicationShellComponent`
- `policy:Application` —TESTED_BY→ `test:Components::Ui::Layout::ApplicationShellComponent`
- `component:Ui::LocaleSwitcher` —TESTED_BY→ `test:Components::Ui::LocaleSwitcherComponent`
- `component:Ui::PermissionIndicator` —TESTED_BY→ `test:Components::Ui::PermissionIndicatorComponent`
- `model:Permission` —TESTED_BY→ `test:Components::Ui::PermissionIndicatorComponent`
- `component:Ui::ProgressBar` —TESTED_BY→ `test:Components::Ui::ProgressBarComponent`
- `component:Ui::ProgressSpinner` —TESTED_BY→ `test:Components::Ui::ProgressSpinnerComponent`
- `component:Ui::Badge` —TESTED_BY→ `test:Components::Ui::RoleBadgeComponent`
- `component:Ui::RoleBadge` —TESTED_BY→ `test:Components::Ui::RoleBadgeComponent`
- `model:Role` —TESTED_BY→ `test:Components::Ui::RoleBadgeComponent`
- `policy:Role` —TESTED_BY→ `test:Components::Ui::RoleBadgeComponent`
- `component:Ui::Skeleton` —TESTED_BY→ `test:Components::Ui::SkeletonComponent`
- `component:Ui::Stepper` —TESTED_BY→ `test:Components::Ui::StepperComponent`
- `component:Ui::Tabs` —TESTED_BY→ `test:Components::Ui::TabsComponent`
- `component:Ui::ThemeSwitcher` —TESTED_BY→ `test:Components::Ui::ThemeSwitcherComponent`
- `component:Ui::Toast` —TESTED_BY→ `test:Components::Ui::ToastComponent`
- `component:Ui::Tooltip` —TESTED_BY→ `test:Components::Ui::TooltipComponent`

## Contract

No dedicated machine-readable contract is currently registered.

## Change checklist

- Run impact analysis for affected nodes.
- Preserve security, privacy and tenant invariants.
- Update required tests and public contracts.
- Regenerate repository intelligence artifacts.
