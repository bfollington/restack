import React, { useState } from 'react'
import { addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Frame } from '../../../components/layout/Frame'
import { VStack, HStack } from '../../../components/layout/Stack'
import { css } from 'emotion'
import { Alignment, Distribution } from '../../../components/layout/alignment'

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
      <VStack
        className={css`
          background: red;
          padding: 10px;
        `}
        spacing={spacing}
      >
        <Frame
          basis={64}
          className={css`
            background: blue;
          `}
        >
          <HStack vertical="center" horizontal="distribute-edges">
            <h1>A</h1>
            <h1>B</h1>
          </HStack>
        </Frame>
        <Frame
          grow={1}
          shrink={0}
          className={css`
            background: green;
          `}
        >
          <p>
            This is a little SwiftUI inspired layout system. It&apos;s a thin
            wrapper around flex-box presented in three primitives:
          </p>
          <ul>
            <li>VStack - Stack elements vertically</li>
            <li>HStack - Stack elements horizontally</li>
            <li>Frame - Contain elements, control resizing logic</li>
          </ul>
        </Frame>
        <Frame
          grow={1}
          shrink={0}
          className={css`
            background: green;
          `}
        >
          <HStack vertical="center" horizontal="distribute-around">
            <p>One</p>
            <p>Two</p>
            <p>Three</p>
          </HStack>
        </Frame>
        <Frame
          basis={32}
          className={css`
            background: purple;
          `}
        >
          <label>C</label>
        </Frame>
      </VStack>
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
      <HStack horizontal={horizontal} vertical={vertical} spacing={spacing}>
        <Frame
          minWidth={32}
          minHeight={32}
          className={css`
            background: purple;
          `}
        />

        <Frame
          minWidth={64}
          minHeight={32}
          className={css`
            background: red;
          `}
        />

        <Frame
          minWidth={32}
          minHeight={64}
          className={css`
            background: blue;
          `}
        />

        <Frame
          minWidth={32}
          minHeight={32}
          className={css`
            background: pink;
          `}
        />
      </HStack>
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
        <label>Horizontal</label>
        <select
          value={vertical}
          onChange={e => setVertical(e.target.value as any)}
        >
          <option value={undefined}>auto</option>
          <option value="leading">leading</option>
          <option value="center">center</option>
          <option value="trailing">trailing</option>
        </select>
      </div>
      <div>
        <label>Vertical</label>
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
      <VStack vertical={vertical} horizontal={horizontal} spacing={spacing}>
        <Frame
          minWidth={32}
          minHeight={32}
          className={css`
            background: purple;
          `}
        />

        <Frame
          minWidth={64}
          minHeight={32}
          className={css`
            background: red;
          `}
        />

        <Frame
          minWidth={32}
          minHeight={64}
          className={css`
            background: blue;
          `}
        />

        <Frame
          minWidth={32}
          minHeight={32}
          className={css`
            background: pink;
          `}
        />
      </VStack>
    </div>
  )
}
VStackPlayground.story = {
  name: 'VStack',
}
