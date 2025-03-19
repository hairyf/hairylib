# Hairylib Monorepo

<div align="center"> <img src="docs/public/logo.svg" > </div>

****

[Hairylib](https://hairylib.com/) is a monorepo project managed and published using pnpm and bumpp.

What are the benefits of a Monorepo?

- **Dependency Hoisting**. When multiple projects depend on common libraries like `react`, `vue`, or `TypeScript`, using `pnpm workspace` with the `catalog:` protocol hoists dependencies to the top level. This allows multiple sub-modules/packages to reuse the same dependencies, reducing project size and ensuring consistency.
- **Unified Management**. For example, in micro-frontend projects, multiple sub-applications can be placed in the same `monorepo` for easier management. Backend projects using `node.js` can also be managed with the same technology stack in a `monorepo`. During `CI/CD` and other pipeline processes, this facilitates unified iteration or version upgrades, and makes it easier to apply common configurations across multiple sub-projects.
- **Unified Publishing**. Using tools like `bumpp` and `pnpm` for unified publishing simplifies version management and reduces publishing complexity.

## Workflow

- Code checking based on `eslint`, `lint-staged`, `github actions`, and `tsc`.
- Unified version management and publishing using `bumpp`, with `CHANGELOG` generation through `changelogithub`.
- Fast execution of TypeScript files using `tsx`, and building with tsup.
- Dependency hoisting using the `catalog:` protocol for unified management of all dependencies.
- Direct reading of `index.ts` during development to simplify references between modules.
- Publishing using `publishConfig` to automatically build and publish to `npm`.
- Support for multiple module formats (`esm`, `cjs`, `iife`).
- Testing with vitest, with built-in workspace support.

## License

[MIT](./LICENSE) License © [Hairyf](https://github.com/hairyf)
