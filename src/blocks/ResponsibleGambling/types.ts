export type ResponsibleVariant = 'subtle' | 'strong'

export type ResponsibleGamblingProps = {
  message: string
  helplineLabel: string
  helplineHref: string
  minAge: number
  showAgeBadge: boolean
  variant: ResponsibleVariant
}
