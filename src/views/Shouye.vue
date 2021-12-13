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
        <h2>岁月静好</h2>
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
    <div class="big">
      <v-container v-for="v in list" :key="v.title">
        <h2>{{v.title}}</h2>
        <v-row>
          <v-col v-for="(item,i) in v.items" :key="i" cols="3">
            <sm-picture
              :name1="item.name1"
              :name2="item.name2"
              :src="item.src"
            ></sm-picture>
          </v-col>
        </v-row>
      </v-container>
  </div>
    <!-- 热门标签 -->
    <v-container class="grey lighten-5 big">
      <strong class="text-h6">说走就走</strong>
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
import SmPicture from "../components/SmPicture";
var list = [
  {
    title: '在路上～',
    items: [
      {
        name1: 'name1',
        name2: 'name2',
        src: '/images/IMG20200426170304.jpg'
      },
      {
        name1: 'name1',
        name2: 'name2',
        src: '/images/IMG20200430095953.jpg'
      },
      {
        name1: 'name1',
        name2: 'name2',
        src: '/images/IMG20200426093754.jpg'
      },
      {
        name1: 'name1',
        name2: 'name2',
        src: '/images/IMG20200424142458.jpg'
      }
    ]
  },
  {
    title: '面朝大海，春暖花开',
    items: [
      {
        name1: 'name1',
        name2: 'name2',
        src: '/images/mmexport33da06c2c5382e6558941ff76f535998_1639381405306.jpeg'
      },
      {
        name1: 'name1',
        name2: 'name2',
        src: '/images/mmexport1639381529632.jpg'
      },
      {
        name1: 'name1',
        name2: 'name2',
        src: '/images/mmexportd54c173f6af02c65c02fa15669dbd3e2_1639381319712.jpeg'
      },
      {
        name1: 'name1',
        name2: 'name2',
        src: '/images/mmexportf60412bb6a6c9a959148232b958fdfc9_1639381285792.jpeg'
      }
    ]
  }
];
export default {
    components: { SmPicture },

  data() {
    return {
      list,
      top: 0,
      items: [
        {
          src: "/images/mmexport0440caa4df76aa9016e5cce5f92c1d8d_1639381359957.jpeg",
        },
        {
          src: '/images/IMG20200511143919.jpg',
        },
        {
          src: '/images/mmexport03c5b2aee851615c765ac6568b316629_1639381435458.jpeg',
        },
        {
          src: '/images/mmexport1588839648396.jpg',
        },
      ],
      // 城市列表
      citie: [
        {
          name: "马来西亚",
          src: '/images/mmexportc206dfbabf14b2e48e2ccf55800e1767_1639381346278.jpeg',
        },
        {
          name: "厦门",
          src: '/images/IMG20191221172637.jpg',
        },
        {
          name: "黄山",
          src: '/images/mmexport1588670783331.jpg',
        },
        {
          name: "西藏",
          src: '/images/IMG20200505092239.jpg',
        },
        {
          name: "杭州",
          src: '/images/IMG20200106174334.jpg',
        },
        {
          name: "上海",
          src: '/images/IMG_20200212_220338.jpg',
        },
      ],
      //小图片框
      Photo: [
        {
          introduce: "自然",
          src: '/images/IMG20200501200927.jpg',
        },
        {
          introduce: "城市",
          src: '/images/IMG20200501104252.jpg',
        },
        {
          introduce: "运动",
          src: '/images/mmexport1588839636375.jpg',
        },
        {
          introduce: "人物",
          src: '/images/mmexport1587989807568.jpg',
        },
        {
          introduce: "签约摄影师",
          src: '/images/IMG20200424153025.jpg',
        },
      ],
      //最后6个图片
      last: [
        {
          name: "～",
          src: '/images/mmexport1587989273890.jpg',
        },
        {
          name: "～",
          src: '/images/mmexport1588344369472.jpg',
        },
        {
          name: "～",
          src: '/images/mmexport1587989357292.jpg',
        },
        {
          name: "～",
          src: '/images/IMG20200427104430.jpg',
        },
        {
          name: "～",
          src: '/images/IMG20200427100126.jpg',
        },
        {
          name: "～",
          src: '/images/IMG20200422134736.jpg',
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

 