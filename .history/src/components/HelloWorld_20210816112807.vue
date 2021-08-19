<template>
<body>
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
        <a class="navbar-brand priboss" href="#"><li><img src="@/assets/img/LOGO.png" style="border-radius: 50%;width: 40px;height: 40px;"></li>{{ msg }}</a>  
      </div>  
  
      <!-- Collect the nav links, forms, and other content for toggling -->  
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">  
        <ul class="nav navbar-nav"> 
          
          <!-- <li class="active"><a href="#">Private</a></li>   -->
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
              <li><a href="./static/public/LunBoTu.html">轮播图</a></li>
              <li><a href="./static/public/GunLunShiJian.html">滚轮事件</a></li>
              <li><a href="./static/public/ErJiCaiDan.html">二级菜单</a></li> 
              <li><a @click="tojs_sbzb">获取鼠标坐标</a></li>  
              <li><a @click="tojs_sbyd">div跟随鼠标移动</a></li>  
              <li class="divider"></li>  
              <li><a @click="tojs_jpkz">键盘控制div移动</a></li>  
              <li class="divider"></li>  
              <li><a href="./static/public/domYuanSu.html">DOM删除添加元素</a></li> 
            </ul>  
          </li>
          <ul class="nav navbar-nav navbar-left">  
          <li class="dropdown">  
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">jQuery <span class="caret"></span></a>  
            <ul class="dropdown-menu" role="menu">  
              <li><a @click="tojq_nrglq">内容过滤器</a></li>  
              <li><a @click="tojq_xgysnr">修改元素内容</a></li>  
              <li><a @click="tojq_yjlb">邮件列表管理</a></li>  
              <li class="divider"></li>  
              <li><a @click="tojq_hylb">仿QQ好友列表</a></li>  
              <li class="divider"></li>  
              <li><a @click="tojq_jqxsyyc">jQuery显示与隐藏</a></li>  
            </ul>  
          </li>
          
          <li class="dropdown">  
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Bootstrap <span class="caret"></span></a>  
            <ul class="dropdown-menu" role="menu">
              <li><a @click="tobo_mtk">模态框</a></li>  
              <li><a @click="tobo_bolbt">轮播图</a></li>
              <li><a @click="tobo_sgxt">栅格系统</a></li>  
              <li><a @click="tobo_jcbd">基础表单</a></li>
              <li><a @click="tobo_yzts">验证提示</a></li>
              <li><a @click="tobo_xysbj">响应式布局</a></li>  
              <li><a @click="tobo_boan">Bootstrap按钮</a></li>
              <li><a @click="tobo_bobg">Bootstrap表格</a></li>
              <li class="divider"></li>  
              <li><a @click="tobo_srkys">输入框额外元素</a></li>  
              <li class="divider"></li>  
              <li><a @click="tobo_sgxkbos">栅格系统综合实例</a></li>  
            </ul>  
          </li>
          <li class="dropdown">  
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Vue.js <span class="caret"></span></a>  
            <ul class="dropdown-menu" role="menu">  
              <li><a href="./static/public/GuoLuQi.html">过滤器</a></li>  
              <li><a href="./static/public/BianLiShuZu.html">遍历数组</a></li>  
              <li><a href="./static/public/GouWuChe.html">购物车实例</a></li>  
              <li class="divider"></li>  
              <li><a href="./static/public/JiSuanFangFa.html">Vue计算方法</a></li>  
              <li class="divider"></li>  
              <li><a href="./static/public/JiSuanShuXing.html">Vue计算属性</a></li>  
            </ul>  
          </li>
          <li class="dropdown">  
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Project<span class="caret"></span></a>  
            <ul class="dropdown-menu" role="menu">  
              <li><a @click="xmsc">小米商城</a></li>  
              <li><a @click="ttsx">天天生鲜</a></li>  
              <li><a @click="kfzs">客服助手</a></li>
              <li class="divider"></li>  
              <li><a @click="gxwz">高校网站首页</a></li>  
              <li><a @click="wmzs">手机端外卖助手</a></li>
              <li><a href="./static/public/YingYuanDingPiao.html">影院订票系统页面</a></li> 
            </ul>  
          </li> 
          <li class="dropdown">  
            <a href="https://github.com/Privatexiao/web">Github</a>  
          </li> 
        </ul>  
        </ul> 
        <form class="navbar-form navbar-right" role="search">  
          <div class="form-group">  
            <input type="text" class="form-control" placeholder="Search">  
          </div>  
          <button type="submit" class="btn btn-default submit1">搜索</button>  
        </form>  
      </div><!-- /.navbar-collapse -->  
    </div><!-- /.container-fluid -->  
  </nav> 


  <header id="intro">
		<div class="container">
			<div class="table">
				<div class="header-text">
					<div class="row">
						<div class="col-md-12 text-center">
							<h3 class="light white">我的前端开发日记</h3>
							<h1 class="white typed">Working on editing</h1>
							<span class="typed-cursor">|</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>


<section class="two_sect">
		<!-- <div class="cut cut-top"></div> -->
		<div class="container">
			<div class="row intro-tables">
				<div class="col-md-4">
					<div class="intro-table intro-table-hover">
						<h5 class="white heading hide-hover section_h5">网站设计</h5>
						<div class="bottom">
							<h4 class="white heading small-heading no-margin regular">网站设计要能充分吸引访问者的注意力，让访问者产生视觉上的愉悦感</h4>
							<h4 class="white heading small-pt">网站设计是将策划案中的内容、网站的主题模式;看设计稿，按照W3C规范用HTML将其制作成网页格式。</h4>
							<a href="#" class="btn btn-white-fill expand">Start</a>
						</div>
					</div>
          
				</div>
				<div class="col-md-4">
					<div class="intro-table intro-table-hover">
						<h5 class="white heading hide-hover section_h5">高效</h5>
						<div class="bottom">
							<h4 class="white heading small-heading no-margin regular">热爱它带给你的快乐</h4>
							<h4 class="white heading small-pt">热爱跨浏览器开发带来的挑战、热爱互联网技术的种种异端，热爱业内的同行，热爱你的工具。</h4>
							<a href="#" class="btn btn-white-fill expand">Start</a>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="intro-table intro-table-hover">
						<h5 class="white heading hide-hover section_h5">思考</h5>
						<div class="bottom">
							<h4 class="white heading small-heading no-margin regular">关注“底层协议”</h4>
							<h4 class="white heading small-pt">即HTTP、第三方应用、系统对接、制造工具、工作流程等，这时思考的重点已经脱离了“切页面”，变为“出方案“。</h4>
							<a href="#" class="btn btn-white-fill expand">Start</a>
						</div>
					</div>

				</div>
			</div>
		</div>
	</section>


<section id="services" class="section section-padded">
		<div class="container">
			<div class="row text-center title">
				<h2 class="services_h2"><a href="https://cn.vuejs.org/">Vue.js</a></h2>
				<h4 class="light muted">一套用于构建用户界面的渐进式框架</h4>
			</div>
			<div class="row services">
				<div class="col-md-4">
					<div class="service">
						<div class="icon-holder">
							<img src="@/assets/img/img/icons/heart-blue.png" alt="" class="icon">
						</div>
						<h4 class="heading">易用</h4>
						<p class="description">组件系统是 Vue 的另一个重要概念，因为它是一种抽象，允许我们使用小型、独立和通常可复用的组件构建大型应用。</p>
					</div>
				</div>
				<div class="col-md-4">
					<div class="service">
						<div class="icon-holder">
							<img src="@/assets/img/img/icons/guru-blue.png" alt="" class="icon">
						</div>
						<h4 class="heading">灵活</h4>
						<p class="description">不断繁荣的生态系统，可以在一个库和一套完整框架之间自如伸缩。</p>
					</div>
				</div>
				<div class="col-md-4">
					<div class="service">
						<div class="icon-holder">
							<img src="@/assets/img/img/icons/weight-blue.png" alt="" class="icon">
						</div>
						<h4 class="heading">高效</h4>
						<p class="description">20kB min+gzip 运行大小<br/>超快虚拟DOM<br/>最省心的优化</p>
					</div>
				</div>
			</div>
		</div>
		<div class="cut cut-bottom"></div>
	</section>
</body>
</template>

<script>

  export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Private'
    }
  },
  mounted(){
    jQuery(function($) {
	"use strict";
	// Author Code Here

	var owlPricing;
	var ratio = 2;

	// Window Load
	$(window).load(function() {
		// Preloader
		$('.intro-tables, .parallax, header').css('opacity', '0');
		$('.preloader').addClass('animated fadeOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
			$('.preloader').hide();
			$('.parallax, header').addClass('animated fadeIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
				$('.intro-tables').addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
			});
		});

		// Header Init
		if ($(window).height() > $(window).width()) {
			var ratio = $('.parallax').width() / $('.parallax').height();
			$('.parallax img').css('height', ($(window).height()) + 'px');
			$('.parallax img').css('width', $('.parallax').height() * ratio + 'px');
		}

		$('header').height($(window).height() + 80);
		$('section .cut').each(function() {
			if ($(this).hasClass('cut-top'))
				$(this).css('border-right-width', $(this).parent().width() + "px");
			else if ($(this).hasClass('cut-bottom'))
				$(this).css('border-left-width', $(this).parent().width() + "px");
		});

		// Sliders Init
		$('.owl-schedule').owlCarousel({
			singleItem: true,
			pagination: true
		});
		$('.owl-testimonials').owlCarousel({
			singleItem: true,
			pagination: true
		});
		$('.owl-twitter').owlCarousel({
			singleItem: true,
			pagination: true
		});

		// Navbar Init
		$('nav').addClass('original').clone().insertAfter('nav').addClass('navbar-fixed-top').css('position', 'fixed').css('top', '0').css('margin-top', '0').removeClass('original');
		$('.mobile-nav ul').html($('nav .navbar-nav').html());
		$('nav.navbar-fixed-top .navbar-brand img').attr('src', $('nav.navbar-fixed-top .navbar-brand img').data("active-url"));

		// Typing Intro Init
		$(".typed").typewriter({
			speed: 60
		});

		// Popup Form Init
		var i = 0;
		var interval = 0.15;
		$('.popup-form .dropdown-menu li').each(function() {
			$(this).css('animation-delay', i + "s");
			i += interval;
		});
		$('.popup-form .dropdown-menu li a').click(function(event) {
			event.preventDefault();
			$(this).parent().parent().prev('button').html($(this).html());
		});

		// Onepage Nav
		$('.navbar.navbar-fixed-top .navbar-nav').onePageNav({
			currentClass: 'active',
			changeHash: false,
			scrollSpeed: 400,
			filter: ':not(.btn)'
		});
	});
	// Window Scroll
	function onScroll() {
		if ($(window).scrollTop() > 50) {
			$('nav.original').css('opacity', '0');
			$('nav.navbar-fixed-top').css('opacity', '1');
		} else {
			$('nav.original').css('opacity', '1');
			$('nav.navbar-fixed-top').css('opacity', '0');
		}
	}

	window.addEventListener('scroll', onScroll, false);

	// Window Resize
	$(window).resize(function() {
		$('header').height($(window).height());
	});

	// Pricing Box Click Event
	$('.pricing .box-main').click(function() {
		$('.pricing .box-main').removeClass('active');
		$('.pricing .box-second').removeClass('active');
		$(this).addClass('active');
		$(this).next($('.box-second')).addClass('active');
		$('#pricing').css("background-image", "url(" + $(this).data('img') + ")");
		$('#pricing').css("background-size", "cover");
	});

	// Mobile Nav
	$('body').on('click', 'nav .navbar-toggle', function() {
		event.stopPropagation();
		$('.mobile-nav').addClass('active');
	});

	$('body').on('click', '.mobile-nav a', function(event) {
		$('.mobile-nav').removeClass('active');
		if(!this.hash) return;
		event.preventDefault();
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			event.stopPropagation();
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

	$('body').on('click', '.mobile-nav a.close-link', function(event) {
		$('.mobile-nav').removeClass('active');
		event.preventDefault();
	});

	$('body').on('click', 'nav.original .navbar-nav a:not([data-toggle])', function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			event.stopPropagation();
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

	function centerModal() {
		$(this).css('display', 'block');
		var $dialog = $(this).find(".modal-dialog"),
			offset = ($(window).height() - $dialog.height()) / 2,
			bottomMargin = parseInt($dialog.css('marginBottom'), 10);

		// Make sure you don't hide the top part of the modal w/ a negative margin
		// if it's longer than the screen height, and keep the margin equal to 
		// the bottom margin of the modal
		if (offset < bottomMargin) offset = bottomMargin;
		$dialog.css("margin-top", offset);
	}

	$('.modal').on('show.bs.modal', centerModal);

	$('.modal-popup .close-link').click(function(event){
		event.preventDefault();
		$('#modal1').modal('hide');
	});

	$(window).on("resize", function() {
		$('.modal:visible').each(centerModal);
	});
});

  },
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
    


    // 内容过滤器
    tojq_nrglq(){
      this.$router.push('/tojq/NeiRongGuoLuQi')
    },
    // 修改元素内容
    tojq_xgysnr(){
      this.$router.push('/tojq/XiuGaiYuanSu')
    },
    // 邮件列表管理
    tojq_yjlb(){
      this.$router.push('/tojq/YouJianLieBiao')
    },
    // 仿QQ好友列表
    tojq_hylb(){
      this.$router.push('/tojq/HaoYouLieBiao')
    },
    // jQuery显示与隐藏
    tojq_jqxsyyc(){
      this.$router.push('/tojq/jqXianShiYinCang')
    },



    // 模态框
    tobo_mtk(){
      this.$router.push('/tobo/MoTaiKuang')
    },
    // 轮播图
    tobo_bolbt(){
      this.$router.push('/tobo/boLunBoTu')
    },
    // 栅格系统
    tobo_sgxt(){
      this.$router.push('/tobo/ZhaGeXiTong')
    },
    // 基础表单
    tobo_jcbd(){
      this.$router.push('/tobo/JiChuBiaoDan')
    },
    // 验证提示
    tobo_yzts(){
      this.$router.push('/tobo/YanZhengTiShi')
    },
    // 响应式布局
    tobo_xysbj(){
      this.$router.push('/tobo/XiangYingShiBuJu')
    },
    // Bootstrap按钮
    tobo_boan(){
      this.$router.push('/tobo/boAnNiu')
    },
    // Bootstrap表格
    tobo_bobg(){
      this.$router.push('/tobo/boBiaoGe')
    },
    // 输入框额外元素
    tobo_srkys(){
      this.$router.push('/tobo/ShuRuKuangYuanSu')
    },
    // 栅格系统综合实例  
    tobo_sgxkbos(){
      this.$router.push('/tobo/ZhaGeXiTongbos')
    },


    // 小米商城
    xmsc(){
      this.$router.push('/project/XiaoMiShangCheng')
    },
    // 天天生鲜
    ttsx(){
      this.$router.push('/project/TianTianShengXian')
    },
    // 客服助手
    kfzs(){
      this.$router.push('/project/KeFuZhuShou')
    },
    // 高校网站首页
    gxwz(){
      this.$router.push('/project/GaoXiaoWangZhan')
    },
    // 手机端外卖助手
    wmzs(){
      this.$router.push('/project/WaiMaiZhuShou')
    },
  }

}

</script>


<style scoped src="../assets/css/indexs.css"></style>


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
