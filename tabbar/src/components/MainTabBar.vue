<template>
  <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <img slot="item-icon" src="../assets/img/index.svg" alt="">
        <img slot="item-icon-active" src="../assets/img/index-1.svg" alt="">
      <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="blue">
        <img slot="item-icon" src="../assets/img/fenlei.svg" alt="">
        <img slot="item-icon-active" src="../assets/img/fenlei-1.svg" alt="">
      <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="blue">
        <img slot="item-icon" src="../assets/img/gouwuche.svg" alt="">
        <img slot="item-icon-active" src="../assets/img/gouwuche-1.svg" alt="">
      <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="blue">
        <img slot="item-icon" src="../assets/img/wode.svg" alt="">
        <img slot="item-icon-active" src="../assets/img/wode-1.svg" alt="">
      <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from '@/components/tabbar/Tabbar.vue'
import TabBarItem from '@/components/tabbar/TabBarItem.vue'

export default {
  name:'MainTabBar',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>