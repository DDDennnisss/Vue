# Vue

A repo of learning Vue

**学习视频：**

- [最全最新 Vue、Vuejs 教程，从入门到精通](https://www.bilibili.com/video/BV15741177Eh?p=2&spm_id_from=pageDriver)

**学习进度：**

| **学习内容**   | **更新时间**               | **备注**             |
| -------------- | -------------------------- | -------------------- |
| [Vue 介绍]     | 2021-06-05                 | P1 -- P20            |
| [Vue 指令]     | 2021-06-06                 | P21 -- P27           |
| [Vue 方法绑定] | 2021-06-08                 | P28 -- P33           |
| [准备面试]     | 2021-06-08 ---- 2021-06-16 | 准备阿里面试暂停学习 |
| [Vue 高级函数] | 2021-06-16                 | P34 -- P45           |

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
