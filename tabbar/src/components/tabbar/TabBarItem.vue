<template>
  <div @click="itemClick">
    <slot v-if="isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
 name:'TabBarItem',
 data(){
   return{
   }
 },
 props:{
  path: String,
  activeColor:{
    type: String,
    default: 'red'
  }
 },
 computed:{
   isActive(){
     return this.$route.path.indexOf(this.path) !== -1;
   },
   activeStyle(){
     return this.isActive?{color: this.activeColor}:{}
   }
 },
 methods:{
   itemClick(){
     this.$router.push(this.path)
   }
 }
}
</script>

<style>
#tab-bar{
    display: flex;
    background-color: #f2f2f2;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0 -3px 1px rbga(100, 100, 100, 0.2);
  }

  #tab-bar>div{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

    #tab-bar>div img{
      width: 24px;
      height: 24px;
      margin-top: 2px;
    }

</style>