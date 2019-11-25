<h1 align="center">restack</h1>

<p align="center">
<a href="https://github.com/bfollington/restack/actions?query=workflow%3A%22Build%22"><img alt="Build" src="https://github.com/bfollington/restack/workflows/Build/badge.svg"></a>
<a href="https://app.netlify.com/sites/restack/deploys"><img src="https://api.netlify.com/api/v1/badges/002db124-6e09-477e-833b-82ef52391196/deploy-status"></a>
<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/bfollington/restack">
<br>
  <a href="https://www.npmjs.com/package/@twopm/restack"><img alt="npm" src="https://img.shields.io/npm/v/@twopm/restack"></a>
<img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/@twopm/restack">
<img alt="GitHub" src="https://img.shields.io/github/license/bfollington/restack">

</p><br>

This is a loose attempt at porting the `VStack` and `HStack` concepts from SwiftUI.

## Install

```sh
yarn add @twopm/restack
```

## Usage

```tsx
import { VStack } from '@twopm/restack'

const App = () => (
  <VStack
    horizontal="center"
    vertical="distribute-edges"
    spacing={10}
  >
    <p>One</p>
    <p>Two</p>
    <p>Three</p>
  </VStack>
)
```
