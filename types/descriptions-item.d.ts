import { KarmanUIComponent } from './component'
import { VNode } from 'vue'

interface KuiDescriptionsItemSlots {
  /* label slot: custom label */
  label: VNode[]

  /* default slot: custom content */
  default: VNode[]

  [key: string]: VNode[]
}

/** description item. **/
export declare class KuiDescriptionsItem extends KarmanUIComponent {

  /* label text */
  label: string

  /*  the number of columns included */
  span: number 

  /* custom label class name */
  labelClassName: string

  /* custom content class name */
  contentClassName: string

  /* custom label style */
  labelStyle: object

  /* custom content style */
  contentStyle: object

  $slots: KuiDescriptionsItemSlots

}
