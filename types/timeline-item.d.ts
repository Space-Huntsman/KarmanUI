import { KarmanUIComponent } from './component'

export type TimelineItemPlacement = 'top' | 'bottom'
export type TimelineItemType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type TimelineItemSize = 'normal' | 'large'

/** TimelineItem Component */
export declare class KuiTimelineItem extends KarmanUIComponent {
  timestamp: string

  hideTimestamp: boolean

  placement: TimelineItemPlacement

  type: TimelineItemType

  size: TimelineItemSize

  icon: string
}
