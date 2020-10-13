<template>
    <div class="parent">
    <video autoplay controls :src="video"></video>
    </div>
</template>
<script>
export default {
  props: {
    datawatch: Array
  },
  data () {
    return {
      video: ''
    }
  },
  mounted: async function () {
    const response = await fetch('https://xspot.herokuapp.com/genratelink?link=' + this.datawatch[0], {
      method: 'GET'
    })
    if (response.status === 200) {
      const link = await response.text()
      this.video = link
    } else {
      console.log('dsfsf')
    }
  }
}
</script>
<style  scoped>
video{
    width: 80%;
    margin: 30px 0;
    outline: none;
}
</style>
