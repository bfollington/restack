import * as React from 'react'
import { HStack, VStack } from '../components/layout/Stack'
import { Frame } from '../components/layout/Frame'
import { cx, css } from 'emotion'

const style = css`
  padding: 8px;
`

export const Card = () => (
  <Frame className={cx(style)} minHeight={96} maxHeight={96}>
    <HStack>
      <Frame grow={1}>
        <VStack vertical="center">
          <span>
            <strong>Card title</strong>
          </span>
          <span>Some text</span>
        </VStack>
      </Frame>
      <Frame grow={1}>
        <HStack vertical="center" horizontal="trailing" spacing={8}>
          <button>Test</button>
          <button>Test 2</button>
        </HStack>
      </Frame>
    </HStack>
  </Frame>
)
