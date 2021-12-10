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
        <router-link to="/">首页</router-link>
        <router-link to="/tansuo">探索</router-link>
        <router-link to="/biaoqian">标签</router-link>
        <router-link to="/asdf">摄影师</router-link>
        <router-link to="/asdf">签约摄影师招募</router-link>
        <router-link to="/asdf">2021 天空之城创意短视频大赛</router-link>
      </div>
      <!-- 右上角按钮 -->
      <div class="user">
        <v-row justify="space-around" class="row">
          <v-btn depressed> 登陆 </v-btn>
        </v-row>
        <v-row justify="space-around" class="row">
          <v-btn depressed> 注册 </v-btn>
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
     <strong class="content">山川湖海和喜欢的人～～～</strong>
     <strong class="content">世界那么大，我想和你去看看～～～</strong>
     <!-- <strong class="content">愿你走出半生，归来仍是少年～～～</strong> -->
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
  margin: 60px 200px 50px 800px;
}
.content{
  margin: 30px;
  color: rgb(113, 114, 116);
}




</style>