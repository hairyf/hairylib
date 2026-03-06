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

[Hairylib](https://hairylib.com/) is a monorepo project managed and published using [pnpm](https://pnpm.io/) and [bumpp](https://github.com/antfu-collective/bumpp). It collects the libraries and utilities I use across projects into one place, with shared tooling and workflows.

What are the benefits of a Monorepo?

- **Dependency Hoisting**. When multiple projects depend on common libraries like `react`, `vue`, or `TypeScript`, using `pnpm workspace` with the `catalog:` protocol hoists dependencies to the top level. This allows multiple sub-modules/packages to reuse the same dependencies, reducing project size and ensuring consistency.

- **Unified Management**. In micro-frontend projects, multiple sub-applications can be placed in the same `monorepo` for easier management. Backend projects using `node.js` can also be managed with the same technology stack in a `monorepo`. During `CI/CD` and other pipeline processes, this facilitates unified iteration or version upgrades, and makes it easier to apply common config across multiple sub-projects.

- **Unified Publishing**. Tools like `bumpp` and `pnpm` for unified publishing simplifies version management and reduces publishing complexity. and the `github release` is automatically generated. This makes it easier to manage the version of the entire project and publish it to `npm`.

## Workflow

- **Code quality**: Unified linting and formatting powered by [antfu/eslint-config](https://github.com/antfu/eslint-config) and [lint-staged](https://github.com/lint-staged/lint-staged) and [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks).
- **Continuous integration**: [GitHub Actions](/.github/workflows) runs `pnpm lint`, `pnpm test`, and `pnpm typecheck` (`tsc --noEmit`) on every push/PR so `branch` stays green.
- **Versioning & Releases**: Use [bumpp](https://github.com/antfu-collective/bumpp) for versioning and [changelogithub](https://github.com/antfu/changelogithub) for `CHANGELOG` and GitHub Releases and Automate passwordless publishing via npm [Trusted Publisher](https://docs.npmjs.com/trusted-publishers)
- **Build & runtime**: [tsdown](https://tsdown.dev/) outputs both `esm` and `cjs` bundles; [tsx](https://tsx.is) is used to run TypeScript directly during development.
- **Monorepo DX**: Uses [pnpm catalog](https://pnpm.io/catalogs) for centralized dependency management and hoisting; during development packages import each other's `index.ts` directly to simplify cross-package references.
- **Testing**: [vitest](https://vitest.dev/) with built-in workspace support for fast, isolated tests.
## Packages in this monorepo

These are the packages currently maintained in this repository:

- `@hairy/utils` – core utility library used by all other packages.
- `@hairy/wechat-jssdk` – helpers around the WeChat JSSDK.
- `@hairy/palette` – utilities for building and working with color palettes.
- `@hairy/vue-lib` – Vue composables and helpers (Vue 2 + 3 via `vue-demi`).
- `@hairy/uni-lib` – shared utilities targeting Uni-app / Vue-based runtimes.
- `@hairy/react-lib` – React hooks and utilities built on top of `@hairy/utils`.
- `@hairy/react-lib-composition` – React reactivity layer using `@vue/reactivity` and Valtio.
- `@hairy/react-i18-lib` – small helpers for `react-i18next`-based i18n.
- `@hairy/ether-lib` – utilities built around `ethers@6`.
- `lib-placeholder` – private internal playground package for experimenting with new setups.

All publishable packages share the same toolchain: `tsdown` for builds, `vitest` for tests, `tsx` for quick scripts, and `pnpm` workspaces with `catalog:` hoisting for consistent dependency versions.

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
