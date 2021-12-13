<template>
  <v-app>
    <v-app-bar app dark>
      <!-- logo -->
      <div class="logo">
        <img
          src="https://spcn-webfront.skypixel.com/skypixel/v2/public/assets/images/logo-cn.00c32c62.svg"
        />
      </div>
      <!-- 文字 -->
      <div class="menu">
        <router-link to="/">凡是过往</router-link>
        <router-link to="/tansuo">皆为序章</router-link>
        <router-link to="/biaoqian">不负美好时光</router-link>
      </div>
      <!-- 右上角按钮 -->
      <div class="user">
        <v-row justify="space-around" class="row">
          <v-btn depressed> 属于我的那些日子</v-btn>
        </v-row>
      </div>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <!-- 最下面 -->

 <div>

  <v-footer dark height="100px" >
    <div class="subhead ">
     <strong class="content">大概没有去过的地方就是远方～～～</strong>
     <strong class="content">不要问为什么没有我本人照片，因为我旅游的时候是单身，没人帮我拍照😂</strong>
    </div>
  </v-footer>
 </div>
  </v-app>
</template>
<style scoped>
.logo,
.user {
  width: 200px;
  height: 64px;
  float: left;
  line-height: 64px;
  margin-left: 30px;
}
.row {
  display: inline;
  padding: 0 5px;
}
.menu {
  width: calc(100% - 400px);
  height: 64px;
  float: left;
  text-align: center;
  line-height: 64px;
}
.menu a {
  margin: 10px;
  font-size: 14px;
  color: #fff;
  text-decoration: none;
}
.logo img {
  height: 30px;
  vertical-align: middle;
}
.subhead {
  width: 1200px;
  margin: 60px 200px 50px 700px;
}
.content{
  margin: 30px;
  color: rgb(113, 114, 116);
}




</style>