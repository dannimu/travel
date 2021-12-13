<template>
              <v-card class="pa-2" outlined tile>
                <v-card class="mx-auto" max-width="280">
                  <v-img class="white--text align-end" :src="src" height="190"> </v-img>
                  <v-card-subtitle class="pb-0"> {{ name1 }} </v-card-subtitle>
                  <v-card-text class="text--primary">
                    <v-divider class="mx-4"></v-divider>
                    <div>{{ name2 }}</div>
                  </v-card-text>
                </v-card>
              </v-card>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    name1: String,
    name2: String,
    src:String,
  },
};
</script>