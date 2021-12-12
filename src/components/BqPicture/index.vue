<template>
  <div class="big">
    <div class="line">
      <v-card class="mx-auto" max-width="380">
        <div class="overflow-hidden">
          <div class="float-left img">
            <v-img
              :src="img1"
              height="210px"
              width="210"
               class="two"
            ></v-img>
          </div>
          <div class="float-left img">
            <v-img
              :src="img2"
              height="102px"
              width="140"
               class="two"
            ></v-img>
            <v-img
              :src="img3"
              height="102px"
              width="140"
              class="two"
            ></v-img>
          </div>
        </div>
        <v-card-title>{{title}}</v-card-title>
      </v-card>
    </div>
  </div>
</template>
<style scoped>
.big {
  width: 1200px;
  margin: 65px auto;
  content: "";
  display: table;
  clear: both;
}
.line {
  display: inline;
  float: left;
  width: 33.33%;
  padding: 5px;
  height: 180px;
  box-sizing: inherit;
}
.img {
  margin-left: 10px;
}
.two {
  margin: 5px 0px;
  border-radius: 5px;
}
</style>
<script>
export default {
  data() {
    return {};
  },
  props:{
    title:String,
    img1:String,
    img2:String,
    img3:String,
  }
};
</script>
