<template>
    <div>
    <Watchvideo :datawatch="datai"/>
    </div>
</template>
<script>

import Watchvideo from '@/components/watch.vue'

export default {
  components: {
    Watchvideo
  },
  data () {
    return {
      datai: []
    }
  },
  created () {
    this.datai = this.$route.params.data
  }
}
</script>
