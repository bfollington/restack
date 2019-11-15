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
  className?: string // TODO: remove
  children: React.ReactNode
  horizontal?: Alignment | Distribution
  vertical?: Alignment
  spacing?: number

  inline?: boolean
  reverse?: boolean
  wrap?: 'wrap' | 'wrap-reverse'
}

function mapJustifyContentHStack(horizontal?: Alignment | Distribution) {
  switch (horizontal) {
    case 'distribute-around':
      return 'space-around'
    case 'distribute-even':
      return 'space-even'
    case 'distribute-edges':
      return 'space-between'

    case 'leading':
      return 'flex-start'
    case 'center':
      return 'center'
    case 'trailing':
      return 'flex-end'
    case undefined:
      return 'auto'
  }
}

function mapAlignSelfHStack(vertical?: Alignment) {
  switch (vertical) {
    case 'leading':
      return 'flex-start'
    case 'center':
      return 'center'
    case 'trailing':
      return 'flex-end'
    case undefined:
      return 'auto'
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
  align-items: ${mapAlignSelfHStack(vertical)};
  justify-content: ${mapJustifyContentHStack(horizontal)};
  flex-wrap: ${wrap || 'nowrap'};

  ${spacingApplies(horizontal) &&
    spacing &&
    spacing !== 0 &&
    `> * + * { margin-left: ${spacing}px; }`}
`

export const HStack = (p: HStackProps) => {
  return <div className={cx(hStackStyle(p), p.className)}>{p.children}</div>
}

type VStackProps = {
  className?: string // TODO: remove
  children: React.ReactNode
  horizontal?: Alignment
  vertical?: Alignment | Distribution
  spacing?: number

  inline?: boolean
  reverse?: boolean
  wrap?: 'wrap' | 'wrap-reverse'
}

function mapJustifyContentVStack(vertical?: Alignment | Distribution) {
  switch (vertical) {
    case 'distribute-around':
      return 'space-around'
    case 'distribute-even':
      return 'space-even'
    case 'distribute-edges':
      return 'space-between'

    case 'leading':
      return 'flex-start'
    case 'center':
      return 'center'
    case 'trailing':
      return 'flex-end'
    case undefined:
      return 'auto'
  }
}

function mapAlignSelfVStack(vertical?: Alignment) {
  switch (vertical) {
    case 'leading':
      return 'flex-start'
    case 'center':
      return 'center'
    case 'trailing':
      return 'flex-end'
    case undefined:
      return 'auto'
  }
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
  align-items: ${mapAlignSelfVStack(horizontal)};
  justify-content: ${mapJustifyContentVStack(vertical)};
  flex-wrap: ${wrap || 'nowrap'};

  ${spacingApplies(vertical) && spacing && spacing !== 0
    ? `> * + * { margin-top: ${spacing}px; }`
    : ``}
`

export const VStack = (p: VStackProps) => {
  return <div className={cx(vStackStyle(p), p.className)}>{p.children}</div>
}
