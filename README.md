# Vue

A repo of learning Vue

**学习视频：**

- [最全最新 Vue、Vuejs 教程，从入门到精通](https://www.bilibili.com/video/BV15741177Eh?p=2&spm_id_from=pageDriver)

**学习进度：**

| **学习内容**                                                                                | **更新时间**             | **备注**               |
| ------------------------------------------------------------------------------------------- | ------------------------ | ---------------------- |
| [Vue 介绍]                                                                                  | 2021-06-05               | P1 -- P20              |
| [Vue 指令]                                                                                  | 2021-06-06               | P21 -- P27             |
| [Vue 方法绑定]                                                                              | 2021-06-08               | P28 -- P33             |
| [准备面试]                                                                                  | 2021-06-08 -- 2021-06-16 | 准备阿里面试暂停学习   |
| [Vue 高级函数]                                                                              | 2021-06-16               | P34 -- P45             |
| [Vue 阶段知识总结](https://www.bilibili.com/video/BV15741177Eh?p=63&spm_id_from=pageDriver) | 2021-06-17               | P46 -- P63             |
| [Vue 组件化]                                                                                | 2021-06-18               | P64 -- P70             |
| [Vue 模块化 webpack]                                                                        | 2021-06-19               | P70 -- P84             |
| [Vue 脚手架]                                                                                | 2021-06-20               | P85 -- P96             |
| [Vue 路由]                                                                                  | 2021-06-22               | P97 -- P100            |
| [准备驾考]                                                                                  | 2021-06-21 -- 2021-06-25 | 准备驾考(拿到驾照了:D) |
| [url 的 hash 和 html 的 history]                                                            | 2021-06-25               | P101 -- P103           |
| [Vue 路由使用]                                                                              | 2021-06-26               | P104 -- P103           |

## Vue 基础

**1. 插值操作**
v-for, v-on:click(...), v-once(只渲染一次), v-html(解析 html 代码)，v-text(代替 mustache 语法),v-pre(不解析渲染), v-cloak(防止原生 DOM 属性渲染),
v-show 与 v-if 的区别：
v-if：当条件为 false 时，v-if 的元素根本不会在 DOM 中
v-show：当条件为 false 时，v-show 的元素在 DOM 中只是加了 display：none

v-for: 遍历数组对象

v-bind(img v-bind:src=""绑定动态属性)
简写 `<img :src="">` 同 `<img v-bind:src="">`

**2. 绑定对象**

`<h1 :class="{active: true, line: false}"> 可以用data数据替换boolean达到控制变量`

**3. 绑定数组**

```
<h1 :class="['active','line']">  字符串
<h1 :class="[active,line]">   变量
```

同等与 `<h1 class="active line">`

**4. 计算属性**
computed : 用于合并属性,计算属性(比如商品总价格)

**5. Event 绑定**

`<h1 @click="btnClick(a, $event)"> $是拿event属性`

**6. 修饰符**
@click.stop 阻止冒泡
@.prevent 阻止默认 等同 react event.preventDefault()
@keyup.enter 只有 enter 才能输出
@.once 只触发一次
@.native 可以让父组件接收到原生事件, 否则只能接收自定义事件
1.native 修饰符只能用在组件上, 不能用在原生标签上
2.$listeners 不包含有 native 修饰符的事件

**7. 条件判断**

```
<div id="app"> //复杂不要用这个 去compute里写逻辑语句
  <p v-if ="score>=90">Excellent</p>
  <p v-if-else ="90>=score>=80">Good</p>
  <p v-if-else ="score>=90">Not Bad</p>
  <p v-else ="score<=60">Failure</p>
</div>
```

**8. 虚拟 DOM 和 DIFF 算法**
DIFF 算法查 React 笔记

**9. 高级函数**

1. filter: 必须返回一个 boolean，true 加入新数组 false pass 掉

2. map：

3. reduce

**10. 双向绑定**

```
<input type="text" v-model="message"> //等于下面
<input type="text" :value="message" @input="message = $event.target.value">
```

v-model 结合 radio 类型

```
<input type="radio" id="female" name="sex" value="女"> //如果需要互斥选项，需要绑定同一组 name 名
<input type="radio" id="male" name="sex" value="男">

<input type="radio" id="female" value="女" v-model="sex"> //如果有 v-model，绑定同一组 name 名可以省略
<input type="radio" id="male"  value="男" v-model="sex">
```

v-model 结合 checkbox 类型
单选框对应的是 boolean
多选框对应的是数组

v-model 结合 select 类型
在 select tag 中绑定 v-model
单选框对应的是 string
多选框对应的是数组 multiple 属性 tag

**11. 值绑定**

```
<label v-for="item in originHobbies" :for="item">
<input type="checkbox" :value="item" :id="item" v-model="hobbies">{{item}}
</label>
```

**12. V-model 修饰符**
`<input type="text" v-model.lazy="message"> //失去焦点或者按回车才会更新 类似防抖`
.number
.trim

**13. Vue 组件**
局部组件和全局组件： 一般使用局部组件
父子组件

组件 data 必须是函数，而且返回一个对象

**14. Vue 组件父子通讯**
父传子
props

子传父
$emit() 自定义事件 @-XXXX

**15. 父子对象的访问方式**
父组件访问子组件: $children
$refs
`<cpn ref="aaa"></cpn>`
$refs会加入一个aaa的属性
$refs.aaa.XXX 就能直接拿到对应的 cpn

子组件访问父组件: $parent
子组件中使用: this.$parent 访问父组件内容(用得很少)
访问根组件 $root

**16. 插槽 slot**
组件插槽: 更加具有扩展性

1. 插槽的基本使用<slot></slot>
2. 插槽的默认值<slot>button</slot> 没有传插槽会显示默认值
3. 如果有多个值，同时放入到组件中进行替换时，一起作为替换元素

具名插槽
slot 加名字
v-slot

插槽作用域

**17. 模块化开发**
export modules

**18. Webpack**
webpack 是一个现代化 javascript 应用的静态模块化打包工具

gulp 和 webpack 区别: gulp 强调的是前端流程自动化，模块化不是核心
webpack 更加强调模块化开发管理。文件压缩合并，预处理

webpack 笔记 去 git repo webpack-rollup 找

runtime-only 代码中不可以有任何 template 挂载实例的#app 中含有 vue 的 template
runtime-complier 可以有 template 可编译

**19. el 和 template 区别**
el 挂在 id=app 的代码块
template 会替换掉 el 的代码块

### runtime-compiler VS runtime-only

runtime-compiler(v1)
template -> ast -> render ->vdom -> UI

runtime-only(v2) 性能更高 代码量更少 不能编译 template
render -> vdom -> UI

webpack 中配置了
vue-template-compiler 解析了所有 vue 文件里的 template 转成 render 函数了
所以不需要使用 runtime-compiler 了

**20. Vue 生命周期钩子**
![lifecycle](I:/CodingPractice/Vue/Vue基础/asset/lifecycle.png)

1. 创建期间生命周期函数
   new Vue() 创建一个 Vue 的实例对象
   init Event& Lifecycle 表示刚刚初始化了一个 Vue 的实例对象。只有初始的一些函数

   1. beforeCreate() 第一个生命周期函数，表示实例完全被创建之前会执行它 它与 data el 等实例函数平级，拿不到初始数据，都还没被初始化
   2. create() 第二个生命周期函数, 初始化完成 可以拿到初始 method 和数据
   3. beforeMount() 在挂在之前 类似 ComponentWillMount()

2. 运行期间生命周期函数

   1. mounted()把组件挂在在 dom 上回调 mounted. 类似 componentDidMount()
   2. beforeUpdate() 数据界面刷新之前 VDOM re-render。调用 diff 算法
   3. updated()只要是数据改变界面刷新完成，回调 updated, 类似 componentDidUpdate()

3. 销毁期间的生命周期函数
   1. beforeDestroy() 销毁组件之前 类似 componentWillUnmount();
   2. destroyed() 销毁组件

**21. 前后端渲染**

1. jsp: java server page
   后端渲染：使用 jsp 每个页面都在服务端渲染好 html+css+java 的网页

2. 后端路由阶段
   后端处理 URL 和页面之间的映射关系
   阶段：服务器渲染好对应的 html 页面，返回给客户端进行渲染
   URL 会发送到服务器，通过正则匹配交给 controller 进行处理
   Controller 处理生成 HTML 返还给前端

3. 前后端分离
   后端只负责提供数据，不负责任何内容
   静态资源服务器，API 接口服务器。有时候会合在一起。
   前端渲染: 由 js 在浏览器中执行渲染

4. 前端路由阶段
   单页面富应用阶段： SPA 在前后端基础上加了一层路由
   整个网页是一个页面

**22. URL 的 hash 和 HTML5 的 history**

1. hash = "#/..."
   `location.hash=''`可以改变 hash，同时不刷新页面
   `location.href=''`超链接，会刷新页面

2. history

```
history.pushState({},'',"/user")
history.replaceState()
history.go()
history.forward()
history.back()
```

**23. Vue 路由的使用**

1. router-link 和 router-view

```
<router-link> 会渲染成a 和React中<Link>同理
<router-view> 渲染位置

<div id="app">
    <router-link to="/home" tag="button" replace>Home</router-link>
    <router-link to="/about" tag="button">About</router-link>
    <router-view></router-view>
  </div>
```

2. $router 和 $route 区别

$router 是 VueRouter routes[]的映射(路由器)

```
 export default {
    name: 'App',
    data(){
      return{
        userId:'list'
      }
    },
    methods:{
      homeClick(){
        this.$router.push('/home')
      },
      aboutClick(){
        this.$router.replace('/about')
      }
    }
  }
```

$route 是 当前 route 路径的映射(路由)

```
export default {
  name:'User',
  computed:{
    userId(){
      return this.$route
    }
  }
}
```

3. Vue 懒加载
   类似于 React 懒加载
   将路由对应的组件打包成一个个 js 代码块，访问到时才加载对应组件

ES6 懒加载写法

```
const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')
```

4. Vue 嵌套路由
   使用 children 然后在对应组件中配置 link 和 view

```
 {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '',
        redirect: 'news'
      },
```

5. 路由传参
   params:用于少量数据路由传参
   query：用于大量数据路由传参

**24. Vue 导航守卫**
全局导航守卫
监听 route 跳转
meta:元数据（描述数据的数据）

```
//前置钩子
router.beforeEach((to, from, next) => {
  document.title = (to.matched[1] == null) ? (to.matched[0].meta.title) : (to.meta.title)
  next()
})

//后置钩子
router.afterEach((to, from) => {
  document.title = (to.matched[1] == null) ? (to.matched[0].meta.title) : (to.meta.title)
})
```

路由独享守卫：在路由内配置 beforeEnter()

组件内的守卫：在组件内定义 beforeRouterEnter(), beforeRouterUpdate(), beforeRouterLeave()
可以理解为 router 的生命周期

**25. Vue-Router 和 keep-alive**

keep-alive 当路由跳转回之前 router 又不想重新加载 router，可以用 keep-alive
<strong>router-view</strong> 也是一个组件，如果直接被抱在 keep-alive 里面，所有的路径匹配的视图组件都会被<strong>缓存</strong>.
