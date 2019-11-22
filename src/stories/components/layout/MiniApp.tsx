import { withInfo } from '@storybook/addon-info'
import { addDecorator } from '@storybook/react'
import React from 'react'
import { MiniApp } from '../../MiniApp'

addDecorator(withInfo)

export default { title: 'App' }

export const app = () => {
  return (
    <div
      style={{ height: '640px', maxHeight: '640px', border: '2px solid #aaa' }}
    >
      <MiniApp />
    </div>
  )
}
app.story = {
  name: 'MiniApp',
}
