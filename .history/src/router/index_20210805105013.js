import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// toCss
import FuDong from '@/components/toCss/FuDong'
import CengCiDingWei from '@/components/toCss/CengCiDingWei'
import FuDong from '@/components/toCss/JueDuiDingWei'
import FuDong from '@/components/toCss/XiangDuiDingWei'
import FuDong from '@/components/toCss/JingTaiDingWei'
import FuDong from '@/components/toCss/YiChuYuJianQie'
import FuDong from '@/components/toCss/XianShiYuYinCang'
import FuDong from '@/components/toCss/KuaiHeXingQuBie'
import FuDong from '@/components/toCss/KuaiZhuanHang'


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
    },
    {
      path: 'toCss/FuDong',
      name:'FuDong',
      component:FuDong
    },
    {
      path: '/toCss/JueDuiDingWei',
      name: 'JueDuiDingWei',
      component: JueDuiDingWei
    },
    {
      path: '/toCss/XiangDuiDingWei',
      name: 'XiangDuiDingWei',
      component: XiangDuiDingWei
    },
    {
      path: '/toCss/JingTaiDingWei',
      name: 'JingTaiDingWei',
      component: CengCiDingWei
    },
    {
      path: '/toCss/CengCiDingWei',
      name: 'CengCiDingWei',
      component: CengCiDingWei
    },
    {
      path: '/toCss/CengCiDingWei',
      name: 'CengCiDingWei',
      component: CengCiDingWei
    },
    {
      path: '/toCss/CengCiDingWei',
      name: 'CengCiDingWei',
      component: CengCiDingWei
    },
    {
      path: '/toCss/CengCiDingWei',
      name: 'CengCiDingWei',
      component: CengCiDingWei
    }
  ]
})
