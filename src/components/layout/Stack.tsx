import * as React from 'react'
import { css, cx } from 'emotion'
import { Alignment, Distribution } from './alignment'

function spacingApplies(alignment?: Alignment | Distribution) {
  switch (alignment) {
    case 'distribute-around':
    case 'distribute-even':
    case 'distribute-edges':
      return false
  }

  return true
}

type HStackProps = {
  children: React.ReactNode
  horizontal?: Alignment | Distribution
  vertical?: Alignment
  spacing?: number

  inline?: boolean
  reverse?: boolean
  wrap?: 'wrap' | 'wrap-reverse'
}

function mapJustifyContent(alignment?: Alignment | Distribution) {
  switch (alignment) {
    case 'distribute-around':
      return 'space-around'
    case 'distribute-even':
      return 'space-even'
    case 'distribute-edges':
      return 'space-between'

    case 'leading':
      return 'flex-start'
    case 'stretch':
      return 'stretch'
    case 'center':
      return 'center'
    case 'trailing':
      return 'flex-end'
    case undefined:
      return 'initial'
  }
}

function mapAlignItems(alignment?: Alignment) {
  switch (alignment) {
    case 'leading':
      return 'flex-start'
    case 'stretch':
      return 'stretch'
    case 'center':
      return 'center'
    case 'trailing':
      return 'flex-end'
    case undefined:
      return 'initial'
  }
}

const hStackStyle = ({
  reverse,
  wrap,
  inline,
  horizontal,
  vertical,
  spacing,
}: HStackProps) => css`
  display: ${inline ? 'inline-flex' : 'flex'};
  flex-direction: ${reverse ? 'row-reverse' : 'row'};
  align-items: ${mapAlignItems(vertical)};
  justify-content: ${mapJustifyContent(horizontal)};
  flex-wrap: ${wrap || 'nowrap'};
  ${inline ? '' : `align-self: stretch;`}
  flex: 1;

  ${spacingApplies(horizontal) &&
    spacing &&
    spacing !== 0 &&
    `
      margin-bottom: -${spacing}px;
      > * { margin-right: ${spacing}px; margin-bottom: ${spacing}px; }
      > *:last-child { margin-right: 0; }
    `}
`

export const HStack = (p: HStackProps) => {
  return <div className={cx(hStackStyle(p))}>{p.children}</div>
}

type VStackProps = {
  children: React.ReactNode
  horizontal?: Alignment
  vertical?: Alignment | Distribution
  spacing?: number

  inline?: boolean
  reverse?: boolean
  wrap?: 'wrap' | 'wrap-reverse'
}

const vStackStyle = ({
  reverse,
  wrap,
  inline,
  horizontal,
  vertical,
  spacing,
}: VStackProps) => css`
  display: ${inline ? 'inline-flex' : 'flex'};
  flex-direction: ${reverse ? 'column-reverse' : 'column'};
  align-items: ${mapAlignItems(horizontal)};
  justify-content: ${mapJustifyContent(vertical)};
  flex-wrap: ${wrap || 'nowrap'};
  ${inline ? '' : `align-self: stretch;`}
  flex: 1;

  ${spacingApplies(vertical) && spacing && spacing !== 0
    ? `> * + * { margin-top: ${spacing}px; }`
    : ``}
`

export const VStack = (p: VStackProps) => {
  return <div className={cx(vStackStyle(p))}>{p.children}</div>
}
