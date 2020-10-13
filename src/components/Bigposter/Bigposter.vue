<template>
    <div class="parent">
    <img class="bigposer" :src="posterlink" alt="poster">
    <div class="fade">
    <img class="bigposer2" :src="posterlink" alt="poster">
    </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      posterlink: ''
    }
  },
  methods: {
    getposterimg: async function () {
      const response = await fetch('https://xspot.herokuapp.com/getenglishfilms?skip=1&limit=2', {
        method: 'GET'
      })
      if (response.status === 200) {
        const json = await response.json()
        console.log(json)
        this.posterlink = json[0].posterlink
      }
    }
  },
  mounted: async function () {
    this.getposterimg()
  }
}
</script>>

<style  scoped>
.parent{
    position: relative;
    margin: 10px;
}
.bigposer{
    width: 100%;
    height: 400px;
    object-fit: cover;
    }
.bigposer2{
    width: 20%;
    display: block;
    margin: 10px auto;
}
.fade{
    width: 100%;
    position: absolute;
    overflow: hidden;
    z-index: 0;
    right: 0;
    left: 0;
    top: 0;
    height: 400px;
    background-color: rgba(0, 0, 0, 0.39);
}
</style>
