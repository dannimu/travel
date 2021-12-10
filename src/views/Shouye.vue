<template>
  <div v-scroll="onScroll" id="aaaaa">
    <div class="big">
      <div>
        <v-carousel class="carousel" height="320">
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
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
      // 城市列表
      citie: [
        {
          name: "美国",
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          name: "澳大利亚",
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          name: "冰岛",
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          name: "西藏",
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
        {
          name: "上海",
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
        {
          name: "新疆",
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
      //小图片框
      Photo: [
        {
          introduce: "自然",
          src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        },
        {
          introduce: "城市",
          src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        },
        {
          introduce: "运动",
          src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        },
        {
          introduce: "人物",
          src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        },
        {
          introduce: "签约摄影师",
          src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        },
      ],
      //最后6个图片
      last: [
        {
          name: "12323",
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
        {
          name: "2355",
          src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        },
        {
          name: "1239",
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          name: "47",
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          name: "1234",
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          name: "hdjj",
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
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

 