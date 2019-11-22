import * as React from 'react'
import { cx, css } from 'emotion'

type Props = {
  color: string
  children: React.ReactNode
}

const style = (color: string) => css`
  background: ${color};
`

export const ColoredBox = ({ color, children }: Props) => (
  <div className={cx(style(color))}>{children}</div>
)
