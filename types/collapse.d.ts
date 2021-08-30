import { KarmanUIComponent } from './component'

/** Use Collapse to store contents. */
export declare class KuiCollapse extends KarmanUIComponent {
  /** Whether to activate accordion mode */
  accordion: boolean

  /** Currently active panel */
  value: string | number | string[] | number[]
}
