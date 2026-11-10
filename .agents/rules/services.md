---
trigger: glob
globs: "src/**/*.service.ts, src/**/*.ts"
description: "Rules for Angular services and dependency injection."
---

# Angular Services & Dependency Injection

- Design services around a single responsibility.
- Use the `providedIn: 'root'` option for singleton services.
- Prefer the `@Service` decorator over `@Injectable({providedIn: 'root'})` for new singleton services (Angular v22+).
- Use the `inject()` function instead of constructor injection.

