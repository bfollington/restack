

<a href=""><img src="https://github.com/bfollington/restack/blob/master/banner.png?raw=true" /></a>
<br />

[![Version](https://img.shields.io/npm/v/@twopm/restack?style=flat&colorA=000000&colorB=000000)](https://npmjs.com/package/@twopm/restack)
[![Twitter](https://img.shields.io/twitter/follow/vivavolt?label=%40vivavolt&style=flat&colorA=000000&colorB=000000&logo=twitter&logoColor=000000)](https://twitter.com/vivavolt)
[![Donate (ETH)](https://img.shields.io/badge/Donate-(ETH)-f5f5f5?style=flat&colorA=000000&colorB=000000)](https://blockchain.com/eth/address/0x981e493b795A7a28c43Bf8d7a8E125C419435Fa7)
[![Donate ($)](https://img.shields.io/badge/Donate-($)-f5f5f5?style=flat&colorA=000000&colorB=000000)](https://ko-fi.com/vivavolt)
![Language](https://img.shields.io/github/languages/top/bfollington/restack?style=flat&colorA=000000&colorB=000000)
![License](https://img.shields.io/github/license/bfollington/restack?style=flat&colorA=000000&colorB=000000)
![Bundle Size](https://img.shields.io/bundlephobia/min/@twopm/restack?style=flat&colorA=000000&colorB=000000)
<a href="https://app.netlify.com/sites/restack/deploys"><img src="https://api.netlify.com/api/v1/badges/002db124-6e09-477e-833b-82ef52391196/deploy-status"></a>

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
