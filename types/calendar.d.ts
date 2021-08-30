import { KarmanUIComponent } from './component'

export type DateType = Date | String | Number

/** Calendar Component */
export declare class KuiCalendar extends KarmanUIComponent {
  /** Binding value */
  value: DateType

  /** Specify the display range of the calendar */
  range: DateType[]

  /** First day of week */
  firstDayOfWeek: number
}
