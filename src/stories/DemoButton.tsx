import * as React from 'react'
import { cx, css } from 'emotion'

type Props = {
  children: React.ReactNode
}

const style = css`
  border: none;
  background: none;
  font-size: 24px;

  text-align: center;
`

export const DemoButton = ({ children }: Props) => (
  <button className={cx(style)} type="button">
    {children}
  </button>
)
