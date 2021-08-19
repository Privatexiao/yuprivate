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

import NeiRongGuoLüQi from '@/components/tojq/NeiRongGuoLüQi'
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
import GaoXiaoWangZhan from '@/components/project/TianTianShengXian'
import TianTianShengXian from '@/components/project/TianTianShengXian'
import TianTianShengXian from '@/components/project/TianTianShengXian'


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
    // 获取坐标坐标
    {
      path: '/tojs/ShuBiaoZuoBiao',
      name: 'ShuBiaoZuoBiao',
      component: ShuBiaoZuoBiao
    },
    // div跟随鼠标移动
    {
      path: '/tojs/ShuBiaoYiDong',
      name: 'ShuBiaoYiDong',
      component: ShuBiaoYiDong
    },
    // 键盘控制div移动
    {
      path: '/tojs/JianPanKongZhi',
      name: 'JianPanKongZhi',
      component: JianPanKongZhi
    },
  

    // 内容过滤器
    {
      path: '/tojq/NeiRongGuoLüQi',
      name: 'NeiRongGuoLüQi',
      component: NeiRongGuoLüQi
    },
    // 修改元素内容
    {
      path: '/tojq/XiuGaiYuanSu',
      name: 'XiuGaiYuanSu',
      component: XiuGaiYuanSu
    },
    // 邮件列表管理
    {
      path: '/tojq/YouJianLieBiao',
      name: 'YouJianLieBiao',
      component: YouJianLieBiao
    },
    // 仿QQ好友列表
    {
      path: '/tojq/HaoYouLieBiao',
      name: 'HaoYouLieBiao',
      component: HaoYouLieBiao
    },
    // jQuery显示与隐藏
    {
      path: '/tojq/jqXianShiYinCang',
      name: 'jqXianShiYinCang',
      component: jqXianShiYinCang
    },




    // 模态框
    {
      path: '/tobo/MoTaiKuang',
      name: 'MoTaiKuang',
      component: MoTaiKuang
    },
    // 轮播图
    {
      path: '/tobo/boLunBoTu',
      name: 'boLunBoTu',
      component: boLunBoTu
    },
    // 栅格系统
    {
      path: '/tobo/ZhaGeXiTong',
      name: 'ZhaGeXiTong',
      component: ZhaGeXiTong
    },
    // 基础表单
    {
      path: '/tobo/JiChuBiaoDan',
      name: 'JiChuBiaoDan',
      component: JiChuBiaoDan
    },
    // 验证提示
    {
      path: '/tobo/YanZhengTiShi',
      name: 'YanZhengTiShi',
      component: YanZhengTiShi
    },
    // 响应式布局
    {
      path: '/tobo/XiangYingShiBuJu',
      name: 'XiangYingShiBuJu',
      component: XiangYingShiBuJu
    },
    // Bootstrap按钮
    {
      path: '/tobo/boAnNiu',
      name: 'boAnNiu',
      component: boAnNiu
    },
    // Bootstrap表格
    {
      path: '/tobo/boBiaoGe',
      name: 'boBiaoGe',
      component: boBiaoGe
    },
    // 输入框额外元素
    {
      path: '/tobo/ShuRuKuangYuanSu',
      name: 'ShuRuKuangYuanSu',
      component: ShuRuKuangYuanSu
    },
    // 栅格系统综合实例
    {
      path: '/tobo/ZhaGeXiTongbos',
      name: 'ZhaGeXiTongbos',
      component: ZhaGeXiTongbos
    },

    
    {
      path: '/project/XiaoMiShangCheng',
      name: 'XiaoMiShangCheng',
      component: XiaoMiShangCheng
    },
    {
      path: '/project/TianTianShengXian',
      name: 'TianTianShengXian',
      component: TianTianShengXian
    },
    
  ]
})
