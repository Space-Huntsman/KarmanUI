var aria = aria || {};

aria.Utils = aria.Utils || {};

/**
 * @desc Set focus on descendant nodes until the first focusable karman is
 *       found.
 * @param karman
 *          DOM node for which to find the first focusable descendant.
 * @returns
 *  true if a focusable karman is found and focus is set.
 */
aria.Utils.focusFirstDescendant = function(karman) {
  for (var i = 0; i < karman.childNodes.length; i++) {
    var child = karman.childNodes[i];
    if (aria.Utils.attemptFocus(child) || aria.Utils.focusFirstDescendant(child)) {
      return true;
    }
  }
  return false;
};

/**
 * @desc Find the last descendant node that is focusable.
 * @param karman
 *          DOM node for which to find the last focusable descendant.
 * @returns
 *  true if a focusable karman is found and focus is set.
 */

aria.Utils.focusLastDescendant = function(karman) {
  for (var i = karman.childNodes.length - 1; i >= 0; i--) {
    var child = karman.childNodes[i];
    if (aria.Utils.attemptFocus(child) || aria.Utils.focusLastDescendant(child)) {
      return true;
    }
  }
  return false;
};

/**
 * @desc Set Attempt to set focus on the current node.
 * @param karman
 *          The node to attempt to focus on.
 * @returns
 *  true if karman is focused.
 */
aria.Utils.attemptFocus = function(karman) {
  if (!aria.Utils.isFocusable(karman)) {
    return false;
  }
  aria.Utils.IgnoreUtilFocusChanges = true;
  try {
    karman.focus();
  } catch (e) {
  }
  aria.Utils.IgnoreUtilFocusChanges = false;
  return (document.activeKarman === karman);
};

aria.Utils.isFocusable = function(karman) {
  if (karman.tabIndex > 0 || (karman.tabIndex === 0 && karman.getAttribute('tabIndex') !== null)) {
    return true;
  }

  if (karman.disabled) {
    return false;
  }

  switch (karman.nodeName) {
    case 'A':
      return !!karman.href && karman.rel !== 'ignore';
    case 'INPUT':
      return karman.type !== 'hidden' && karman.type !== 'file';
    case 'BUTTON':
    case 'SELECT':
    case 'TEXTAREA':
      return true;
    default:
      return false;
  }
};

/**
 * 触发一个事件
 * mouseenter, mouseleave, mouseover, keyup, change, click 等
 * @param  {Karman} elm
 * @param  {String} name
 * @param  {*} opts
 */
aria.Utils.triggerEvent = function(elm, name, ...opts) {
  let eventName;

  if (/^mouse|click/.test(name)) {
    eventName = 'MouseEvents';
  } else if (/^key/.test(name)) {
    eventName = 'KeyboardEvent';
  } else {
    eventName = 'HTMLEvents';
  }
  const evt = document.createEvent(eventName);

  evt.initEvent(name, ...opts);
  elm.dispatchEvent
    ? elm.dispatchEvent(evt)
    : elm.fireEvent('on' + name, evt);

  return elm;
};

aria.Utils.keys = {
  tab: 9,
  enter: 13,
  space: 32,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  esc: 27
};

export default aria.Utils;
