import * as React from 'react'
import { css, cx } from 'emotion'
import { Alignment } from './alignment'

type AlignmentSelf = Alignment | 'baseline' | 'stretch'

function mapAlignSelf(align?: AlignmentSelf) {
  switch (align) {
    case 'leading':
      return 'flex-start'
    case 'center':
      return 'center'
    case 'trailing':
      return 'flex-end'
    case 'baseline':
      return 'baseline'
    case 'stretch':
      return 'stretch'
    case undefined:
      return 'auto'
  }
}

type FrameProps = {
  className?: string
  alignSelf?: AlignmentSelf

  grow?: number
  shrink?: number
  basis?: number

  children?: React.ReactNode

  minWidth?: number
  maxWidth?: number

  minHeight?: number
  maxHeight?: number

  scroll?: boolean
}

const frameStyle = ({
  alignSelf,
  grow,
  shrink,
  basis,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  scroll,
}: FrameProps) => css`
  display: flex;
  align-self: ${mapAlignSelf(alignSelf)};
  flex-grow: ${grow || 0};
  flex-shrink: ${shrink || 1};
  flex-basis: ${basis ? basis + 'px' : 'auto'};
  box-sizing: border-box;

  ${scroll && `overflow: auto;`}
  ${minWidth && `min-width: ${minWidth}px;`}
  ${maxWidth && `max-width: ${maxWidth}px;`}
  ${minHeight && `min-height: ${minHeight}px;`}
  ${maxHeight && `max-height: ${maxHeight}px;`}
`

export const Frame = (p: FrameProps) => {
  return <div className={cx(frameStyle(p), p.className)}>{p.children}</div>
}
