import Clipboard from 'clipboard';
import VConsole from 'vconsole';

import './style.scss';

document.body.contentEditable = true;
class aQuery {
  constructor(selector) {
    this.doc = document;
    this.selector = this.doc.querySelectorAll(selector);
  }
  each(agrs) {
    for (let i = 0; i < this.selector.length; i += 1) {
      if (agrs.call(this.selector, i, this.selector[i]) === false) {
        break;
      }
    }
    return this;
  }
  on(type, fn) {
    const _this = this;
    // const type = typ.split(' ');
    this.each((i, v) => {
      if (window.addEventListener) {
        _this.selector[i].addEventListener(type, fn);
      } else {
        _this.selector[i].attachEvent(`on${type}`, fn);
      }
    });
    return this;
  }
}

const search = (name) => {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
  const r = window.location.search.substr(1).match(reg);
  if (r !== null) return unescape(r[2]);
  return null;
};

window.onload = () => {
  const wxhDom = document.getElementById('wxh');
  const markBox = document.getElementById('markBox');
  const appDom = document.getElementById('app');
  const wxhs = search('wxh');

  if (wxhs) wxhDom.innerHTML = wxhs;

  // 粘贴事件绑定
  const clipboard = new Clipboard('.wxbtn', {
    text() {
      return wxhs || wxhDom.innerHTML;
    },
  });
  clipboard.on('success', (e) => {
    e.clearSelection();
  });
  clipboard.on('error', (err) => {
    console.log(err);
  });

  const markHide = () => {
    markBox.className = 'mask animated fadeOut';
    appDom.style.overflowY = 'scroll';
    setTimeout(() => {
      markBox.style.display = 'none';
    }, 1000);
  };

  new aQuery('.wxbtn').on('click', () => {
    markBox.style.display = 'block';
    markBox.className = 'mask animated fadeIn';
    appDom.style.overflowY = 'hidden';
  });

  new aQuery('#markBox').on('click', () => {
    markHide();
  });

  new aQuery('#goToWx').on('click', () => {
    location.href = 'weixin://';
  });

  const vConsole = new VConsole();
  // vConsole.setOption('maxLogNumber', 5000);
  // 或者：
  vConsole.setOption({ maxLogNumber: 5000 });
  console.log('Hello World');
  console.log('foo'); // 白底黑字
  console.info('bar'); // 白底紫字
  console.debug('oh'); // 白底黄字
  console.warn('foo'); // 黄底黄字
  console.error('bar'); // 红底红字
  const obj = {};
  obj.foo = 'bar';
  console.log(obj);

  // 公共属性及方法 vConsole 提供一些公共属性字段、函数方法，以便开发插件
  // vConsole.version  // => "3.1.0"
  // vConsole.option

  // vConsole.activedTab // 当前激活的 tab 的 plugin id
  // vConsole.tabList // => ["default", "system"]
  // vConsole.$dom // vConsole 的 HTML element。

  // vConsole.destroy(); // 析构一个 vConsole 对象实例，并将 vConsole 面板从页面中移除。
  // vConsole.addPlugin(plugin); // 添加一个新插件。重名的插件会被忽略。
  // const myPlugin = new VConsolePlugin('my_plugin', 'My Plugin');
  // vConsole.addPlugin(myPlugin);

  // vConsole.showSwitch(); // 显示 vConsole 的开关按钮
  // vConsole.hideSwitch(); // 隐藏 vConsole 的开关按钮
  // 隐藏后，用户将无法手动唤起 vConsole 面板。因此按钮或面板必须通过 vConsole.showSwitch() 或 vConsole.show() 来展示出来。
};
