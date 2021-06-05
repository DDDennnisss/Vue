# Vue

A repo of learning Vue

**学习视频：**

- [最全最新 Vue、Vuejs 教程，从入门到精通](https://www.bilibili.com/video/BV15741177Eh?p=2&spm_id_from=pageDriver)

**学习进度：**

| **学习内容** | **更新时间** | **备注**  |
| ------------ | ------------ | --------- |
| [Vue 介绍]   | 2021-06-05   | P1 -- P20 |

##Vue 基础##

###插值操作###
v-for, v-on:click(...), v-once(只渲染一次), v-html(解析 html 代码)，v-text(代替 mustache 语法),v-pre(不解析渲染), v-cloak(防止原生 DOM 属性渲染),

v-bind(img v-bind:src=""绑定动态属性)
简写 <img :src=""> 同 <img v-bind:src="">

####绑定对象####

<h1 :class="{active: true, line: false}"> 可以用data数据替换boolean达到控制变量

####绑定数组####

<h1 :class="['active','line']">  字符串
<h1 :class="[active,line]">   变量

同等与 <h1 class="active line">
