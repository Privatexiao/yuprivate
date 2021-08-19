import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import aaa from '@/components/toCss/CengCiDingWei'

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
      component: aaa
    }

  ]
})
