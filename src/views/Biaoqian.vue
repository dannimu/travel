<template>
  <div>
    <div class="menu">
      <router-link to="/biaoqian/ticai">此板块以后添加</router-link>
      <!-- <router-link to="/biaoqian/ticai">题材</router-link> -->
      <!-- <router-link to="/biaoqian/fengge">风格</router-link> -->
      <!-- <router-link to="/biaoqian/shebei">设备</router-link> -->
      <!-- <router-link to="/qwe">地区</router-link> -->
    </div>
    <router-view />
  </div>
</template>
<style scoped>
.menu {
  text-align: center;
  width: calc(100% - 70px);
  line-height: 50px;
  height: 50px;
  float: left;
  position: fixed;
  top: 65px;
  background-color: rgb(252, 250, 250);
  z-index: 99999;
}
.menu a {
  margin: 10px;
  font-size: 14px;
  color: rgb(14, 9, 9);
  text-decoration: none;
}
</style>