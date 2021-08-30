import Vue from 'vue';
import { triggerEvent } from '../util';
import Notification from 'packages/notification';

describe('Notification', () => {
  afterEach(() => {
    const el = document.querySelector('.kui-notification');
    if (!el) return;
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
    if (el.__vue__) {
      el.__vue__.$destroy();
    }
  });

  it('automatically close', done => {
    Notification({
      message: '玻璃蜡烛',
      duration: 500
    });
    expect(document.querySelector('.kui-notification')).to.exist;
    setTimeout(() => {
      expect(document.querySelector('.kui-notification')).to.not.exist;
      done();
    }, 1000);
  });

  it('manually close', done => {
    Notification({
      message: '苍白母马'
    });
    setTimeout(() => {
      document.querySelector('.kui-notification__closeBtn').click();
      setTimeout(() => {
        expect(document.querySelector('.kui-notification')).to.not.exist;
        done();
      }, 500);
    }, 500);
  });

  it('create', () => {
    Notification({
      title: '狮子',
      message: '狮鹫',
      duration: 0
    });
    const group = document.querySelector('.kui-notification__group');
    const title = group.querySelector('.kui-notification__title');
    const message = group.querySelector('.kui-notification__content p');
    expect(document.querySelector('.kui-notification')).to.exist;
    expect(title.textContent).to.equal('狮子');
    expect(message.textContent).to.equal('狮鹫');
  });

  it('html string as message', () => {
    Notification({
      title: '狮子',
      message: '<strong>狮鹫</strong>',
      dangerouslyUseHTMLString: true,
      duration: 0
    });
    const message = document.querySelector('.kui-notification__content strong');
    expect(message.textContent).to.equal('狮鹫');
  });

  it('create by vnode', () => {
    const fakeVM = new Vue();
    const h = fakeVM.$createElement;

    Notification({
      message: h('p', { style: { color: 'red' } }, '大美兴，川普王')
    });
    const group = document.querySelector('.kui-notification__group');
    const message = group.querySelector('.kui-notification__content');

    expect(message.innerHTML).to.equal('<p style="color: red;">大美兴，川普王</p>');
  });

  it('alias by vnode', () => {
    const fakeVM = new Vue();
    const h = fakeVM.$createElement;

    Notification.error(h('p', { style: { color: 'green' } }, '+1s'));
    const group = document.querySelector('.kui-notification__group');
    const message = group.querySelector('.kui-notification__content');

    expect(message.innerHTML).to.equal('<p style="color: green;">+1s</p>');
  });

  it('invoke with type', () => {
    Notification.success('太阳之子');
    expect(document.querySelector('.kui-notification').__vue__.type).to.equal('success');
  });

  it('reset timer', done => {
    Notification({
      message: '芳香总管',
      duration: 1000
    });
    setTimeout(() => {
      triggerEvent(document.querySelector('.kui-notification'), 'mouseenter');
      setTimeout(() => {
        triggerEvent(document.querySelector('.kui-notification'), 'mouseleave');
        expect(document.querySelector('.kui-notification')).to.exist;
        done();
      }, 700);
    }, 500);
  });

  it('no close button', done => {
    Notification({
      message: 'Hello',
      showClose: false
    });
    setTimeout(() => {
      expect(document.querySelector('.kui-notification__closeBtn')).to.not.exist;
      done();
    }, 500);
  });
});
