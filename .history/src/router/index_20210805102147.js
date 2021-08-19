import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CengCiDingWei from '@/components/toCss/CengCiDingWei'
import FuDong from '@/components/toCss/FuDong'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/toCss/CengCiDingWei',
      name: 'CengCiDingWei',
      component: CengCiDingWei
    }

  ]
})
