<template>
    <div class="big">
        <v-row>
            <v-col v-for="r in lest" :key="r.titer" cols="4">
                <bq-picture :title="r.titer" :img1="r.img1" :img2="r.img2" :img3="r.img3"></bq-picture>

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
import BqPicture from '../components/BqPicture'
var lest=[{
    titer:'shebei',
    img1:'https://img.tukuppt.com/bg_grid/00/13/23/4e2KxRRsIO.jpg!/fh/350',
    img2:'https://img.tukuppt.com/bg_grid/00/06/51/eQQgRngDKS.jpg!/fh/350',
    img3:'https://img.tukuppt.com/bg_grid/00/10/41/C8Sn3eYSWP.jpg!/fh/350',
},
{
    titer:'222bei',
    img1:'https://img.tukuppt.com/bg_grid/00/15/30/JU8Zfm2Jra.jpg!/fh/350',
    img2:'https://img.tukuppt.com/bg_grid/00/09/53/kwswIjDZI5.jpg!/fh/350',
    img3:'https://img.tukuppt.com/bg_grid/01/15/87/QK8vg3qlGx.jpg!/fh/350',
},
{
    titer:'s222bei',
    img1:'https://img.tukuppt.com/bg_grid/00/05/53/YOouGqK39V.jpg!/fh/350',
    img2:'https://img.tukuppt.com/bg_grid/00/19/06/eSDRFCAEsx.jpg!/fh/350',
    img3:'https://img.tukuppt.com/bg_grid/01/15/74/blsO7E8KKq.jpg!/fh/350',
}]
export default {
    data() {
        return {
            lest
        }
    },
    components:{BqPicture}
}
</script>