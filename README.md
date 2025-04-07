# Hairylib Monorepo

<div align="center"> <img src="docs/public/logo.svg" > </div>

****

<div align="center">

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

</div>

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

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@hairy/utils?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/@hairy/utils
[npm-downloads-src]: https://img.shields.io/npm/dm/@hairy/utils?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/@hairy/utils
[bundle-src]: https://img.shields.io/bundlephobia/minzip/@hairy/utils?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=@hairy/utils
[license-src]: https://img.shields.io/github/license/hairyf/hairylib.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/hairyf/hairylib/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/@hairy/utils
