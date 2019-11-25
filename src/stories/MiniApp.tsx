import * as React from 'react'
import { VStack, HStack } from '../components/layout/Stack'
import { Frame } from '../components/layout/Frame'
import { cx, css } from 'emotion'
import { ContentView } from './ContentView'
import { DemoButton } from './DemoButton'

const greyBg = css`
  background: #ccc;
  padding: 8px;
`

export const MiniApp = () => {
  return (
    <VStack vertical="distribute-edges">
      <Frame className={cx(greyBg)} minHeight={48} shrink={0} grow={0}>
        <HStack horizontal="distribute-edges" vertical="center">
          <label>My App</label>
          <DemoButton>
            <span role="img" aria-label="Settings">
              ⚙️
            </span>
          </DemoButton>
        </HStack>
      </Frame>

      <Frame grow={1} scroll>
        <ContentView />
      </Frame>

      <Frame className={cx(greyBg)} minHeight={48} shrink={0} grow={0}>
        <HStack horizontal="distribute-around">
          <DemoButton>
            <span role="img" aria-label="Home">
              🏚
            </span>
          </DemoButton>
          <DemoButton>
            <span role="img" aria-label="Games">
              🎮
            </span>
          </DemoButton>
          <DemoButton>
            <span role="img" aria-label="Profile">
              👤
            </span>
          </DemoButton>
        </HStack>
      </Frame>
    </VStack>
  )
}
