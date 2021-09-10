<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/shades-of-purple.min.css">
    <title>Karman - The world's most popular Vue UI framework</title>
    <meta name="description" content="Karman，基于 Vue 2.x 开发的高质量桌面端UI组件库，是首个提供航天工程类UI组件库"/>
</head>
<body>
<script>
  if (!window.Promise) {
    document.write('<script src="//cdn.jsdelivr.net/npm/es6-promise@4.1.1/dist/es6-promise.min.js"><\/script><script>ES6Promise.polyfill()<\/script>');
  }
</script>
<div id="app"></div>
<% if (process.env.NODE_ENV === 'production') { %>
<script src="//shadow.elemecdn.com/npm/vue@2.5.21/dist/vue.runtime.min.js"></script>
<script src="//shadow.elemecdn.com/npm/vue-router@3.0.1/dist/vue-router.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/highlight.min.js"></script>
<% } %>
</body>
<% if (process.env.NODE_ENV === 'production') { %>
<script>
  var ga = function() {
    console.log(arguments);
  };
  ga('create', 'UA-84335471-1', 'auto');
  ga('send', 'pageview');

  window.addEventListener('hashchange', function() {
    ga('set', 'page', window.location.href);
    ga('send', 'pageview');
  });
</script>
<% } %>

</html>
