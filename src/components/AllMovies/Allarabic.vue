<template>
    <div class="parent">
    <div class="item" v-for="item in movies" v-bind:key="item">
    <img @click="watchpage(item.videoembbed,item.description,item.Cast)" :src="item.posterlink" alt="">
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
      const response = await fetch('https://xspot.herokuapp.com/getarabicfilms', {
        method: 'GET'
      })
      if (response.status === 200) {
        const json = await response.json()
        console.log(json)
        this.movies = json
      }
    },
    watchpage (video, dec, cast) {
      this.$router.push({ name: 'watch', params: { data: [video, dec, cast] } })
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
