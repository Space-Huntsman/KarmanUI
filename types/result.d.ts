import { KarmanUIComponent } from './component'
import { VNode } from 'vue'

interface KuiResultSlots {
  /* title slot: custom title */
  title: VNode[]

  /* icon slot: custom icon */
  icon: VNode[]

  /* subTitle slot: custom sub title */
  subTitle: VNode[]

  /* extra slot: custom extra area, display on the top right */
  extra: VNode[]

  [key: string]: VNode[]
}

/** Used to give feedback on the result of user's operation or access exception. **/
export declare class KuiResult extends KarmanUIComponent {

  /* title */
  title: string

  /* sub title */
  subTitle: string

  /* icon type */
  icon: 'success' | 'warning' | 'info' | 'error'

  $slots: KuiResultSlots
}
