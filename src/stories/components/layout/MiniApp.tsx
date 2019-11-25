import { withInfo } from '@storybook/addon-info'
import { addDecorator } from '@storybook/react'
import React from 'react'
import { MiniApp } from '../../MiniApp'
import { Frame } from '../../../components/layout/Frame'
import { css } from 'emotion'

addDecorator(withInfo)

export default { title: 'App' }

const style = css`
  border: 2px solid #aaa;
`

export const app = () => {
  return (
    <Frame className={style} maxHeight={640} minHeight={640}>
      <MiniApp />
    </Frame>
  )
}
app.story = {
  name: 'MiniApp',
}
