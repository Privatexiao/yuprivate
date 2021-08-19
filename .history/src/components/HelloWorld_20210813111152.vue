<template>
  <nav class="navbar navbar-default" role="navigation">  
    <div class="container-fluid">  
      <!-- Brand and toggle get grouped for better mobile display -->  
      <div class="navbar-header">  
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">  
          <span class="sr-only">Toggle navigation</span>  
          <span class="icon-bar"></span>  
          <span class="icon-bar"></span>  
          <span class="icon-bar"></span>  
        </button>  
        <!-- <a class="navbar-brand" href="#">{{ msg }}</a>   -->
      </div>  
  
      <!-- Collect the nav links, forms, and other content for toggling -->  
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">  
        <ul class="nav navbar-nav"> 
          <li><a href="#" style="margin: 0;padding: 5px;"><img src="@/assets/img/LOGO.png" style="border-radius: 50%;width: 40px;height: 40px;"></a></li>
          <li class="active"><a href="#">Private</a></li>  
          <li><a href="#" style="color:#02b7ff;">你好</a></li>  
          <li class="dropdown">  
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Css <span class="caret"></span></a>  
            <ul class="dropdown-menu" role="menu">  
              <li><a @click="toCss_fd" style="padding-right:50px">浮动</a></li> 
              <li><a @click="toCss_ccdw">层次定位</a></li>
              <li><a @click="toCss_jddw">绝对定位</a></li>
              <li><a @click="toCss_xddw">相对定位</a></li>
              <li><a @click="toCss_jtdw">静态定位</a></li>
              <li><a @click="toCss_bkys">边框样式</a></li>
              <li><a @click="toCss_txys">图形样式</a></li>
              <li><a @click="toCss_llbj">两栏布局</a></li>
              <li><a @click="toCss_dlbj">多栏布局</a></li>
              <li><a @click="toCss_spczjz">水平垂直居中</a></li>
              <li><a @click="toCss_gdsx">过渡属性</a></li>
              <li><a @click="toCss_cssbx">CSS变形</a></li>
              <li><a @click="toCss_cssnbj">CSS内边距</a></li>
              <li><a @click="toCss_ycjq">溢出与剪切</a></li>
              <li><a @click="toCss_sfy">双飞翼布局</a></li>
              <li><a @click="toCss_xsyc">对象的显示与隐藏</a></li>
              <li class="divider"></li>  
              <li><a @click="toCss_kxqb">块元素与行内元素区别</a></li>  
              <li class="divider"></li>  
              <li><a @click="toCss_kxzh">块元素和行内元素的转换</a></li>  
            </ul>  
          </li>

          <li class="dropdown">  
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">javaScript <span class="caret"></span></a>  
            <ul class="dropdown-menu" role="menu">  
              <li><a @click="tojs_dsq">定时器</a></li>  
              <li><a href="/static/public/LunBoTu.html">轮播图</a></li>
              <li><a href="/static/public/GunLunShiJian.html">滚轮事件</a></li>
              <li><a href="/static/public/ErJiCaiDan.html">二级菜单</a></li> 
              <li><a @click="tojs_sbzb">获取鼠标坐标</a></li>  
              <li><a @click="tojs_sbyd">div跟随鼠标移动</a></li>  
              <li class="divider"></li>  
              <li><a @click="tojs_jpkz">键盘控制div移动</a></li>  
              <li class="divider"></li>  
              <li><a href="/static/public">DOM删除添加元素</a></li> 
            </ul>  
          </li>
          <ul class="nav navbar-nav navbar-left">  
          <li class="dropdown">  
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">jQuery <span class="caret"></span></a>  
            <ul class="dropdown-menu" role="menu">  
              <li><a href="#">内容过滤器</a></li>  
              <li><a href="#">修改元素内容</a></li>  
              <li><a href="#">邮件列表管理</a></li>  
              <li class="divider"></li>  
              <li><a href="#">仿QQ好友列表</a></li>  
              <li class="divider"></li>  
              <li><a href="#">jQuery显示与隐藏</a></li>  
            </ul>  
          </li>
          
          <li class="dropdown">  
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Bootstrap <span class="caret"></span></a>  
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">模态框</a></li>  
              <li><a href="#">轮播图</a></li>
              <li><a href="#">栅格系统</a></li>  
              <li><a href="#">基础表单</a></li>
              <li><a href="#">验证提示</a></li>
              <li><a href="#">响应式布局</a></li>  
              <li><a href="#">Bootstrap按钮</a></li>
              <li><a href="#">Bootstrap表格</a></li>
              <li class="divider"></li>  
              <li><a href="#">输入框额外元素</a></li>  
              <li class="divider"></li>  
              <li><a href="#">栅格系统综合实例</a></li>  
            </ul>  
          </li>
          <li class="dropdown">  
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Vue.js <span class="caret"></span></a>  
            <ul class="dropdown-menu" role="menu">  
              <li><a href="#">过滤器</a></li>  
              <li><a href="#">遍历数组</a></li>  
              <li><a href="#">购物车实例</a></li>  
              <li class="divider"></li>  
              <li><a href="#">Vue计算方法</a></li>  
              <li class="divider"></li>  
              <li><a href="#">Vue计算属性</a></li>  
            </ul>  
          </li>
          <li class="dropdown">  
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Project<span class="caret"></span></a>  
            <ul class="dropdown-menu" role="menu">  
              <li><a href="#">小米商城</a></li>  
              <li><a href="#">天天生鲜</a></li>  
              <li><a href="#">客服助手</a></li>
              <li class="divider"></li>  
              <li><a href="#">高校网站首页</a></li>  
              <li><a href="#">手机端外卖助手</a></li>
              <li><a href="#">影院订票系统页面</a></li> 
            </ul>  
          </li> 
        </ul>  
        </ul> 
        <form class="navbar-form navbar-right" role="search">  
          <div class="form-group">  
            <input type="text" class="form-control" placeholder="Search">  
          </div>  
          <button type="submit" class="btn btn-default">Submit</button>  
        </form>  
      </div><!-- /.navbar-collapse -->  
    </div><!-- /.container-fluid -->  
  </nav> 
</template>

<script>
  export default {
  name: 'HelloWorld',
  // data () {
  //   return {
  //     msg: '哈哈'
  //   }
  // },
  methods:{
    // 浮动
    toCss_fd(){
      this.$router.push('/toCss/FuDong')
    },
    // 层次定位跳转
    toCss_ccdw(){
      this.$router.push('/toCss/CengCiDingWei')
    },
    // 绝对定位
    toCss_jddw(){
      this.$router.push('/toCss/JueDuiDingWei')
    },
    // 相对定位
    toCss_xddw(){
      this.$router.push('/toCss/XiangDuiDingWei')
    },
    // 静态定位
    toCss_jtdw(){
      this.$router.push('/toCss/JingTaiDingWei')
    },
    // 边框样式
    toCss_bkys(){
      this.$router.push('/toCss/BianKuangYangShi')
    },
    // 图形样式
    toCss_txys(){
      this.$router.push('/toCss/TuXingYangShi')
    },
    // 两栏布局
    toCss_llbj(){
      this.$router.push('/toCss/LiangLanBuJu')
    },
    // 多栏布局
    toCss_dlbj(){
      this.$router.push('/toCss/DuoLanBuJu')
    },
    // 水平垂直居中
    toCss_spczjz(){
      this.$router.push('/toCss/ShuiPingChui')
    },
    // 过渡属性
    toCss_gdsx(){
      this.$router.push('/toCss/GuoDuShuXing')
    },
    // css变形
    toCss_cssbx(){
      this.$router.push('/toCss/cssBianXing')
    },
    // css内边距
    toCss_cssnbj(){
      this.$router.push('/toCss/cssNeiBianJu')
    },
    // 溢出与剪切
    toCss_ycjq(){
      this.$router.push('/toCss/YiChuYuJianQie')
    },
    // 双飞翼布局
    toCss_sfy(){
      this.$router.push('/toCss/ShuangFeiYi')
    },
    // 对象的显示与隐藏
    toCss_xsyc(){
      this.$router.push('/toCss/XianShiYuYinCang')
    },
    // 块元素与行内元素区别
    toCss_kxqb(){
      this.$router.push('/toCss/KuaiHeXingQuBie')
    },
    // 块元素和行内元素的转换
    toCss_kxzh(){
      this.$router.push('/toCss/KuaiZhuanHang')
    },



    // 定时器
    tojs_dsq(){
      this.$router.push('/tojs/DingShiQi')
    },
    // 获取鼠标坐标
    tojs_sbzb(){
      this.$router.push('/tojs/ShuBiaoZuoBiao')
    },
    // div跟随鼠标移动
    tojs_sbyd(){
      this.$router.push('/tojs/ShuBiaoYiDong')
    },
    // 键盘控制div移动
    tojs_jpkz(){
      this.$router.push('/tojs/JianPanKongZhi')
    },
    
    
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}


</style>
