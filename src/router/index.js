import Vue from 'vue'
import Router from 'vue-router'
import MaoDou from '@/components/maodou'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MaoDou',
      component: MaoDou
    }
  ]
})
