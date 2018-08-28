import Vue from 'vue';

import Tpl from './tpl.vue';

new Vue({
  el: '#app',
  components: {
    Tpl,
  },
  mounted() {
    const a = 123; // {#}
    const test = 'Test'; // {#}

    let str = 'Hello World'; // {#}
    // equals: console.log(str)
    str = 'Goodbye World'; // {#}
    // equals: console.log(str)

    console.log(a + test + str);
    // -time 用来记录函数执行所需要的时间，修改我们的函数调用，结果如下
    // -stop 停止默认动作
    this.testFunc2(1, 2); // {#} -stop -time
    // -sign 用来给输出的日志信息打上标记
    this.init('debug'); // {#} -sign
    // -count 用来输出函数被调用的次数
    this.testFunc2('Hello', 'World'); // {#} -count
    // -profile 为你的函数添加一个 profile，相当于 console.profile() console.profileEnd()
    this.testFunc('Hello', 'World'); // {#} -time -stop -profile
  },
  methods: {
    // -t 你可以指定当前打印的使用应用什么 Tag 方便你去区分繁多的 Console 内容
    init(db) { // {#} -i -t init
      // 输出级别命令有四个，-e -d -w -i，分别代表 console 的四个输出级别，error debug warn info，
      // 你可以在注释语句后面加指定的命令来输出指定的级别，如果你添加了多个级别命令，那么优先级为 -e > -d > -w > -i
      // -t 你可以指定当前打印的使用应用什么 Tag 方便你去区分繁多的 Console 内容
      const error = 'error'; // {#} -e
      const dbug = db; // {#} -d
      const warn = 'warn'; // {#} -w
      const info = 'info'; // {#} -i
      return dbug;
    },
    testFunc(p1, p2) { // {#} -sign
      // equals: console.log(p1, p2)
    },
    testFunc2(p1, p2) { // {#} -i -t TestFunc
      // equals: console.log(p1, p2)
    },
  }
});
