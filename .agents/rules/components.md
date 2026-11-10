---
trigger: glob
globs: 'src/**/*.ts, src/**/*.html, src/**/*.scss'
description: 'Rules for Angular components, templates, and signal-based reactivity.'
---

# Angular Components & Templates

## Components

- Keep components small and focused on a single responsibility.
- Use `input()` and `output()` functions instead of `@Input()` and `@Output()` decorators.
- Use `model()` for two-way bound properties with `[(prop)]` syntax instead of pairing `input()` with `output()`.
- Use `computed()` for derived state.
- Use `linkedSignal()` for state derived from multiple reactive sources that must stay synchronized.
- always use external templates; when using external templates/styles, use relative paths.
- always use Signal Forms (`@angular/forms/signals`) for new forms. They provide signal-based state, type-safe field access, and schema-based validation.
- Do NOT use `ngClass`, use `class` bindings instead.
- Do NOT use `ngStyle`, use `style` bindings instead.
- Do NOT import `CommonModule`. Import only the specific directives and pipes needed (e.g., `DatePipe`).

## State Management

- Use signals for local component state.
- Use `computed()` for derived state.
- Keep state transformations pure and predictable.
- Do NOT use `mutate` on signals; use `update` or `set` instead.

## Templates

- Keep templates simple and avoid complex logic.
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`.
- Use the async pipe to handle observables when applicable.
- Do not assume globals like `new Date()` are available directly in templates.
