import ResizeObserver from 'resize-observer-polyfill';

const isServer = typeof window === 'undefined';

/* istanbul ignore next */
const resizeHandler = function(entries) {
  for (let entry of entries) {
    const listeners = entry.target.__resizeListeners__ || [];
    if (listeners.length) {
      listeners.forEach(fn => {
        fn();
      });
    }
  }
};

/* istanbul ignore next */
export const addResizeListener = function(karman, fn) {
  if (isServer) return;
  if (!karman.__resizeListeners__) {
    karman.__resizeListeners__ = [];
    karman.__ro__ = new ResizeObserver(resizeHandler);
    karman.__ro__.observe(karman);
  }
  karman.__resizeListeners__.push(fn);
};

/* istanbul ignore next */
export const removeResizeListener = function(karman, fn) {
  if (!karman || !karman.__resizeListeners__) return;
  karman.__resizeListeners__.splice(karman.__resizeListeners__.indexOf(fn), 1);
  if (!karman.__resizeListeners__.length) {
    karman.__ro__.disconnect();
  }
};
