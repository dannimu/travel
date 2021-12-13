<template>
  <div>
    <div class="menu">
      <router-link to="/tansuo/quanbu">厦门</router-link>
      <router-link to="/tansuo/ziran">婺源</router-link>
      <router-link to="/tansuo/chengshi">黄山</router-link>
      <router-link to="/tansuo/yundong">绍兴~~~</router-link>
      <router-link to="/tansuo/xizang">西藏</router-link>
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
}
.menu a {
  margin: 10px;
  font-size: 14px;
  color: rgb(14, 9, 9);
  text-decoration: none;
}
</style>