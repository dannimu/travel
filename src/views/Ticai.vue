<template>
    <div class="big">
        <v-row>
            <v-col v-for="p in lest" :key="p.title" cols="4">
                <bq-picture :title="p.title" :img1="p.img1" :img2="p.img2" :img3="p.img3"></bq-picture>
            </v-col>
        </v-row>
    </div>
</template>
<style>
big{
  width: 1200px;
  margin: 65px auto;
  content: "";
  display: table;
  clear: both;
}
</style>
<script>
var lest=[{
    title:'你好',
    img1:'https://img.tukuppt.com/bg_grid/00/14/65/WCsOCYnIPQ.jpg!/fh/350',
    img2:'https://img.tukuppt.com/bg_grid/00/14/65/WCsOCYnIPQ.jpg!/fh/350',
    img3:'https://img.tukuppt.com/bg_grid/00/14/65/WCsOCYnIPQ.jpg!/fh/350',
},
{
    title:'123',
    img1:'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
    img2:'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
    img3:'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
},]
import BqPicture from '../components/BqPicture'
export default {
    data() {
        return {
            lest
        }
    },
    components:{BqPicture}
}
</script>