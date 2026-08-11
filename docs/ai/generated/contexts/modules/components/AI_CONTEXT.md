# Components AI Context

> Generated artifact. Source changes must be followed by regeneration.

## Responsibilities

- test: Components::MarketingComponents, Components::Ui::AvatarComponent, Components::Ui::AvatarGroupComponent, Components::Ui::ButtonComponent, Components::Ui::CommandPaletteComponent, Components::Ui::CoreComponents, Components::Ui::DangerZoneComponent, Components::Ui::Data::ActivityFeedComponent, Components::Ui::Data::DescriptionListComponent, Components::Ui::Data::KpiCardComponent, Components::Ui::Data::TimelineComponent, Components::Ui::Data::TreeViewComponent, Components::Ui::Forms::AutocompleteComponent, Components::Ui::Forms::ComboboxComponent, Components::Ui::Forms::FileUploadComponent, Components::Ui::Forms::FormComponents, Components::Ui::Forms::MultiSelectComponent, Components::Ui::Forms::TagInputComponent, Components::Ui::Layout::ApplicationShellComponent, Components::Ui::LocaleSwitcherComponent, Components::Ui::PaginationComponent, Components::Ui::PermissionIndicatorComponent, Components::Ui::PopoverComponent, Components::Ui::ProgressBarComponent, Components::Ui::ProgressSpinnerComponent, Components::Ui::RoleBadgeComponent, Components::Ui::SkeletonComponent, Components::Ui::StepperComponent, Components::Ui::TabsComponent, Components::Ui::ThemeSwitcherComponent, Components::Ui::ToastComponent, Components::Ui::TooltipComponent, Components::Ui::UserMenuComponent

## Source paths

- `test/components/marketing_components_test.rb`
- `test/components/ui/avatar_component_test.rb`
- `test/components/ui/avatar_group_component_test.rb`
- `test/components/ui/button_component_test.rb`
- `test/components/ui/command_palette_component_test.rb`
- `test/components/ui/core_components_test.rb`
- `test/components/ui/danger_zone_component_test.rb`
- `test/components/ui/data/activity_feed_component_test.rb`
- `test/components/ui/data/description_list_component_test.rb`
- `test/components/ui/data/kpi_card_component_test.rb`
- `test/components/ui/data/timeline_component_test.rb`
- `test/components/ui/data/tree_view_component_test.rb`
- `test/components/ui/forms/autocomplete_component_test.rb`
- `test/components/ui/forms/combobox_component_test.rb`
- `test/components/ui/forms/file_upload_component_test.rb`
- `test/components/ui/forms/form_components_test.rb`
- `test/components/ui/forms/multi_select_component_test.rb`
- `test/components/ui/forms/tag_input_component_test.rb`
- `test/components/ui/layout/application_shell_component_test.rb`
- `test/components/ui/locale_switcher_component_test.rb`
- `test/components/ui/pagination_component_test.rb`
- `test/components/ui/permission_indicator_component_test.rb`
- `test/components/ui/popover_component_test.rb`
- `test/components/ui/progress_bar_component_test.rb`
- `test/components/ui/progress_spinner_component_test.rb`
- `test/components/ui/role_badge_component_test.rb`
- `test/components/ui/skeleton_component_test.rb`
- `test/components/ui/stepper_component_test.rb`
- `test/components/ui/tabs_component_test.rb`
- `test/components/ui/theme_switcher_component_test.rb`
- `test/components/ui/toast_component_test.rb`
- `test/components/ui/tooltip_component_test.rb`
- `test/components/ui/user_menu_component_test.rb`

## Relationships

- `controller:Marketing` —TESTED_BY→ `test:Components::MarketingComponents`
- `component:Ui::Avatar` —TESTED_BY→ `test:Components::Ui::AvatarComponent`
- `component:Ui::Avatar` —TESTED_BY→ `test:Components::Ui::AvatarGroupComponent`
- `component:Ui::AvatarGroup` —TESTED_BY→ `test:Components::Ui::AvatarGroupComponent`
- `component:Ui::Button` —TESTED_BY→ `test:Components::Ui::ButtonComponent`
- `component:Ui::CommandPalette` —TESTED_BY→ `test:Components::Ui::CommandPaletteComponent`
- `component:Ui::DangerZone` —TESTED_BY→ `test:Components::Ui::DangerZoneComponent`
- `component:Ui::Data::ActivityFeed` —TESTED_BY→ `test:Components::Ui::Data::ActivityFeedComponent`
- `component:Ui::Data::DescriptionList` —TESTED_BY→ `test:Components::Ui::Data::DescriptionListComponent`
- `component:Ui::Card` —TESTED_BY→ `test:Components::Ui::Data::KpiCardComponent`
- `component:Ui::Data::KpiCard` —TESTED_BY→ `test:Components::Ui::Data::KpiCardComponent`
- `component:Ui::Data::Timeline` —TESTED_BY→ `test:Components::Ui::Data::TimelineComponent`
- `component:Ui::Data::TreeView` —TESTED_BY→ `test:Components::Ui::Data::TreeViewComponent`
- `component:Ui::Forms::Autocomplete` —TESTED_BY→ `test:Components::Ui::Forms::AutocompleteComponent`
- `document:Design-system::Forms` —TESTED_BY→ `test:Components::Ui::Forms::AutocompleteComponent`
- `component:Ui::Forms::Combobox` —TESTED_BY→ `test:Components::Ui::Forms::ComboboxComponent`
- `document:Design-system::Forms` —TESTED_BY→ `test:Components::Ui::Forms::ComboboxComponent`
- `component:Ui::Forms::FileUpload` —TESTED_BY→ `test:Components::Ui::Forms::FileUploadComponent`
- `document:Design-system::Forms` —TESTED_BY→ `test:Components::Ui::Forms::FileUploadComponent`
- `document:Design-system::Forms` —TESTED_BY→ `test:Components::Ui::Forms::FormComponents`
- `component:Ui::Forms::MultiSelect` —TESTED_BY→ `test:Components::Ui::Forms::MultiSelectComponent`
- `document:Design-system::Forms` —TESTED_BY→ `test:Components::Ui::Forms::MultiSelectComponent`
- `component:Ui::Forms::TagInput` —TESTED_BY→ `test:Components::Ui::Forms::TagInputComponent`
- `document:Design-system::Forms` —TESTED_BY→ `test:Components::Ui::Forms::TagInputComponent`
- `component:Application` —TESTED_BY→ `test:Components::Ui::Layout::ApplicationShellComponent`
- `component:Ui::Layout::ApplicationShell` —TESTED_BY→ `test:Components::Ui::Layout::ApplicationShellComponent`
- `controller:Application` —TESTED_BY→ `test:Components::Ui::Layout::ApplicationShellComponent`
- `job:Application` —TESTED_BY→ `test:Components::Ui::Layout::ApplicationShellComponent`
- `policy:Application` —TESTED_BY→ `test:Components::Ui::Layout::ApplicationShellComponent`
- `component:Ui::LocaleSwitcher` —TESTED_BY→ `test:Components::Ui::LocaleSwitcherComponent`
- `component:Ui::Pagination` —TESTED_BY→ `test:Components::Ui::PaginationComponent`
- `component:Ui::PermissionIndicator` —TESTED_BY→ `test:Components::Ui::PermissionIndicatorComponent`
- `model:Permission` —TESTED_BY→ `test:Components::Ui::PermissionIndicatorComponent`
- `component:Ui::Popover` —TESTED_BY→ `test:Components::Ui::PopoverComponent`
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
- `component:Ui::UserMenu` —TESTED_BY→ `test:Components::Ui::UserMenuComponent`
- `model:User` —TESTED_BY→ `test:Components::Ui::UserMenuComponent`

## Contract

No dedicated machine-readable contract is currently registered.

## Change checklist

- Run impact analysis for affected nodes.
- Preserve security, privacy and tenant invariants.
- Update required tests and public contracts.
- Regenerate repository intelligence artifacts.
