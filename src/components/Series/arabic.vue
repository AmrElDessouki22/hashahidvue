<template>
    <div class="parent">
    <h2 style="color:white;text-align: start;margin:50px">Arabic Series</h2>
    <div class="item" v-for="item in movies" v-bind:key="item">
    <img @click="watchpage(item.videoembbed,item.description,item.Cast,item.posterlink)" :src="item.posterlink" alt="">
    <h4 style="overflow: hidden;">{{item.name}}</h4>
    </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      movies: []
    }
  },
  methods: {
    getposterimg: async function () {
      const response = await fetch('https://xspot.herokuapp.com/getarabicgetseries?skip=0&limit=4', {
        method: 'GET'
      })
      if (response.status === 200) {
        const json = await response.json()
        console.log(json)
        this.movies = json
      }
    },
    watchpage (video, dec, cast, poster) {
      this.$router.push({ name: 'episods', params: { data: [video, dec, cast, poster] } })
    }
  },
  mounted: async function () {
    this.getposterimg()
  }
}
</script>>

<style  scoped>
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
