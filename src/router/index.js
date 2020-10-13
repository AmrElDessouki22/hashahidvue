import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Arabicmovies from '@/views/Arabicmovies.vue'
import Englishmovies from '@/views/Englishmovies.vue'
import ArabicSeries from '@/views/Arabicseries.vue'
import EnglishSeries from '@/views/Englishseries.vue'
import Watch from '@/views/Watch.vue'
import Episod from '@/views/SeriesEpisod.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/arabicmovies',
    name: 'arabicmovies',
    component: Arabicmovies
  },
  {
    path: '/englishmovies',
    name: 'englishmovies',
    component: Englishmovies
  },
  {
    path: '/arabicseries',
    name: 'arabicseries',
    component: ArabicSeries
  },
  {
    path: '/englishseries',
    name: 'englishseries',
    component: EnglishSeries
  },
  {
    path: '/watch',
    name: 'watch',
    component: Watch
  },
  {
    path: '/episods',
    name: 'episods',
    component: Episod
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
