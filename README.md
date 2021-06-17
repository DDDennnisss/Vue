# Vue

A repo of learning Vue

**学习视频：**

- [最全最新 Vue、Vuejs 教程，从入门到精通](https://www.bilibili.com/video/BV15741177Eh?p=2&spm_id_from=pageDriver)

**学习进度：**

| **学习内容**                                                                                | **更新时间**               | **备注**             |
| ------------------------------------------------------------------------------------------- | -------------------------- | -------------------- |
| [Vue 介绍]                                                                                  | 2021-06-05                 | P1 -- P20            |
| [Vue 指令]                                                                                  | 2021-06-06                 | P21 -- P27           |
| [Vue 方法绑定]                                                                              | 2021-06-08                 | P28 -- P33           |
| [准备面试]                                                                                  | 2021-06-08 ---- 2021-06-16 | 准备阿里面试暂停学习 |
| [Vue 高级函数]                                                                              | 2021-06-16                 | P34 -- P45           |
| [Vue 阶段知识总结](https://www.bilibili.com/video/BV15741177Eh?p=63&spm_id_from=pageDriver) | 2021-06-17                 | P46 -- P63           |

#Vue 基础

**插值操作**
v-for, v-on:click(...), v-once(只渲染一次), v-html(解析 html 代码)，v-text(代替 mustache 语法),v-pre(不解析渲染), v-cloak(防止原生 DOM 属性渲染),
v-show 与 v-if 的区别：
v-if：当条件为 false 时，v-if 的元素根本不会在 DOM 中
v-show：当条件为 false 时，v-show 的元素在 DOM 中只是加了 display：none

v-for: 遍历数组对象

v-bind(img v-bind:src=""绑定动态属性)
简写 <img :src=""> 同 <img v-bind:src="">

**绑定对象**

<h1 :class="{active: true, line: false}"> 可以用data数据替换boolean达到控制变量

**绑定数组**

<h1 :class="['active','line']">  字符串
<h1 :class="[active,line]">   变量

同等与 <h1 class="active line">

**计算属性**
computed : 用于合并属性,计算属性(比如商品总价格)

**Event 绑定**

<h1 @click="btnClick(a, $event)"> $是拿event属性

**修饰符**
@click.stop 阻止冒泡
@.prevent 阻止默认 等同 react event.preventDefault()
@keyup.enter 只有 enter 才能输出
@.once 只触发一次
@.native 可以让父组件接收到原生事件, 否则只能接收自定义事件
1.native 修饰符只能用在组件上, 不能用在原生标签上
2.$listeners 不包含有 native 修饰符的事件

**条件判断**

<div id="app"> //复杂不要用这个 去compute里写逻辑语句
  <p v-if ="score>=90">Excellent</p>
  <p v-if-else ="90>=score>=80">Good</p>
  <p v-if-else ="score>=90">Not Bad</p>
  <p v-else ="score<=60">Failure</p>
</div>

**虚拟 DOM 和 DIFF 算法**
DIFF 算法查 React 笔记

**高级函数**

1. filter: 必须返回一个 boolean，true 加入新数组 false pass 掉

2. map：

3. reduce

**双向绑定**
<input type="text" v-model="message"> //等于下面
<input type="text" :value="message" @input="message = $event.target.value">

v-model 结合 radio 类型
<input type="radio" id="female" name="sex" value="女"> //如果需要互斥选项，需要绑定同一组 name 名
<input type="radio" id="male" name="sex" value="男">

<input type="radio" id="female" value="女" v-model="sex"> //如果有 v-model，绑定同一组 name 名可以省略
<input type="radio" id="male"  value="男" v-model="sex">

v-model 结合 checkbox 类型
单选框对应的是 boolean
多选框对应的是数组

v-model 结合 select 类型
在 select tag 中绑定 v-model
单选框对应的是 string
多选框对应的是数组 multiple 属性 tag

**值绑定**
<label v-for="item in originHobbies" :for="item">
<input type="checkbox" :value="item" :id="item" v-model="hobbies">{{item}}
</label>

**V-model 修饰符**
<input type="text" v-model.lazy="message"> //失去焦点或者按回车才会更新 类似防抖
.number
.trim

**Vue 组件**
局部组件和全局组件： 一般使用局部组件
父子组件

组件 data 必须是函数，而且返回一个对象

**Vue 组件父子通讯**
父传子
props

子传父
$emit() 自定义事件 @-XXXX
