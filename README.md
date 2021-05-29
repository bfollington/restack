

<a href=""><img src="https://github.com/bfollington/restack/blob/master/banner.png?raw=true" /></a>
<br />

<p align="center">
  <a href="https://github.com/bfollington/restack/actions?query=workflow%3A%22Build%22"><img alt="Build" src="https://github.com/bfollington/restack/workflows/Build/badge.svg"></a>
  <a href="https://app.netlify.com/sites/restack/deploys"><img src="https://api.netlify.com/api/v1/badges/002db124-6e09-477e-833b-82ef52391196/deploy-status"></a>
<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/bfollington/restack">
<br>
  <img alt="GitHub" src="https://img.shields.io/github/license/bfollington/restack">
  <img alt="npm" src="https://img.shields.io/npm/v/@twopm/restack">
<img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/@twopm/restack">

</p><br>




<p align="center"><strong>restack</strong> is a port of the <code>VStack</code> and <code>HStack</code> concepts from SwiftUI. Simple, composable application layouts.

<p align="center"><a href="https://restack.netlify.app/">👁 &nbsp;Live Demo</a></p>


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

See the [storybook examples](https://github.com/bfollington/restack/blob/master/src/stories/MiniApp.tsx) for more or view the [live demo](
https://restack.netlify.app/).
