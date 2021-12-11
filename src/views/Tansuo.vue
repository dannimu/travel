<template>
  <div>
    <div class="menu">
      <router-link to="/tansuo/quanbu">全部</router-link>
      <router-link to="/tansuo/ziran">自然</router-link>
      <router-link to="/tansuo/chengshi">城市</router-link>
      <router-link to="/qwe">运动</router-link>
      <router-link to="/asdf">人物</router-link>
      <router-link to="/asdf">签约摄影师</router-link>
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