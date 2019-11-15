export type AlignOption = 'start' | 'end' | 'center' | 'baseline' | 'stretch'
export type JustifyOption =
  | 'start'
  | 'end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

export function mapAlignOptionToCss(o?: AlignOption) {
  switch (o) {
    case 'start':
      return 'flex-start'
    case 'end':
      return 'flex-end'
    case undefined:
      return 'auto'
    default:
      return o
  }
}

export function mapJustifyOptionToCss(o?: JustifyOption) {
  switch (o) {
    case 'start':
      return 'flex-start'
    case 'end':
      return 'flex-end'
    case undefined:
      return 'auto'
    default:
      return o
  }
}
