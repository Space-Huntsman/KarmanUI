import Vue from 'vue'

/** KarmanUI component common definition */
export declare class KarmanUIComponent extends Vue {
  /** Install component into Vue */
  static install (vue: typeof Vue): void
}

/** Component size definition for button, input, etc */
export type KarmanUIComponentSize = 'large' | 'medium' | 'small' | 'mini'

/** Horizontal alignment */
export type KarmanUIHorizontalAlignment = 'left' | 'center' | 'right'
