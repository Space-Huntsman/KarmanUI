import { VNodeDirective } from 'vue'

export interface KuiInfiniteScroll extends VNodeDirective {
  name: 'infinite-scroll',
  value: Function
}
