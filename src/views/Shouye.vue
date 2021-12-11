<template>
  <div v-scroll="onScroll" id="aaaaa">
    <div class="big">
      <div>
        <v-carousel class="carousel" height="500">
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
      </div>
      <!-- 6张小图 -->
      <div style="margin-top: 40px">
        <h2>热门航拍点</h2>
        <div class="six">
          <div class="small" v-for="v in citie" :key="v.name">
            <v-img class="img" :src="v.src"></v-img>
            <v-card-title class="card-title">{{ v.name }}</v-card-title>
          </div>
        </div>
      </div>
      <div>
        <div :class="jingxuan" class="jingxuan">精选</div>
      </div>
    </div>
    <!-- 小图片 -->
    <div class="big" v-for="p in Photo" :key="p.introduce">
      <strong class="text-h6 strong">{{ p.introduce }}</strong>
      <v-container class="grey lighten-5" style="margin: 15px auto 5px">
        <v-row>
          <v-col v-for="v in 4" :key="v" cols="3">
            <v-card class="pa-2" outlined tile>
              <v-card class="mx-auto" max-width="280">
                <v-img class="white--text align-end" :src="p.src"> </v-img>
                <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>
                <v-card-text class="text--primary">
                  <v-divider class="mx-4"></v-divider>
                  <div>Whitehaven Beach</div>
                </v-card-text>
              </v-card>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container class="grey lighten-5 big">
      <strong class="text-h6">热门标签</strong>
      <v-row no-gutters style="margin: 15px auto 5px">
        <v-col v-for="n in last" :key="n.name" cols="2">
          <v-card class="mx-auto" outlined tile max-width="180">
            <v-img :src="n.src" height="120px"></v-img>
            <v-card-title> {{ n.name }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.big {
  width: 1200px;
  margin: 40px auto;
}
.carousel {
  width: 100%;
  margin: auto;
  margin-top: 40px;
  border-radius: 5px;
  height: 100px;
}
.six {
  margin-top: 15px;
  display: flex;
}

.small {
  width: 100%;
}
.img {
  border-radius: 5px;
  height: 115px;
  width: 180px;
}
.jingxuan {
  width: 1200px;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  padding: 8px;
  background-color: rgb(252, 250, 250);
  text-align: center;
  color: rgb(87, 48, 48);
}
.jingxuanfixed{
    position: fixed;
    top: 64px;
    z-index: 9999;
}
</style>
<script>
export default {
  data() {
    return {
        top: 0,
      items: [
        {
          src: "https://img.tukuppt.com/ad_preview/00/09/14/5c99116a2ffde.jpg!/fw/780",
        },
        {
          src: "https://p6-tt.byteimg.com/origin/pgc-image/6098ac8cc5df4267ab97b41dde97a507?from=pc",
        },
        {
          src: "https://img.tukuppt.com/bg_grid/00/03/28/4F5o5JJYIt.jpg!/fh/350",
        },
        {
          src: "https://img.tukuppt.com/bg_grid/00/24/42/dhaxjvAx0W.jpg!/fh/350",
        },
      ],
      // 城市列表
      citie: [
        {
          name: "美国",
          src: "https://img.tukuppt.com/bg_grid/00/03/40/oJRZjOBnF7.jpg!/fh/350",
        },
        {
          name: "澳大利亚",
          src: "https://img.tukuppt.com/bg_grid/00/06/63/5fm2Mvjfwz.jpg!/fh/350",
        },
        {
          name: "冰岛",
          src: "https://img.tukuppt.com/bg_grid/00/07/13/gGSzfrlawB.jpg!/fh/350",
        },
        {
          name: "西藏",
          src: "https://img.tukuppt.com/bg_grid/00/09/75/foiWcKgzx6.jpg!/fh/350",
        },
        {
          name: "上海",
          src: "https://img.tukuppt.com/bg_grid/00/17/72/zp574kYgHx.jpg!/fh/350",
        },
        {
          name: "新疆",
          src: "https://img.tukuppt.com/bg_grid/00/11/53/BMbv2RasOn.jpg!/fh/350",
        },
      ],
      //小图片框
      Photo: [
        {
          introduce: "自然",
          src: "https://img.tukuppt.com/bg_grid/01/15/74/SWFW3TUWlZ.jpg!/fh/350",
        },
        {
          introduce: "城市",
          src: "https://img.tukuppt.com/bg_grid/00/85/18/0QIrgkA1tZ.jpg!/fh/350",
        },
        {
          introduce: "运动",
          src: "https://img.tukuppt.com/bg_grid/00/03/83/l3yGLYQN2I.jpg!/fh/350",
        },
        {
          introduce: "人物",
          src: "https://img.tukuppt.com/bg_grid/00/05/12/P9THwGEEQQ.jpg!/fh/350",
        },
        {
          introduce: "签约摄影师",
          src: "https://img.tukuppt.com/bg_grid/00/23/65/Sd0MUmMfX2.jpg!/fh/350",
        },
      ],
      //最后6个图片
      last: [
        {
          name: "12323",
          src: "https://img.tukuppt.com/bg_grid/00/03/75/EPDdekchPx.jpg!/fh/350",
        },
        {
          name: "2355",
          src: "https://img.tukuppt.com/bg_grid/00/10/10/goqQlrldHA.jpg!/fh/350",
        },
        {
          name: "1239",
          src: "https://img.tukuppt.com/bg_grid/00/10/14/z3DFPJ6tkg.jpg!/fh/350",
        },
        {
          name: "47",
          src: "https://img.tukuppt.com/bg_grid/01/16/19/PsiojVxcp6.jpg!/fh/350",
        },
        {
          name: "1234",
          src: "https://img.tukuppt.com/bg_grid/00/18/30/DfGNfsaCNf.jpg!/fh/350",
        },
        {
          name: "hdjj",
          src: "https://img.tukuppt.com/bg_grid/00/10/99/ZLQKtK4zmS.jpg!/fh/350",
        },
      ],
    };
  },
  computed:{
          jingxuan:function () {
              return {
                  jingxuanfixed: this.top>620
              }
          }
      },
      methods: {
          onScroll(e){
              console.log(e.target.scrollingElement.scrollTop);
              this.top = e.target.scrollingElement.scrollTop
          }
      }
};
</script>

 