更酷的Console，更简单的输出方式，Enjoy it in Vue
Github: github.com/TaroXin/vue…

Table of content
老生常谈 Console
不如换种姿势？
vue-pretty-logger 做了什么
安装方式
开始使用
使用命令输出
Loader Option 配置项
Example
提交 Issues
Change Log
最新特性请关注 Change Log，添加了诸多支持，如需更多支持，请提交 Issues

老生常谈 Console
提起浏览器的 Console API，相比大家都觉得是老生常谈了，在我们刚开始学习前端到使用各种框架驰骋在前端界之间，Console 的使用频率从来不会很低，不管是通过 Console.log() 打印一条信息，还是 Console.error() 去输出错误信息，都不免接触到 Console

但是，有时候我会觉得 Console 很无趣，不管是原生的 API，还是网上封装的各种各样的库，都没有什么新意，永远在几个 API 之间徘徊，而vue-pretty-logger的出现就是打破 Console 的限制，谁指定 Console 就必须这样用？

vue-pretty-logger只让你有两点感受，酷，简单

不如换种姿势？
来看看 Console 是怎么使用的

let num = 123
console.log(num) // result -> 123
复制代码
其实不难理解，毕竟 Console 的 API 如此简单，网上有很多关于 Console 的具体使用方式，笔者在这里就不赘述了

再来看看 vue-pretty-logger

let num = 123 // {#}
// result -> 123
复制代码
如果你不理解做了什么，接下来我会详解，但是从表面上来讲，我们不必要去多写一句输出了，而且这种方式比较倾向于 Hack，所以使用起来会很酷

vue-pretty-logger 做了什么
vue-pretty-logger 将你原来需要多写的一句 console.log() 简化成了 // {#} 的写法，在 loader 执行期间，获得该注释，并转换为相应的 console 进行输出

简单来讲，vue-pretty-logger 做了你自己不想做的

有没有觉得突然世界都好玩了许多，OK，程序界惯例，我们来输出一只 Hello World

安装方式
你可以使用 npm or yarn 来安装 vue-pretty-logger，因为 logger 本身的性质就处于开发环境，所以你最好加上 -D or --dev 选项，这样在生产环境就不会打包此代码

npm install -D vue-pretty-logger
// or
yarn add --dev vue-pretty-logger
复制代码
请确认你下载的是最新版本，因为新功能的使用只在最新版本中存在

首先，你得知道一点，vue-pretty-logger 其实是一个 webpack loader, 也就是说，你只需要将它配置在 webpack 对于 .vue 文件的处理 loader 之中就可以了

...
module: {
    rules: [
        {
            test: /.vue$/,
            use: [
                {
                    'vue-loader'
                },
                {
                    'vue-pretty-logger',
                    options: {
                        ...
                    }
                }
            ]
        }
    
    ]
}
...
复制代码
需要注意的是，vue-pretty-logger 必须在 vue-loader 之前处理 .vue 文件, 所以，它必须处于 use 数组的最后一位

开始使用
接着，你就可以在你的 .vue 文件之中使用 vue-pretty-logger 了，如下

<template>
    <div></div>
</template>

<script>
    export default {
        mounted () {
            const str = 'Hello World' // {#} -e    
        }
    }
</script>
复制代码
Perfect，成功输出 Hello World，但是， -e，又代表什么意思呢，该命令指定了当前的输出级别是 error 级别，一会我们会看到更多的命令

我们来看看 vue-pretty-logger 具体可以应用到什么地方

变量赋值

let str = 'Hello World' // {#}
// equals: console.log(str)
str = 'Goodbye World' // {#}
// equals: console.log(str)
复制代码
函数声明

<script>
    export default {
        mounted () {
            
        }，
        methods: {
            testFunc (p1, p2) { // {#} -sign
                // equals: console.log(p1, p2)
            }
        }
    }
</script>
复制代码
函数调用

<script>
    export default {
        mounted () {
            this.testFunc(1, 'Hello') // {#} -stop -time
            // equals: const result = this.testFunc(1, 'Hello'); console.log(result)
        }，
        methods: {
            testFunc (p1, p2) { // {#} -i -t TestFunc
                
            }
        }
    }
</script>
复制代码
你可以为你的注释后面加上更多的命令来达成你的目的，当然前提是你懂得这些命令该怎么用

使用命令输出
输出级别命令有四个，-e -d -w -i，分别代表 console 的四个输出级别，error debug warn info，你可以在注释语句后面加指定的命令来输出指定的级别，如果你添加了多个级别命令，那么优先级为 -e > -d > -w > -i

其他命令如下

-t 你可以指定当前打印的使用应用什么 Tag 方便你去区分繁多的 Console 内容，-t TestFunc 将会为打印结果加上一个 TestFunc 的 tag，前提是该输出语句拥有级别命令中的任意一种，结果如下

// 调用该函数
this.testFunc('Hello', 'World')
复制代码
-i -t TestFunc
-sign 用来给输出的日志信息打上标记，比如上面的函数使用 -sign 之后的结果如下

// 调用该函数
this.testFunc('Hello', 'World') // {#} -sign
复制代码

-count 用来输出函数被调用的次数，同样，我们以 testFunc 来做实验，结果如下

// 调用该函数
this.testFunc('Hello', 'World') // {#} -count
复制代码

-time 用来记录函数执行所需要的时间，修改我们的函数调用，结果如下

// 调用该函数
this.testFunc('Hello', 'World') // {#} -time
复制代码

我们发现，控制台多打印了一行 undefined，来告诉我们方法的返回值，但是我们不需要这个信息，只需要获得方法的执行时间，那么就需要下面的命令

-stop 停止默认动作，结果如下

// 调用该函数
this.testFunc('Hello', 'World') // {#} -time -stop
复制代码

-profile 为你的函数添加一个 profile，相当于 console.profile() console.profileEnd()

// 调用该函数
this.testFunc('Hello', 'World') // {#} -time -stop -profile
复制代码
如果你不愿意用 // {#} 的方式来表示打印注释，或者想要设定一个全局的 tag，那么 Option 就派上用场了

Loader Option 配置项
hook 配置项，默认为 #, 修改 hook 就可以达到修改 // {#} 的目的，比如我想修改为 Log，那么需要指定 hook: 'Log'，结果如下

this.testFunc('Hello', 'World') // {Log} -time -stop
复制代码
tag 配置项，则是指定一个全局的 Tag，你可以这样修改，tag: 'PrettyLogger'

infoTag 配置项，指定 -i 输出时的前缀，默认为 INFO

infoTagStyle 配置项, 指定输出的样式，样式格式为 css 格式

error warn debug 的配置项与 info 一致

Example
你可以在 Github 仓库找到 example/，仓库地址为 github.com/TaroXin/vue…，如果你觉得vue-pretty-logger符合你的口味，那不妨点击一下 star，毕竟支持就是动力

提交 Issues
如果你在使用过程中碰到了任何的疑问，欢迎提交 Issues，你的建议将让 vue-pretty-logger 越来越完美，不过我们的发展方向只有一个，酷，简单

Change Log
欢迎提交 Issues，你的需求与问题都会逐步得到完成与修复

V0.9.0 查看Issues
// 添加对于 js 文件的支持，如下配置

{
    test: /\.js$/,
    use: ['babel-loader', 'vue-pretty-logger/lib/in-js'],
    exclude: /node_modules/
}
复制代码
V0.8.8 查看Issues
// 添加 -from 参数，如下使用

this.testFuncCall(p1, p2) // {#} -sign -from

// equals:
console.log(`p1: ${p1}, p2: ${p2}`)
const result = this.testFuncCall(p1, p2)
console.log(`result: ${result}`)
复制代码
V0.8.7 查看Issues
// 添加对于 await 语句的支持，处理方式与函数调用一致

await test() // {#} -e -sign -time
// equals: const result = await test(); console.error(`result: ${result}`)
复制代码
V0.8.6 查看Issues
// 支持回调函数的调用，输出回调函数参数

this.$bus.$on('gotData', (data) => { // {#} -i -sign
    // equals: console.info(`data: ${data}`)
})

this.$bus.$on('gotData', function (data) { // {#} -i -sign
    // equals: console.info(`data: ${data}`)
})

复制代码
V0.8.5 查看Issues
fix bug: Can not read property 'content' of null
复制代码
