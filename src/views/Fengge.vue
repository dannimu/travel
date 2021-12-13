<template>
    <div class="big">
        <v-row>
            <v-col v-for="i in lists" :key="i.title" cols="4">
                <bq-picture :title="i.title" :img1="i.img1" :img2="i.img2" :img3="i.img3">
                </bq-picture>
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
var lists=[{
    title:'123456',
    img1:"https://cdn.vuetifyjs.com/images/cards/docks.jpg",
    img2:"https://cdn.vuetifyjs.com/images/cards/docks.jpg",
    img3:"https://cdn.vuetifyjs.com/images/cards/docks.jpg",
},
{
    title:'你好',
    img1:'https://img.tukuppt.com/bg_grid/00/14/65/WCsOCYnIPQ.jpg!/fh/350',
    img2:'https://img.tukuppt.com/bg_grid/00/14/65/WCsOCYnIPQ.jpg!/fh/350',
    img3:'https://img.tukuppt.com/bg_grid/00/14/65/WCsOCYnIPQ.jpg!/fh/350',
},]
import BqPicture from '../components/BqPicture'
export default {
    data() {
        return {
            lists
        }
    },
    components:{BqPicture},
}
</script>