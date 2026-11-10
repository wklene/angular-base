# Angular Architecture & Folder Structure Rules

When generating new Angular code, modifying the filesystem, or scaffolding features, you MUST adhere to the following directory structure and domain-driven design principles.

## Global Structure

- `src/app/core/`: Strictly for global singletons.
  - `store/`: Global state management (e.g., Auth state, global router state, session data).
  - `interceptors/`: HTTP interceptors.
  - `services/`: Global services (e.g., AuthService, ThemeService).
- `src/app/shared/`: Globally shared UI components, pipes, and directives. Must not contain business logic or feature-specific data models.
- `src/app/features/`: Contains isolated, independent sub-domains.

## Feature Module Anatomy

When scaffolding a new feature (e.g., `FeatureA`), create it inside `src/app/features/` with this exact internal structure:

- `featureA.routes.ts`: Orchestrates lazy loading for the feature.
- `store/`: Feature-specific state management (actions, reducers, selectors, or SignalStores).
- `pages/`: Routable "smart" components that connect to the store.
- `shared/`: Internal pieces strictly for this feature.
  - `types/`: Feature-specific data interfaces and types.
  - `components/`: Internal "dumb" UI pieces (presentational components receiving data via Inputs).
  - `services/`: Data fetching APIs (called by the store or effects).
  - `dialogs/`: Popups/dialogs with data.
  - `mocks/`: Mock files for testing.
  - `helpers/`: Helper functions and data mappers.

## Strict Boundaries

- Features must NOT import from other features.
- If two features need the same UI component, promote it to `src/app/shared/`.
- Smart components (`pages/`) should subscribe to the `store/` and pass data down to dumb components (`shared/components/`) via `@Input()`.
- Always use Standalone Components (no `.module.ts` files).
- Keep `.spec.ts` files colocated next to the component/service/store file they are testing.
