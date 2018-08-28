
通过CDN使用：
<script src="//cdn.bootcss.com/eruda/1.4.2/eruda.min.js"></script>
<script>eruda.init();</script>

通过npm安装：
npm install eruda --save

在页面中加载脚本：
```html
<script src="//cdn.jsdelivr.net/npm/eruda"></script>
<script>eruda.init();</script>
```

* Js文件对于移动端来说略重（gzip后大概100kb）。建议通过url参数来控制是否加载调试器，比如：
```javascript
;(function () {
    var src = 'node_modules/eruda/eruda.min.js';
    if (!/eruda=true/.test(window.location) && localStorage.getItem('active-eruda') != 'true') return;
    document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
    document.write('<scr' + 'ipt>eruda.init();</scr' + 'ipt>');
})();
```

按钮拖拽，面板透明度大小设置。

Console面板：捕获Console日志，支持log、error、info、warn、dir、time/timeEnd、clear、count、assert、table；支持占位符，包括%c自定义样式输出；支持按日志类型及正则表达式过滤；支持快捷命令加载underscore、jQuery库；支持JavaScript脚本执行。

Elements面板：查看标签内容及属性；查看应用在Dom上的样式；支持页面元素高亮；支持屏幕直接点击选取；查看Dom上绑定的各类事件。

Network面板：捕获请求，查看发送数据、返回头、返回内容等信息。

Resources面板：查看并清除localStorage、sessionStorage及cookie；查看页面加载脚本及样式文件；查看页面加载图片。

Sources面板：查看页面源码；格式化html，css，js代码及json数据。

Info面板：输出URL及User Agent；支持自定义输出内容。

Snippets面板：页面元素添加边框；加时间戳刷新页面；支持自定义代码片段。