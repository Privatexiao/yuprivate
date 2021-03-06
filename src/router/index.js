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
import ShuBiaoZuoBiao from '@/components/tojs/ShuBiaoZuoBiao'
import ShuBiaoYiDong from '@/components/tojs/ShuBiaoYiDong'
import JianPanKongZhi from '@/components/tojs/JianPanKongZhi'

import NeiRongGuoLuQi from '@/components/tojq/NeiRongGuoLuQi'
import XiuGaiYuanSu from '@/components/tojq/XiuGaiYuanSu'
import YouJianLieBiao from '@/components/tojq/YouJianLieBiao'
import HaoYouLieBiao from '@/components/tojq/HaoYouLieBiao'
import jqXianShiYinCang from '@/components/tojq/jqXianShiYinCang'

import MoTaiKuang from '@/components/tobo/MoTaiKuang'
import boLunBoTu from '@/components/tobo/boLunBoTu'
import ZhaGeXiTong from '@/components/tobo/ZhaGeXiTong'
import JiChuBiaoDan from '@/components/tobo/JiChuBiaoDan'
import YanZhengTiShi from '@/components/tobo/YanZhengTiShi'
import XiangYingShiBuJu from '@/components/tobo/XiangYingShiBuJu'
import boAnNiu from '@/components/tobo/boAnNiu'
import boBiaoGe from '@/components/tobo/boBiaoGe'
import ShuRuKuangYuanSu from '@/components/tobo/ShuRuKuangYuanSu'
import ZhaGeXiTongbos from '@/components/tobo/ZhaGeXiTongbos'

import XiaoMiShangCheng from '@/components/project/XiaoMiShangCheng'
import TianTianShengXian from '@/components/project/TianTianShengXian'
import KeFuZhuShou from '@/components/project/KeFuZhuShou'
import GaoXiaoWangZhan from '@/components/project/GaoXiaoWangZhan'
import WaiMaiZhuShou from '@/components/project/WaiMaiZhuShou'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // ??????
    {
      path: '/toCss/FuDong',
      name:'FuDong',
      component:FuDong
    },
    // ????????????
    {
      path: '/toCss/CengCiDingWei',
      name: 'CengCiDingWei',
      component: CengCiDingWei
    },
    // ????????????
    {
      path: '/toCss/JueDuiDingWei',
      name: 'JueDuiDingWei',
      component: JueDuiDingWei
    },
    // ????????????
    {
      path: '/toCss/XiangDuiDingWei',
      name: 'XiangDuiDingWei',
      component: XiangDuiDingWei
    },
    // ????????????
    {
      path: '/toCss/JingTaiDingWei',
      name: 'JingTaiDingWei',
      component: JingTaiDingWei
    },
    //????????????
    {
      path: '/toCss/BianKuangYangShi',
      name: 'BianKuangYangShi',
      component: BianKuangYangShi
    },
    //????????????
    {
      path: '/toCss/TuXingYangShi',
      name: 'TuXingYangShi',
      component: TuXingYangShi
    },
    //????????????
    {
      path: '/toCss/LiangLanBuJu',
      name: 'LiangLanBuJu',
      component: LiangLanBuJu
    },
    // ????????????
    {
      path: '/toCss/DuoLanBuJu',
      name: 'DuoLanBuJu',
      component: DuoLanBuJu
    },
    // ??????????????????
    {
      path: '/toCss/ShuiPingChui',
      name: 'ShuiPingChui',
      component: ShuiPingChui
    },
    // ????????????
    {
      path: '/toCss/GuoDuShuXing',
      name: 'GuoDuShuXing',
      component: GuoDuShuXing
    },
    // css??????
    {
      path: '/toCss/cssBianXing',
      name: 'cssBianXing',
      component: cssBianXing
    },
    // css?????????
    {
      path: '/toCss/cssNeiBianJu',
      name: 'cssNeiBianJu',
      component: cssNeiBianJu
    },
    // ???????????????
    {
      path: '/toCss/YiChuYuJianQie',
      name: 'YiChuYuJianQie',
      component: YiChuYuJianQie
    },
    // ???????????????
    {
      path: '/toCss/ShuangFeiYi',
      name: 'ShuangFeiYi',
      component: ShuangFeiYi
    },
    // ????????????????????????
    {
      path: '/toCss/XianShiYuYinCang',
      name: 'XianShiYuYinCang',
      component: XianShiYuYinCang
    },
    // ??????????????????????????????
    {
      path: '/toCss/KuaiHeXingQuBie',
      name: 'KuaiHeXingQuBie',
      component: KuaiHeXingQuBie
    },
    // ?????????????????????????????????
    {
      path: '/toCss/KuaiZhuanHang',
      name: 'KuaiZhuanHang',
      component: KuaiZhuanHang
    },

    // ?????????
    {
      path: '/tojs/DingShiQi',
      name: 'DingShiQi',
      component: DingShiQi
    },
    // ??????????????????
    {
      path: '/tojs/ShuBiaoZuoBiao',
      name: 'ShuBiaoZuoBiao',
      component: ShuBiaoZuoBiao
    },
    // div??????????????????
    {
      path: '/tojs/ShuBiaoYiDong',
      name: 'ShuBiaoYiDong',
      component: ShuBiaoYiDong
    },
    // ????????????div??????
    {
      path: '/tojs/JianPanKongZhi',
      name: 'JianPanKongZhi',
      component: JianPanKongZhi
    },
  

    // ???????????????
    {
      path: '/tojq/NeiRongGuoLuQi',
      name: 'NeiRongGuoLuQi',
      component: NeiRongGuoLuQi
    },
    // ??????????????????
    {
      path: '/tojq/XiuGaiYuanSu',
      name: 'XiuGaiYuanSu',
      component: XiuGaiYuanSu
    },
    // ??????????????????
    {
      path: '/tojq/YouJianLieBiao',
      name: 'YouJianLieBiao',
      component: YouJianLieBiao
    },
    // ???QQ????????????
    {
      path: '/tojq/HaoYouLieBiao',
      name: 'HaoYouLieBiao',
      component: HaoYouLieBiao
    },
    // jQuery???????????????
    {
      path: '/tojq/jqXianShiYinCang',
      name: 'jqXianShiYinCang',
      component: jqXianShiYinCang
    },




    // ?????????
    {
      path: '/tobo/MoTaiKuang',
      name: 'MoTaiKuang',
      component: MoTaiKuang
    },
    // ?????????
    {
      path: '/tobo/boLunBoTu',
      name: 'boLunBoTu',
      component: boLunBoTu
    },
    // ????????????
    {
      path: '/tobo/ZhaGeXiTong',
      name: 'ZhaGeXiTong',
      component: ZhaGeXiTong
    },
    // ????????????
    {
      path: '/tobo/JiChuBiaoDan',
      name: 'JiChuBiaoDan',
      component: JiChuBiaoDan
    },
    // ????????????
    {
      path: '/tobo/YanZhengTiShi',
      name: 'YanZhengTiShi',
      component: YanZhengTiShi
    },
    // ???????????????
    {
      path: '/tobo/XiangYingShiBuJu',
      name: 'XiangYingShiBuJu',
      component: XiangYingShiBuJu
    },
    // Bootstrap??????
    {
      path: '/tobo/boAnNiu',
      name: 'boAnNiu',
      component: boAnNiu
    },
    // Bootstrap??????
    {
      path: '/tobo/boBiaoGe',
      name: 'boBiaoGe',
      component: boBiaoGe
    },
    // ?????????????????????
    {
      path: '/tobo/ShuRuKuangYuanSu',
      name: 'ShuRuKuangYuanSu',
      component: ShuRuKuangYuanSu
    },
    // ????????????????????????
    {
      path: '/tobo/ZhaGeXiTongbos',
      name: 'ZhaGeXiTongbos',
      component: ZhaGeXiTongbos
    },

    
    // ????????????
    {
      path: '/project/XiaoMiShangCheng',
      name: 'XiaoMiShangCheng',
      component: XiaoMiShangCheng
    },
    // ????????????
    {
      path: '/project/TianTianShengXian',
      name: 'TianTianShengXian',
      component: TianTianShengXian
    },
    // ????????????
    {
      path: '/project/KeFuZhuShou',
      name: 'KeFuZhuShou',
      component: KeFuZhuShou
    },
    // ??????????????????
    {
      path: '/project/GaoXiaoWangZhan',
      name: 'GaoXiaoWangZhan',
      component: GaoXiaoWangZhan
    },
    // ?????????????????????
    {
      path: '/project/WaiMaiZhuShou',
      name: 'WaiMaiZhuShou',
      component: WaiMaiZhuShou
    },
  ]
})
