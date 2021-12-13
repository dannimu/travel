<template>
  <div class="big">
    <v-row>
      <v-col v-for="v in list" :key="v.title" cols="4">
       <bq-picture :title="v.title" :img1="v.img1" :img2="v.img2" :img3="v.img3" ></bq-picture>
      </v-col>
    </v-row>
  </div>
</template>
<style>
.big {
  width: 1200px;
  margin: 65px auto;
  content: "";
  display: table;
  clear: both;
}
</style>
<script>
import BqPicture from "../components/BqPicture";
var list=[{
    title:'123',
    img1:'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
    img2:'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
    img3:'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
},
{
    title:'123',
    img1:'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
    img2:'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
    img3:'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
}];
export default {
  data() {
    return {
     list
    };
  },
  components: { BqPicture },
};
</script>