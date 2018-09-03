
**技术栈**

* webpack2.0
* es6
* scss
* postcss

**项目配置项**
``` bash
# 项目初始化
yarn
npm install
# 项目启动
yarn start / yarn run dev
npm start / npm run dev

# 项目发布
yarn run build
npm run build
```

http://www.css88.com/archives/9336  （JavaScript 中有用的 Array 和 Object 方法）


http://www.css88.com/archives/9507  （使用顶级 VSCode 扩展来加快开发 JavaScript）

http://www.css88.com/archives/9247（10 个更专业的 Javascript 调试技巧 – 使用 console）

http://www.css88.com/archives/8748 （精心收集的 95 个超实用的 JavaScript 代码片段（ ES6+ 编写））


19+ JavaScript 编码简写技巧
http://www.css88.com/archives/8728   

**命名规范**

- 文件名：
单词用‘-’隔开，如：customer-service
**(文件名中严禁出现大写字字母和下划线)**

- 变量名：
使用小驼峰命名，如：customerService


<!-- 调试工具demo -->
1、eruda: https://github.com/liriliri/eruda   demo: https://eruda.liriliri.io/
2、vConsole: https://github.com/Tencent/vConsole   demo: http://wechatfe.github.io/vconsole/demo.html
3、vue-pretty-logger: https://github.com/TaroXin/vue-pretty-logger   doc: https://juejin.im/post/5aef271c51882506a36c69a7
4、signale: https://github.com/klauscfhq/signale   doc: https://github.com/klauscfhq/signale/blob/master/docs/readme.zh_CN.md


<!-- 数据模拟 -->
mock.js:  http://mockjs.com/0.1/


<!-- 手绘UI插件 -->
wired-elements:  https://github.com/wiredjs/wired-elements


<!-- 代码测试 -->
Vue test utils: https://vue-test-utils.vuejs.org/zh/
ava: https://github.com/avajs/ava    doc: https://github.com/avajs/ava-docs/blob/master/zh_CN/readme.md
JavaScript代码覆盖率工具 Istanbul入门:  https://github.com/iuap-design/blog/issues/100


AlloyLever
https://github.com/AlloyTeam/AlloyLever#%E4%B8%AD%E6%96%87--english



http://jinlong.github.io/2013/08/29/devtoolsecrets/ （浏览器开发工具的秘密）


微信调试，各种WebView样式调试、手机浏览器的页面真机调试。便捷的远程调试手机页面、抓包工具，支持：HTTP/HTTPS，无需USB连接设备
https://github.com/wuchangming/spy-debugger

sudo npm install spy-debugger -g

第一步：手机和PC保持在同一网络下（比如同时连到一个Wi-Fi下）

第二步：命令行输入spy-debugger，按命令行提示用浏览器打开相应地址。

第三步：设置手机的HTTP代理，代理IP地址设置为PC的IP地址，端口为spy-debugger的启动端口(默认端口：9888)。

Android设置代理步骤：设置 - WLAN - 长按选中网络 - 修改网络 - 高级 - 代理设置 - 手动
iOS设置代理步骤：设置 - 无线局域网 - 选中网络 - HTTP代理手动
第四步：手机安装证书。注：手机必须先设置完代理后再通过(非微信)手机浏览器访问http://s.xxx(地址二维码)安装证书（手机首次调试需要安装证书，已安装了证书的手机无需重复安装)。问题：iOS 10.3.1以上版本证书安装问题  
<https://github.com/wuchangming/spy-debugger/blob/master/demo/img/QRCodeForCert.png>
<https://github.com/wuchangming/spy-debugger/issues/42>

第五步：用手机浏览器访问你要调试的页面即可。

自定义选项
端口
(默认端口：9888)

spy-debugger -p 8888
设置外部代理（默认使用AnyProxy）
spy-debugger -e http://127.0.0.1:8888
spy-debugger内置AnyProxy提供抓包功能，但是也可通过设置外部代理和其它抓包代理工具一起使用，如：Charles、Fiddler。

设置页面内容为可编辑模式
该功能使页面内容修改更加直观方便。 (默认： false)

spy-debugger -w true
内部实现原理：在需要调试的页面内注入代码：document.body.contentEditable=true。暂不支持使用了iscroll框架的页面。

是否允许weinre监控iframe加载的页面
(默认： false)

spy-debugger -i true
是否只拦截浏览器发起的https请求
(默认： true)

spy-debugger -b false
有些浏览器发出的connect请求没有正确的携带userAgent，这个判断有时候会出错，如UC浏览器。这个时候需要设置为false。大多数情况建议启用默认配置：true，由于目前大量App应用自身（非WebView）发出的请求会使用到SSL pinning技术，自定义的证书将不能通过app的证书校验。

是否允许HTTP缓存
(默认： false)

spy-debugger -c true


