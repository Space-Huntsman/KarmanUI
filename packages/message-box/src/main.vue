<template>
  <transition name="msgbox-fade">
    <div
      class="kui-message-box__wrapper"
      tabindex="-1"
      v-show="visible"
      @click.self="handleWrapperClick"
      role="dialog"
      aria-modal="true"
      :aria-label="title || 'dialog'">
      <div class="kui-message-box" :class="[customClass, center && 'kui-message-box--center']">
        <div class="kui-message-box__header" v-if="title !== null">
          <div class="kui-message-box__title">
            <div
              :class="['kui-message-box__status', icon]"
              v-if="icon && center">
            </div>
            <span>{{ title }}</span>
          </div>
          <button
            type="button"
            class="kui-message-box__headerbtn"
            aria-label="Close"
            v-if="showClose"
            @click="handleAction(distinguishCancelAndClose ? 'close' : 'cancel')"
            @keydown.enter="handleAction(distinguishCancelAndClose ? 'close' : 'cancel')">
            <i class="kui-message-box__close kui-icon-close"></i>
          </button>
        </div>
        <div class="kui-message-box__content">
          <div class="kui-message-box__container">
            <div
              :class="['kui-message-box__status', icon]"
              v-if="icon && !center && message !== ''">
            </div>
            <div class="kui-message-box__message" v-if="message !== ''">
              <slot>
                <p v-if="!dangerouslyUseHTMLString">{{ message }}</p>
                <p v-else v-html="message"></p>
              </slot>
            </div>
          </div>
          <div class="kui-message-box__input" v-show="showInput">
            <kui-input
              v-model="inputValue"
              :type="inputType"
              @keydown.enter.native="handleInputEnter"
              :placeholder="inputPlaceholder"
              ref="input"></kui-input>
            <div class="kui-message-box__errormsg" :style="{ visibility: !!editorErrorMessage ? 'visible' : 'hidden' }">{{ editorErrorMessage }}</div>
          </div>
        </div>
        <div class="kui-message-box__btns">
          <kui-button
            :loading="cancelButtonLoading"
            :class="[ cancelButtonClasses ]"
            v-if="showCancelButton"
            :round="roundButton"
            size="small"
            @click.native="handleAction('cancel')"
            @keydown.enter="handleAction('cancel')">
            {{ cancelButtonText || t('lang.messagebox.cancel') }}
          </kui-button>
          <kui-button
            :loading="confirmButtonLoading"
            ref="confirm"
            :class="[ confirmButtonClasses ]"
            v-show="showConfirmButton"
            :round="roundButton"
            size="small"
            @click.native="handleAction('confirm')"
            @keydown.enter="handleAction('confirm')">
            {{ confirmButtonText || t('lang.messagebox.confirm') }}
          </kui-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
  import Popup from 'karman-ui/src/utils/popup';
  import Locale from 'karman-ui/src/mixins/locale';
  import KuiInput from 'karman-ui/packages/input';
  import KuiButton from 'karman-ui/packages/button';
  import { addClass, removeClass } from 'karman-ui/src/utils/dom';
  import { t } from 'karman-ui/src/locale';
  import Dialog from 'karman-ui/src/utils/aria-dialog';

  let messageBox;
  let typeMap = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error'
  };

  export default {
    mixins: [Popup, Locale],

    props: {
      modal: {
        default: true
      },
      lockScroll: {
        default: true
      },
      showClose: {
        type: Boolean,
        default: true
      },
      closeOnClickModal: {
        default: true
      },
      closeOnPressEscape: {
        default: true
      },
      closeOnHashChange: {
        default: true
      },
      center: {
        default: false,
        type: Boolean
      },
      roundButton: {
        default: false,
        type: Boolean
      }
    },

    components: {
      KuiInput,
      KuiButton
    },

    computed: {
      icon() {
        const { type, iconClass } = this;
        return iconClass || (type && typeMap[type] ? `kui-icon-${ typeMap[type] }` : '');
      },

      confirmButtonClasses() {
        return `kui-button--primary ${ this.confirmButtonClass }`;
      },
      cancelButtonClasses() {
        return `${ this.cancelButtonClass }`;
      }
    },

    methods: {
      getSafeClose() {
        const currentId = this.uid;
        return () => {
          this.$nextTick(() => {
            if (currentId === this.uid) this.doClose();
          });
        };
      },
      doClose() {
        if (!this.visible) return;
        this.visible = false;
        this._closing = true;

        this.onClose && this.onClose();
        messageBox.closeDialog(); // 解绑
        if (this.lockScroll) {
          setTimeout(this.restoreBodyStyle, 200);
        }
        this.opened = false;
        this.doAfterClose();
        setTimeout(() => {
          if (this.action) this.callback(this.action, this);
        });
      },

      handleWrapperClick() {
        if (this.closeOnClickModal) {
          this.handleAction(this.distinguishCancelAndClose ? 'close' : 'cancel');
        }
      },

      handleInputEnter() {
        if (this.inputType !== 'textarea') {
          return this.handleAction('confirm');
        }
      },

      handleAction(action) {
        if (this.$type === 'prompt' && action === 'confirm' && !this.validate()) {
          return;
        }
        this.action = action;
        if (typeof this.beforeClose === 'function') {
          this.close = this.getSafeClose();
          this.beforeClose(action, this, this.close);
        } else {
          this.doClose();
        }
      },

      validate() {
        if (this.$type === 'prompt') {
          const inputPattern = this.inputPattern;
          if (inputPattern && !inputPattern.test(this.inputValue || '')) {
            this.editorErrorMessage = this.inputErrorMessage || t('lang.messagebox.error');
            addClass(this.getInputKarman(), 'invalid');
            return false;
          }
          const inputValidator = this.inputValidator;
          if (typeof inputValidator === 'function') {
            const validateResult = inputValidator(this.inputValue);
            if (validateResult === false) {
              this.editorErrorMessage = this.inputErrorMessage || t('lang.messagebox.error');
              addClass(this.getInputKarman(), 'invalid');
              return false;
            }
            if (typeof validateResult === 'string') {
              this.editorErrorMessage = validateResult;
              addClass(this.getInputKarman(), 'invalid');
              return false;
            }
          }
        }
        this.editorErrorMessage = '';
        removeClass(this.getInputKarman(), 'invalid');
        return true;
      },
      getFirstFocus() {
        const btn = this.$el.querySelector('.kui-message-box__btns .kui-button');
        const title = this.$el.querySelector('.kui-message-box__btns .kui-message-box__title');
        return btn || title;
      },
      getInputKarman() {
        const inputRefs = this.$refs.input.$refs;
        return inputRefs.input || inputRefs.textarea;
      },
      handleClose() {
        this.handleAction('close');
      }
    },

    watch: {
      inputValue: {
        immediate: true,
        handler(val) {
          this.$nextTick(_ => {
            if (this.$type === 'prompt' && val !== null) {
              this.validate();
            }
          });
        }
      },

      visible(val) {
        if (val) {
          this.uid++;
          if (this.$type === 'alert' || this.$type === 'confirm') {
            this.$nextTick(() => {
              this.$refs.confirm.$el.focus();
            });
          }
          this.focusAfterClosed = document.activeKarman;
          messageBox = new Dialog(this.$el, this.focusAfterClosed, this.getFirstFocus());
        }

        // prompt
        if (this.$type !== 'prompt') return;
        if (val) {
          setTimeout(() => {
            if (this.$refs.input && this.$refs.input.$el) {
              this.getInputKarman().focus();
            }
          }, 500);
        } else {
          this.editorErrorMessage = '';
          removeClass(this.getInputKarman(), 'invalid');
        }
      }
    },

    mounted() {
      this.$nextTick(() => {
        if (this.closeOnHashChange) {
          window.addEventListener('hashchange', this.close);
        }
      });
    },

    beforeDestroy() {
      if (this.closeOnHashChange) {
        window.removeEventListener('hashchange', this.close);
      }
      setTimeout(() => {
        messageBox.closeDialog();
      });
    },

    data() {
      return {
        uid: 1,
        title: undefined,
        message: '',
        type: '',
        iconClass: '',
        customClass: '',
        showInput: false,
        inputValue: null,
        inputPlaceholder: '',
        inputType: 'text',
        inputPattern: null,
        inputValidator: null,
        inputErrorMessage: '',
        showConfirmButton: true,
        showCancelButton: false,
        action: '',
        confirmButtonText: '',
        cancelButtonText: '',
        confirmButtonLoading: false,
        cancelButtonLoading: false,
        confirmButtonClass: '',
        confirmButtonDisabled: false,
        cancelButtonClass: '',
        editorErrorMessage: null,
        callback: null,
        dangerouslyUseHTMLString: false,
        focusAfterClosed: null,
        isOnComposition: false,
        distinguishCancelAndClose: false
      };
    }
  };
</script>
