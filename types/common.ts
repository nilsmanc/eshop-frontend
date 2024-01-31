export interface IAccordion {
  children: React.ReactNode
  title: string | false
  titleClass: string
  arrowOpenClass?: string
  isMobileForFilters?: boolean
  hideArrowClass?: string
  boxShadowStyle?: string
  callback?: (arg0: boolean) => void
}