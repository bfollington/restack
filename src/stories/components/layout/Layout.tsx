import React, { useState } from 'react'
import { addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Frame } from '../../../components/layout/Frame'
import { VStack, HStack } from '../../../components/layout/Stack'
import { Alignment, Distribution } from '../../../components/layout/alignment'
import { Placeholder } from './Placeholder'

addDecorator(withInfo)

export default { title: 'Layout' }

const BasicDemo = () => {
  const [spacing, setSpacing] = useState(0)

  return (
    <div>
      <input
        type="range"
        min="0"
        max="128"
        value={spacing}
        onChange={e => setSpacing(parseInt(e.target.value))}
      />
      <Placeholder padding={10} color="#EF9A9A">
        <VStack spacing={spacing}>
          <Frame basis={64}>
            <Placeholder color="#CE93D8">
              <HStack vertical="center" horizontal="distribute-edges">
                <h1>A</h1>
                <h1>B</h1>
              </HStack>
            </Placeholder>
          </Frame>
          <Frame grow={1} shrink={0}>
            <Placeholder color="#A5D6A7">
              <p>
                This is a little SwiftUI inspired layout system. It&apos;s a
                thin wrapper around flex-box presented in three primitives:
              </p>
              <ul>
                <li>VStack - Stack elements vertically</li>
                <li>HStack - Stack elements horizontally</li>
                <li>Frame - Contain elements, control resizing logic</li>
              </ul>
            </Placeholder>
          </Frame>
          <Frame grow={1} shrink={0}>
            <Placeholder color="#90CAF9">
              <HStack vertical="center" horizontal="distribute-around">
                <Placeholder>
                  <p>One</p>
                </Placeholder>
                <Placeholder>
                  <p>Two</p>
                </Placeholder>
                <Placeholder>
                  <p>Three</p>
                </Placeholder>
              </HStack>
            </Placeholder>
          </Frame>
          <Frame>
            <Placeholder height={32} color="#FFCC80">
              <label>C</label>
            </Placeholder>
          </Frame>
        </VStack>
      </Placeholder>
    </div>
  )
}

export const basicDemo = () => {
  return <BasicDemo />
}
basicDemo.story = {
  name: 'Basic demo',
}

export const HStackPlayground = () => {
  const [horizontal, setHorizontal] = useState<
    Alignment | Distribution | undefined
  >(undefined)
  const [vertical, setVertical] = useState<Alignment | undefined>(undefined)
  const [spacing, setSpacing] = useState(0)

  return (
    <div>
      <div>
        <label>Horizontal</label>
        <select
          value={horizontal}
          onChange={e => setHorizontal(e.target.value as any)}
        >
          <option value={undefined}>auto</option>
          <option value="distribute-around">distribute-around</option>
          <option value="distribute-even">distribute-even</option>
          <option value="distribute-edges">distribute-edges</option>
          <option value="leading">leading</option>
          <option value="center">center</option>
          <option value="stretch">stretch</option>
          <option value="trailing">trailing</option>
        </select>
      </div>
      <div>
        <label>Vertical</label>
        <select
          value={vertical}
          onChange={e => setVertical(e.target.value as any)}
        >
          <option value={undefined}>auto</option>
          <option value="leading">leading</option>
          <option value="center">center</option>
          <option value="stretch">stretch</option>
          <option value="trailing">trailing</option>
        </select>
      </div>

      <div>
        <label>Spacing</label>
        <input
          type="range"
          min="0"
          max="128"
          value={spacing}
          onChange={e => setSpacing(parseInt(e.target.value))}
        />
      </div>
      <Placeholder>
        <Frame minHeight={96}>
          <HStack horizontal={horizontal} vertical={vertical} spacing={spacing}>
            <Frame>
              <Placeholder
                width={64}
                height={64}
                color="#EF9A9A"
                filled
                fillHeight
              />
            </Frame>

            <Frame>
              <Placeholder
                width={128}
                height={64}
                color="#A5D6A7"
                filled
                fillHeight
              />
            </Frame>

            <Frame>
              <Placeholder
                width={64}
                height={128}
                color="#90CAF9"
                filled
                fillHeight
              />
            </Frame>

            <Frame>
              <Placeholder
                width={64}
                height={64}
                color="#FFCC80"
                filled
                fillHeight
              />
            </Frame>
          </HStack>
        </Frame>
      </Placeholder>
    </div>
  )
}
HStackPlayground.story = {
  name: 'HStack',
}

export const VStackPlayground = () => {
  const [vertical, setVertical] = useState<
    Alignment | Distribution | undefined
  >(undefined)
  const [horizontal, setHorizontal] = useState<Alignment | undefined>(undefined)
  const [spacing, setSpacing] = useState(0)

  return (
    <div>
      <div>
        <label>Vertical</label>
        <select
          value={vertical}
          onChange={e => setVertical(e.target.value as any)}
        >
          <option value={undefined}>auto</option>
          <option value="distribute-around">distribute-around</option>
          <option value="distribute-even">distribute-even</option>
          <option value="distribute-edges">distribute-edges</option>
          <option value="leading">leading</option>
          <option value="center">center</option>
          <option value="stretch">stretch</option>
          <option value="trailing">trailing</option>
        </select>
      </div>
      <div>
        <label>Horizontal</label>
        <select
          value={horizontal}
          onChange={e => setHorizontal(e.target.value as any)}
        >
          <option value={undefined}>auto</option>
          <option value="leading">leading</option>
          <option value="stretch">stretch</option>
          <option value="center">center</option>
          <option value="trailing">trailing</option>
        </select>
      </div>
      <div>
        <label>Spacing</label>
        <input
          type="range"
          min="0"
          max="128"
          value={spacing}
          onChange={e => setSpacing(parseInt(e.target.value))}
        />
      </div>
      <Placeholder>
        <Frame minHeight={512}>
          <VStack vertical={vertical} horizontal={horizontal} spacing={spacing}>
            <Frame>
              <Placeholder width={64} height={64} color="#EF9A9A" filled />
            </Frame>

            <Frame>
              <Placeholder width={128} height={64} color="#A5D6A7" filled />
            </Frame>

            <Frame>
              <Placeholder width={64} height={128} color="#90CAF9" filled />
            </Frame>

            <Frame>
              <Placeholder width={64} height={64} color="#FFCC80" filled />
            </Frame>
          </VStack>
        </Frame>
      </Placeholder>
    </div>
  )
}
VStackPlayground.story = {
  name: 'VStack',
}
