# purescript-react-basic

[![Build Status](https://travis-ci.org/lumihq/purescript-react-basic.svg?branch=main)](https://travis-ci.org/lumihq/purescript-react-basic)

There's a brief section on getting started below. For a more complete guide, check out the React Basic ~[docs](https://react-basic-starter.github.io/)! (work in progress)~ _(sorry, not sure when the docs will be done but here's a "real world" example app which is a great starting point! [jonasbuntinx/purescript-react-realworld](https://github.com/jonasbuntinx/purescript-react-realworld) -- I also recommend the [PureScript Discourse forum](https://discourse.purescript.org/search?q=react-basic) for specific questions, and am usually fairly responsive to blocking issues here on GitHub, including the repositories below. Finally, check out the [purescript-cookbook](https://github.com/JordanMartinez/purescript-cookbook/tree/master/recipes) repo for small examples of specific use cases, like `TextFieldsReactHooks`.)_

## Getting Started

This library contains the core types and tools used by the rest of the React Basic ecosystem. To use React Basic in your applications you'll also need to choose one or more _implementations_ as well as a target environment!

_Note: The Hooks and Classic implementations can both be used in the same project_

Implementations:

- [`react-basic-hooks`](https://github.com/spicydonuts/purescript-react-basic-hooks)
  - PureScript types for building components using React hooks, as well as creating custom hooks.
- [`react-basic-classic`](https://github.com/lumihq/purescript-react-basic-classic) _(this implementation was previously included in the `React.Basic` module)_
  - PureScript types for the more traditional class-based React API. Very similar to the Reason-React API.

Environments:

- [`react-basic-dom`](https://github.com/lumihq/purescript-react-basic-dom)
- [`react-basic-native`](https://github.com/f-f/purescript-react-basic-native)

For example, to use the `react-basic` hooks implementation for web development in a `spago` app:

```sh
npm i -S react react-dom
spago install react-basic react-basic-dom react-basic-hooks
```

Or using `bower`:

```sh
npm i -S react react-dom
bower i -S purescript-react-basic purescript-react-basic-dom purescript-react-basic-hooks
```

## Upgrading from React Basic v14

The `React.Basic.DOM` modules have been moved to [`react-basic-dom`](https://github.com/lumihq/purescript-react-basic-dom). This doesn't require any code changes, but you will need to add this dependency to your projects.

The component implementation previously in `React.Basic` has been extracted to [`react-basic-classic`](https://github.com/lumihq/purescript-react-basic-classic), which now provides the `React.Basic.Classic` module. Just install that library and find/replace `^import\sReact\.Basic\s` with `import React.Basic.Classic`.

If you were using the `React.Basic.Compat` module, that module has been moved to [`react-basic-compat`](https://github.com/lumihq/purescript-react-basic-compat).

If you were using [`react-basic-hooks`](https://github.com/spicydonuts/purescript-react-basic-hooks) exclusively everything should work as-is.

## Where did the examples folder go?

Because this library no longer contains a specific implementation and the example structure contained a fair bit of boilerplate, they've been moved to the `react-basic-classic` repository, in the [`examples` folder](https://github.com/lumihq/purescript-react-basic-classic/tree/main/examples). In addtion, a consolidated documentation site (linked above) is being worked on. 