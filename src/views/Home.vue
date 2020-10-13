<template>
  <div class="home">
  <BigPoster/>
  <MovieAraic/>
  <MovieEnglish/>
  <SeriesArabic/>
  <SeriesEnglish/>
  </div>
</template>

<script>

import MovieAraic from '@/components/Movies/arabic.vue'
import MovieEnglish from '@/components/Movies/english.vue'
import SeriesArabic from '@/components/Series/arabic.vue'
import SeriesEnglish from '@/components/Series/english.vue'
import BigPoster from '@/components/Bigposter/Bigposter.vue'

export default {
  name: 'Home',
  components: {
    MovieAraic,
    BigPoster,
    MovieEnglish,
    SeriesArabic,
    SeriesEnglish
  }
}
</script>
