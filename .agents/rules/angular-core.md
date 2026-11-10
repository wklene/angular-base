---
trigger: always_on
description: 'Core Angular framework guidelines, zoneless change detection, and standalone architecture.'
---

# Core Angular Guidelines

- Always use standalone components over NgModules.
- Must NOT set `standalone: true` inside Angular decorators (it is the default in modern Angular).
- Do NOT set `changeDetection: ChangeDetectionStrategy.OnPush` explicitly (`OnPush` is default in Angular v22+).
- The project runs zoneless change detection (`provideZonelessChangeDetection()`); do not rely on `zone.js`.
- Use signals for reactive state management.
- Implement lazy loading for feature routes.
- If appropriate use deferred loading with @defer
- Do NOT use `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of `@Component` or `@Directive`.
- Use `NgOptimizedImage` for static images (note: does not work for inline base64 images).
