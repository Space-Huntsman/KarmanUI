import Vue, { VNode } from 'vue'
import { MessageType } from './message'

export type NotificationPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'

/** Notification Component */
export declare class KuiNotificationComponent extends Vue {
  /** Close the Notification instance */
  close (): void
}

export interface KuiNotificationOptions {
  /** Title */
  title: string

  /** Description text */
  message: string | VNode

  /** Notification type */
  type?: MessageType

  /** Custom icon's class. It will be overridden by type */
  iconClass?: string

  /** Custom class name for Notification */
  customClass?: string

  /** Duration before close. It will not automatically close if set 0 */
  duration?: number

  /** Whether to show a close button */
  showClose?: boolean

  /** Whether message is treated as HTML string */
  dangerouslyUseHTMLString?: boolean

  /** Callback function when closed */
  onClose?: () => void

  /** Callback function when notification clicked */
  onClick?: () => void

  /** Offset from the top edge of the screen. Every Notification instance of the same moment should have the same offset */
  offset?: number

  /** custom position */
  position?: NotificationPosition
}

export interface KuiNotification {
  /** Show a notification */
  (options: KuiNotificationOptions): KuiNotificationComponent

  /** Show a success notification */
  success (message: string | VNode): KuiNotificationComponent

  /** Show a success notification */
  success (options: KuiNotificationOptions): KuiNotificationComponent

  /** Show a warning notification */
  warning (message: string | VNode): KuiNotificationComponent

  /** Show a warning notification */
  warning (options: KuiNotificationOptions): KuiNotificationComponent

  /** Show an info notification */
  info (message: string | VNode): KuiNotificationComponent

  /** Show an info notification */
  info (options: KuiNotificationOptions): KuiNotificationComponent

  /** Show an error notification */
  error (message: string | VNode): KuiNotificationComponent

  /** Show an error notification */
  error (options: KuiNotificationOptions): KuiNotificationComponent
}

declare module 'vue/types/vue' {
  interface Vue {
    /** Displays a global notification message at the upper right corner of the page */
    $notify: KuiNotification
  }
}
