import * as React from 'react'
import { cx, css } from 'emotion'

type Props = {
  width?: number
  height?: number
  padding?: number

  color?: string
  filled?: boolean

  children?: React.ReactNode
}

const style = (p: Props) => css`
  ${p.width ? `width: ${p.width}px;` : ``}
  ${p.height ? `height: ${p.height}px;` : ``}
  ${p.padding ? `padding: ${p.padding}px;` : ``}

  border: 1px dashed ${p.color ? p.color : '#aaa'};
  ${p.filled ? `background: ${p.color};` : ``}
  border-radius: 3px;
`

export const Placeholder = (p: Props) => (
  <div className={cx(style(p))}>{p.children}</div>
)
