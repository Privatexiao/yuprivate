import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import 'babel-polyfill'
// toCss

import CengCiDingWei from '@/components/toCss/CengCiDingWei'
import FuDong from '@/components/toCss/FuDong'
import JueDuiDingWei from '@/components/toCss/JueDuiDingWei'
import XiangDuiDingWei from '@/components/toCss/XiangDuiDingWei'
import JingTaiDingWei from '@/components/toCss/JingTaiDingWei'
import BianKuangYangShi from '@/components/toCss/BianKuangYangShi'
import TuXingYangShi from '@/components/toCss/TuXingYangShi'
import LiangLanBuJu from  '@/components/toCss/LiangLanBuJu'
import DuoLanBuJu from '@/components/toCss/DuoLanBuJu'
import ShuiPingChui from '@/components/toCss/ShuiPingChui'
import GuoDuShuXing from '@/components/toCss/GuoDuShuXing'
import cssBianXing from '@/components/toCss/cssBianXing'
import cssNeiBianJu from '@/components/toCss/cssNeiBianJu'
import ShuangFeiYi from '@/components/toCss/ShuangFeiYi'
import YiChuYuJianQie from '@/components/toCss/YiChuYuJianQie'
import XianShiYuYinCang from '@/components/toCss/XianShiYuYinCang'
import KuaiHeXingQuBie from '@/components/toCss/KuaiHeXingQuBie'
import KuaiZhuanHang from '@/components/toCss/KuaiZhuanHang'

import DingShiQi from '@/components/tojs/DingShiQi'
import LunBoTu from '@/components/tojs/LunBoTu'
import GunLunShiJian from '@/components/tojs/GunLunShiJian'
import ErJiCaiDan from '@/components/tojs/ErJiCaiDan'
import ShuBiaoZuoBiao from '@/components/tojs/ShuBiaoZuoBiao'
import ShuBiaoYiDong from '@/components/tojs/ShuBiaoYiDong'
import DingShiQi from '@/components/tojs/DingShiQi'
import DingShiQi from '@/components/tojs/DingShiQi'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // 浮动
    {
      path: '/toCss/FuDong',
      name:'FuDong',
      component:FuDong
    },
    // 层次定位
    {
      path: '/toCss/CengCiDingWei',
      name: 'CengCiDingWei',
      component: CengCiDingWei
    },
    // 绝对定位
    {
      path: '/toCss/JueDuiDingWei',
      name: 'JueDuiDingWei',
      component: JueDuiDingWei
    },
    // 相对定位
    {
      path: '/toCss/XiangDuiDingWei',
      name: 'XiangDuiDingWei',
      component: XiangDuiDingWei
    },
    // 静态定位
    {
      path: '/toCss/JingTaiDingWei',
      name: 'JingTaiDingWei',
      component: JingTaiDingWei
    },
    //边框样式
    {
      path: '/toCss/BianKuangYangShi',
      name: 'BianKuangYangShi',
      component: BianKuangYangShi
    },
    //图形样式
    {
      path: '/toCss/TuXingYangShi',
      name: 'TuXingYangShi',
      component: TuXingYangShi
    },
    //两栏布局
    {
      path: '/toCss/LiangLanBuJu',
      name: 'LiangLanBuJu',
      component: LiangLanBuJu
    },
    // 多栏布局
    {
      path: '/toCss/DuoLanBuJu',
      name: 'DuoLanBuJu',
      component: DuoLanBuJu
    },
    // 水平垂直居中
    {
      path: '/toCss/ShuiPingChui',
      name: 'ShuiPingChui',
      component: ShuiPingChui
    },
    // 过渡属性
    {
      path: '/toCss/GuoDuShuXing',
      name: 'GuoDuShuXing',
      component: GuoDuShuXing
    },
    // css变形
    {
      path: '/toCss/cssBianXing',
      name: 'cssBianXing',
      component: cssBianXing
    },
    // css内边距
    {
      path: '/toCss/cssNeiBianJu',
      name: 'cssNeiBianJu',
      component: cssNeiBianJu
    },
    // 溢出与剪切
    {
      path: '/toCss/YiChuYuJianQie',
      name: 'YiChuYuJianQie',
      component: YiChuYuJianQie
    },
    // 双飞翼布局
    {
      path: '/toCss/ShuangFeiYi',
      name: 'ShuangFeiYi',
      component: ShuangFeiYi
    },
    // 对象的显示与隐藏
    {
      path: '/toCss/XianShiYuYinCang',
      name: 'XianShiYuYinCang',
      component: XianShiYuYinCang
    },
    // 块元素与行内元素区别
    {
      path: '/toCss/KuaiHeXingQuBie',
      name: 'KuaiHeXingQuBie',
      component: KuaiHeXingQuBie
    },
    // 块元素和行内元素的转换
    {
      path: '/toCss/KuaiZhuanHang',
      name: 'KuaiZhuanHang',
      component: KuaiZhuanHang
    },

    // 定时器
    {
      path: '/tojs/DingShiQi',
      name: 'DingShiQi',
      component: DingShiQi
    },
    // 轮播图
    {
      path: '/tojs/LunBoTu',
      name: 'LunBoTu',
      component: LunBoTu
    },
    // 滚轮事件
    {
      path: '/tojs/GunLunShiJian',
      name: 'GunLunShiJian',
      component: GunLunShiJian
    },
    // 二级菜单
    {
      path: '/tojs/ErJiCaiDan',
      name: 'ErJiCaiDan',
      component: ErJiCaiDan
    },
    // 获取坐标坐标
    {
      path: '/tojs/ShuBiaoZuoBiao',
      name: 'ShuBiaoZuoBiao',
      component: ShuBiaoZuoBiao
    },
    // div跟随鼠标移动
    {
      path: '/tojs/ShuBiaoYiDong',
      name: 'DingShiQi',
      component: DingShiQi
    },
    // 键盘控制div移动
    {
      path: '/tojs/DingShiQi',
      name: 'DingShiQi',
      component: DingShiQi
    },
    // DOM删除添加元素
    {
      path: '/tojs/DingShiQi',
      name: 'DingShiQi',
      component: DingShiQi
    },
  ]
})
