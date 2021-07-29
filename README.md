# Sample Design System

> This is a sample repository that shows you my latest thinking in how to setup a component library including a documentation site

## What's included?

- [A few simple components](#components)
- [Yarn workspaces](#yarn-workspaces)
- [manypkg](#manypkg)
- [preconstruct](#preconstruct)
- [changesets](#changesets)
- [Nextjs for the docs](#docs)
- [MDX for documentation](#mdx-for-documentation)

### Components

I have added a couple simple components just to hit some of the most common raised questions.

I chose [emotion](https://emotion.sh) for our CSS-in-JS lib to make sure our styles are not leaking into the global scope.

I have kept the code to simple JavaScript instead of Typescript.
I would recommend you use Typescript in production systems since a component library is all about public APIs and Typescript is a great tool to document those APIs easily.

#### [core](./packages/core)

The core component makes sure we deliver a CSS reset, make _global tokens_ available to the rest of the system and even comes with an `SSRTheme` component and a `DarkModeBtn` to make working with the theme easier.

#### [button](./packages/button)

The button component is one of the most common components found in component libraries. This one is kept very simple and is built specifically to work with [NextJs](https://nextjs.org/).

#### [icons](./packages/icons)

An icon component to show how we deal with multiple entrypoints in a single package to enable tree shaking.

#### [stack](./packages/stack)

I included this component to show that simple layout component can be a very powerful tool for your Design System.

### Yarn workspaces

To make working with many different, individually versioned components easier this repository is a mono-repo powered by [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/).

This enables us to deal with dependency management and allows us to use a component as if it was installed via npm.

### manypkg

Working inside a mono-repo comes with a bunch of challenges including:

- Making sure that all dependencies are aligned among all your components
- Making sure dev peer-dependencies are included and are the same as dev-dependencies
- All package names are valid
- The repository field in your package.json is correct

and many more.

That what we use [manypgk](https://github.com/Thinkmill/manypkg) for. This tool lints our mono-repo and even comes with a fixing command.

### preconstruct

We use [preconstruct](https://preconstruct.tools) to make working inside a mono-repo easier.
It allows us to:

- In dev mode, our code behaves the same as it will in production, including locally linked in monorepos
- Add multiple entrypoints to our packages for publishing
- CLI helps walk us through set-up and making changes to our configs
- Builds our code with [rollup](https://rollupjs.org)

### Changesets

?> Note that this tool is not installed yet.

Lastly we use [changesets](https://github.com/atlassian/changesets) to manage changelogs and publishing of versions.
It gives us a workflow to make sure we track all changes, thank the contributors and publish our packages automatically.

### Docs

https://nextjs.org/

#### MDX for documentation

https://mdxjs.com

https://github.com/hashicorp/next-mdx-remote
