<template>
    <div>
    <template>
    <div class="parent">
    <div class="item" v-for="(episodes,index) in item[0]" v-bind:key="episodes">
    <img @click="watchpage(episodes.epsiod)" :src="item[3]" alt="">
    <h4 style="overflow: hidden;color:white;">episod number {{index+1}}</h4>
    </div>
    </div>
</template>
    </div>
</template>
<script>
export default {
  data () {
    return {
      item: this.$route.params.data
    }
  },
  methods: {
    watchpage (episod) {
      this.$router.push({ name: 'watch', params: { data: [episod] } })
    }
  }
}
</script>
<style scoped>
.parent{
    width: 100%;
}
.item{
    cursor: pointer;
    display: inline-block;
    width: 20%;
    margin: 10px;
    overflow: hidden;
}
.item img{
    width: 90%;
    height: 300px;
    object-fit: cover;
}
h4{
    color: white;
}
</style>
