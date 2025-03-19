# Hairylib Monorepo

<div align="center"> <img src="docs/public/logo.svg" > </div>

****

[Hairylib](https://hairylib.com/) is a monorepo project managed and published using [pnpm](https://pnpm.io/) and [bumpp](https://github.com/antfu-collective/bumpp).

What are the benefits of a Monorepo?

- **Dependency Hoisting**. When multiple projects depend on common libraries like `react`, `vue`, or `TypeScript`, using `pnpm workspace` with the `catalog:` protocol hoists dependencies to the top level. This allows multiple sub-modules/packages to reuse the same dependencies, reducing project size and ensuring consistency.

- **Unified Management**. In micro-frontend projects, multiple sub-applications can be placed in the same `monorepo` for easier management. Backend projects using `node.js` can also be managed with the same technology stack in a `monorepo`. During `CI/CD` and other pipeline processes, this facilitates unified iteration or version upgrades, and makes it easier to apply common config across multiple sub-projects.

- **Unified Publishing**. Tools like `bumpp` and `pnpm` for unified publishing simplifies version management and reduces publishing complexity. and the `github release` is automatically generated. This makes it easier to manage the version of the entire project and publish it to `npm`.

## Workflow

- Code style checking based on [antfu/eslint-config](https://github.com/antfu/eslint-config)  and [lint-staged](https://github.com/lint-staged/lint-staged)
- Use [github actions](/.github/workflows), and `typecheck(tsc --noEmit)` to check the code and auto run tests.
- Unified version management and publishing using [bumpp](https://github.com/antfu-collective/bumpp), with `CHANGELOG` generation through [changelogithub](https://github.com/antfu/changelogithub).
- Fast execution of TypeScript files using [tsx](https://tsx.is).
- Dependency hoisting using the [catalog:](https://pnpm.io/catalogs) protocol for unified management of all dependencies.
- Direct reading of `index.ts` during development to simplify references between modules.
- Publishing using [publishConfig](https://pnpm.io/package_json#publishconfig) to automatically build and publish to `npm`.
- Support for multiple module formats (`esm`, `cjs`, `iife`) by [tsup](https://tsup.egoist.dev/).
- Testing with [vitest](https://vitest.dev/), with built-in workspace support.

## License

[MIT](./LICENSE) License © [Hairyf](https://github.com/hairyf)
