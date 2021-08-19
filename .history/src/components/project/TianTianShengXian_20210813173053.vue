<template>
<body>
    <div class="header_con">
		<div class="header">
			<div class="welcome fl">欢迎来到天天生鲜</div>
			<div class="fr">
				<div class="login_info fl">
					欢迎你<em>张 三</em>
				</div>
				<div class="login_btn fl">
					<a href="javaScript:">登录</a>
					<span>|</span>
					<a href="javaScript:">注册</a>
				</div>
				<div class="user_link fl">
					<span class="span_1">|</span>
					<a href="javaScript:">用户中心</a>
					<span>|</span>
					<a href="javaScript:">我的购物车</a>
					<span>|</span>
					<a href="javaScript:">我的订单</a>
				</div>
			</div>
		</div>
	</div>
	<div class="search_bar clearfix">
		<a href="javaScript:" class="logo fl"><img src="@/assets/img/ttsximg/111.png"></a>
		<div class="search_con fl">
			<input type="text" class="input_text fl" name="" placeholder="搜索商品">
			<input type="button" class="input_btn fr" name="" value="搜索">
		</div>
		<div class="guest_cart fr">
			<a href="javaScript:" class="cart_name fl">我的购物车</a>
			<div class="goods_count fl" id="show_count">1</div>
		</div>
	</div>
	
	<div class="navbar_con">
		<div class="navbar">
			<h1 class="fl">全部商品分类</h1>
			<ul class="navlist fl">
				<li><a href="">首页</a></li>
				<li class="interval">|</li>
				<li><a href="">手机生鲜</a></li>
				<li class="interval">|</li>
				<li><a href="">抽奖</a></li>
			</ul>
		</div>
	</div>
	
	<div class="center_con clearfix">
		<ul class="subnav fl">
			<li><a href="#model01" class="fruit">新鲜水果</a></li>
			<li><a href="#model02" class="seafood">海鲜水产</a></li>
			<li><a href="#model03" class="meet">猪肉羊肉</a></li>
			<li><a href="#model04" class="egg">禽类蛋品</a></li>
			<li><a href="#model05" class="vegetables">新鲜蔬菜</a></li>
			<li><a href="#model06" class="ice">速冻食品</a></li>
		</ul>
		<div class="slide fl">
			<ul class="slide_pics">
				<li><img src="@/assets/img/ttsximg/b.png" alt="幻灯片"></li>
				<li><img src="@/assets/img/ttsximg/a.png" alt="幻灯片"></li>
				<li><img src="@/assets/img/ttsximg/b.png" alt="幻灯片"></li>
				<li><img src="@/assets/img/ttsximg/c.png" alt="幻灯片"></li>
			</ul>
			<div class="prev"></div>
			<div class="next"></div>
			<ul class="points">
				<li></li>
				<li></li>
				<li class="active"></li>
				<li></li>
			</ul>
		</div>
		<div class="adv fl">
			<a href=""><img src="@/assets/img/ttsximg/sl.jpg"></a>
			<a href=""><img src="@/assets/img/ttsximg/pt.jpg"></a>
		</div>
	</div>
	
	<div class="list_model">
		<div class="list_title clearfix"><br/>
			<h3 class="fl" id="model01">新鲜水果</h3>
			<div class="subtitle fl">
				<span>|</span>
				<a href="">鲜芒</a>
				<a href="">加州提子</a>
				<a href="">亚马逊牛油果</a>
			</div>
			<a href="#" class="goods_more fr" id="fruit_more">查看更多 ></a>
		</div>
		<div class="goods_con clearfix">
			<div class="goods_banner fl"><img src="@/assets/img/ttsximg/a.jpg"></div>
			<ul class="goods_list fl">
				<li>
					<h4><a href="">草莓</a></h4>
					<a href=""><img src="@/assets/img/ttsximg/cm.jpg"></a>
					<div class="prize">￥ 30.00</div>
				</li>
				<li>
					<h4><a href="">葡萄</a></h4>
					<a href=""><img src="@/assets/img/ttsximg/pt.jpg"></a>
					<div class="prize">￥ 5.50</div>
				</li>
				<li>
					<h4><a href="">柠檬</a></h4>
					<a href=""><img src="@/assets/img/ttsximg/nm.jpg"></a>
					<div class="prize">￥ 3.90</div>
				</li>
				<li>
					<h4><a href="">奇异果</a></h4>
					<a href=""><img src="@/assets/img/ttsximg/qyg.jpg"></a>
					<div class="prize">￥ 26.80</div>
				</li>
			</ul>
		</div>
	</div>

	<div class="list_model">
		<div class="list_title clearfix">
			<h3 class="fl" id="model02">海鲜水产</h3>
			<div class="subtitle fl">
				<span>|</span>
				<a href="#">河虾</a>
				<a href="#">扇贝</a>				
			</div>
			<a href="#" class="goods_more fr">查看更多 ></a>
		</div>

		<div class="goods_con clearfix goods_con2">
			<div class="goods_banner fl"><img src="@/assets/img/ttsximg/b.jpg"></div>
			<ul class="goods_list fl">
				<li>
					<h4><a href="#">青岛野生海捕大青虾</a></h4>
					<a href="#"><img src="@/assets/img/ttsximg/pt.jpg"></a>
					<div class="prize">¥ 48.00</div>
				</li>
				<li>
					<h4><a href="#">扇贝</a></h4>
					<a href="#"><img src="@/assets/img/ttsximg/nm.jpg"></a>
					<div class="prize">¥ 46.00</div>
				</li>
				<li>
					<h4><a href="#">冷冻秋刀鱼</a></h4>
					<a href="#"><img src="@/assets/img/ttsximg/qyg.jpg"></a>
					<div class="prize">¥ 19.00</div>
				</li>
				<li>
					<h4><a href="#">基围虾</a></h4>
					<a href="#"><img src="@/assets/img/ttsximg/cm.jpg"></a>
					<div class="prize">¥ 25.00</div>
				</li>
			</ul>
		</div>
	</div>
	
	<div class="list_model">
		<div class="list_title clearfix">
			<h3 class="fl" id="model03">猪牛羊肉</h3>
			<div class="subtitle fl">
				<span>|</span>
				<a href="#">鲜芒</a>
				<a href="#">加州提子</a>
				<a href="#">亚马逊牛油果</a>
			</div>
			<a href="#" class="goods_more fr">查看更多 ></a>
		</div>

		<div class="goods_con clearfix goods_con2">
			<div class="goods_banner fl"><img src="@/assets/img/ttsximg/c.jpg"></div>
			<ul class="goods_list fl">
				<li>
					<h4><a href="#">维多利亚葡萄维多利亚葡萄维多利亚葡萄维多利亚葡萄</a></h4>
					<a href="#"><img src="@/assets/img/ttsximg/sl.jpg"></a>
					<div class="prize">¥ 38.00</div>
				</li>
				<li>
					<h4><a href="#">维多利亚葡萄</a></h4>
					<a href="#"><img src="@/assets/img/ttsximg/xj.jpg"></a>
					<div class="prize">¥ 38.00</div>
				</li>
				<li>
					<h4><a href="#">维多利亚葡萄</a></h4>
					<a href="#"><img src="@/assets/img/ttsximg/xg.jpg"></a>
					<div class="prize">¥ 38.00</div>
				</li>
				<li>
					<h4><a href="#">维多利亚葡萄</a></h4>
					<a href="#"><img src="@/assets/img/ttsximg/sl.jpg"></a>
					<div class="prize">¥ 38.00</div>
				</li>
			</ul>
		</div>
	</div>

	<div class="list_model">
		<div class="list_title clearfix">
			<h3 class="fl" id="model04">禽类蛋品</h3>
			<div class="subtitle fl">
				<span>|</span>
				<a href="#">鲜芒</a>
				<a href="#">加州提子</a>
				<a href="#">亚马逊牛油果</a>
			</div>
			<a href="#" class="goods_more fr">查看更多 ></a>
		</div>

		<div class="goods_con clearfix goods_con2">
			<div class="goods_banner fl"><img src="@/assets/img/ttsximg/d.png"></div>
			<ul class="goods_list fl">
				<li>
					<h4><a href="#">维多利亚葡萄维多利亚葡萄维多利亚葡萄维多利亚葡萄</a></h4>
					<a href="#"><img src="@/assets/img/ttsximg/xg.jpg"></a>
					<div class="prize">¥ 38.00</div>
				</li>
				<li>
					<h4><a href="#">维多利亚葡萄</a></h4>
					<a href="#"><img src="@/assets/img/ttsximg/sl.jpg"></a>
					<div class="prize">¥ 38.00</div>
				</li>
				<li>
					<h4><a href="#">维多利亚葡萄</a></h4>
					<a href="#"><img src="@/assets/img/ttsximg/pt.jpg"></a>
					<div class="prize">¥ 38.00</div>
				</li>
				<li>
					<h4><a href="#">维多利亚葡萄</a></h4>
					<a href="#"><img src="@/assets/img/ttsximg/nm.jpg"></a>
					<div class="prize">¥ 38.00</div>
				</li>
			</ul>
		</div>
	</div>

	<div class="list_model">
		<div class="list_title clearfix">
			<h3 class="fl" id="model05">新鲜蔬菜</h3>
			<div class="subtitle fl">
				<span>|</span>
				<a href="#">鲜芒</a>
				<a href="#">加州提子</a>
				<a href="#">亚马逊牛油果</a>
			</div>
			<a href="#" class="goods_more fr">查看更多 ></a>
		</div>

		<div class="goods_con clearfix goods_con2">
			<div class="goods_banner fl"><img src="@/assets/img/ttsximg/c.jpg"></div>
			<ul class="goods_list fl">
				<li>
					<h4><a href="#">维多利亚葡萄维多利亚葡萄维多利亚葡萄维多利亚葡萄</a></h4>
					<a href="#"><img src="@/assets/img/ttsximg/sl.jpg"></a>
					<div class="prize">¥ 38.00</div>
				</li>
				<li>
					<h4><a href="#">维多利亚葡萄</a></h4>
					<a href="#"><img src="@/assets/img/ttsximg/cm.jpg"></a>
					<div class="prize">¥ 38.00</div>
				</li>
				<li>
					<h4><a href="#">维多利亚葡萄</a></h4>
					<a href="#"><img src="@/assets/img/ttsximg/nm.jpg"></a>
					<div class="prize">¥ 38.00</div>
				</li>
				<li>
					<h4><a href="#">维多利亚葡萄</a></h4>
					<a href="#"><img src="@/assets/img/ttsximg/xg.jpg"></a>
					<div class="prize">¥ 38.00</div>
				</li>
			</ul>
		</div>
	</div>

	<div class="list_model">
		<div class="list_title clearfix">
			<h3 class="fl" id="model06">速冻食品</h3>
			<div class="subtitle fl">
				<span>|</span>
				<a href="#">鲜芒</a>
				<a href="#">加州提子</a>
				<a href="#">亚马逊牛油果</a>
			</div>
			<a href="#" class="goods_more fr">查看更多 ></a>
		</div>

		<div class="goods_con clearfix goods_con2">
			<div class="goods_banner fl"><img src="@/assets/img/ttsximg/a.jpg"></div>
			<ul class="goods_list fl">
				<li>
					<h4><a href="#">维多利亚葡萄维多利亚葡萄维多利亚葡萄维多利亚葡萄</a></h4>
					<a href="#"><img src="@/assets/img/ttsximg/mht.jpg"></a>
					<div class="prize">¥ 38.00</div>
				</li>
				<li>
					<h4><a href="#">维多利亚葡萄</a></h4>
					<a href="#"><img src="@/assets/img/ttsximg/sl.jpg"></a>
					<div class="prize">¥ 38.00</div>
				</li>
				<li>
					<h4><a href="#">维多利亚葡萄</a></h4>
					<a href="#"><img src="@/assets/img/ttsximg/xg.jpg"></a>
					<div class="prize">¥ 38.00</div>
				</li>
				<li>
					<h4><a href="#">维多利亚葡萄</a></h4>
					<a href="#"><img src="@/assets/img/ttsximg/xj.jpg"></a>
					<div class="prize">¥ 38.00</div>
				</li>
			</ul>
		</div>
	</div>
	
	<div class="footer">
		<div class="foot_link">
			<a href="#">关于我们</a>
			<span>|</span>
			<a href="#">联系我们</a>
			<span>|</span>
			<a href="#">招聘人才</a>
			<span>|</span>
			<a href="#">友情链接</a>		
		</div>
		<p>CopyRight © 2016 北京天天生鲜信息技术有限公司 All Rights Reserved</p>
		<p>电话：010-****888    京ICP备*******8号</p>
	</div>
</body>
</template> 
<script type="text/javascript">
        export default {   
                mounted() {
                    
                                
                }
                }

</script>


<style lang="css" scoped>
    /* @import "../../assets/css/ttsx.css"; */
    @charset "utf-8";
/* CSS Document */
/* 把标签默认的间距设为0 */
body,ul,ol,p,h1,h2,h3,h4,h5,h6,dl,dd,select,input,textarea,form{
	margin:0;padding:0
}

/* 让h标签文字大小继承body的文字设置 */
h1,h2,h3,h4,h5,h6{
	font-size:100%;
	font-weight:normal;
}

/* 去掉列表默认的图标 */
ul,ol{
	list-style:none;
}

/* 去掉em默认的斜体 */
em{
	font-style: normal;
}

/* 去掉a标签默认的下划线 */
a{
	text-decoration:none;
}


/* 去掉加链接时产生的框线 */
img{
	border:0;
}

/* 清除浮动 */
.clearfix:before,.clearfix:after{
	content:"";
	display:table
}
.clearfix:after{
	clear:both;
}
.clearfix{
	zoom:1;
}

/* 浮动 */
.fl{
	float:left;
}
.fr{
	float:right;
}
body{
	font-family: "微软雅黑";
	font-size: 12px;
	clear: #666;
	min-width: 1500px;
}
html,body{
	height: 100%;
}
/*顶部样式*/
.header_con{
	background-color: #f7f7f7;
	height: 29px;
	border-bottom: 1px solid #dddddd;
}
.welcome,.login_info,.login_btn,.user_link{
	line-height: 29px;
}
.login_info{
	display: none;
}
.login_info em{
	color: #ff8800;
}
.login_btn a,.user_link a:hover{
	color: #ff8800;
}
.login_btn span,.user_link apan{
	color: #cecece;
	margin: 0 10px;
}
.span_1{
	margin: 0 0 0 10px;
}


/*logo、搜索框、购物车样式*/
.search_bar{
	width: 95%;
	height: 115px;
	margin: 0 auto;
}
.logo{
	width: 150px;
	height: 59px;
	margin: 10px 0 0 17px;
	
}
.search_con{
	width: 616px;
	height: 38px;
	border: 1px solid #37ab40;
	margin: 34px 0 0 230px;
	/*background: url("b.png")10px -338px no-repeat;*/
}
.search_con .input_text{
	width: 470px;
	height: 34px;
	border: 0px;
	font-size: 14px;
	color: #fff;
	font-family: "微软雅黑";
	outline: none;
	cursor:pointer;
}
.search_con .input_btn{
	width: 100px;
	height: 38px;
	background-color: #37ab40;
	border: 0px;
	font-size: 14px;
	color: #fff;
	font-family: "微软雅黑";
	outline: none;
	cursor:pointer;
}
.guest_cart .cart_name{
	width:158px;
	height: 38px;
	line-height: 38px;
	border: 1px solid #dddddd;
	display: block;
	/*background: url("a.png")15px -300px no-repeat;*/
	font-size:14px;
	color: #37ab40;
	text-indent: 56px;
	margin-top: 30px;
}
.guest_cart .goods_count{
	width: 40px;
	height: 40px;
	text-align: center;
	line-height: 40px;
	font-size: 18px;
	font-weight: bold;
	color: #fff;
	background-color: #ff8800;
	margin-top: 30px;
	margin-right: 30px;
}


/*菜单幻灯片样式*/
.navbar_con{
	height: 40px;
	border-bottom: 3px solid #39a93e;
}
.navbar{
	width:95%;
	margin: 0 auto;
}
.navbar h1{
	width: 200px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	font-size: 14px;
	color: #fff;
	background-color: #39a93e; 
}
.navbar .subnav_con{
	width: 200px;
	height: 40px;
	background-color: #39a93e;
	position: relative;
	cursor: pointer;
}
.navbar .subnav_con h1{
	position: absolute;
	left: 0;
	top: 0;
	text-align: left;
	text-indent: 40px;
}
.navbar .subnav_con span{
	display: block;
	width: 16px;
	height: 9px;
	position: absolute;
	right: 27px;
	top: 16px;
	transition: all 300ms ease-in;
}
.navbar .subnav_con:hover span {
	transform: rotateZ(180deg)
}
.navbar .subnav_con .subnav{
	position: absolute;
	left: 0;
	top: 40px;
	display: none;
	border-top: 2px solid #39a93e;
}
.navbar .subnav_con:hover .subnav{
	display: block;
}
.navlist{
	margin-left:34px;
}
.navlist li{
	height: 40px;
	float: left;
	line-height: 40px;
}
.navlist li a{
	color:#666;
	font-size:14px;
}
.navlist li a:hover{
	color:#ff8800;
}
.navlist .interval{
	margin:0 15px;
}


.center_con{
	width: 95%;
	height: 270px;
	margin: 0 auto;
}
.subnav{
	width: 198px;
	height: 270px;
	border-left: 1px solid #eee;
	
}
.subnav li{
	border-bottom: 2px solid #eee;
	border-right: 1px solid #eee;
}
.subnav li a{
	display:block;
	height:44px;
	line-height: 43px;
	text-align: center;
	font-size: 16px;
	color:#333}
.subnav li a:hover{
	color:#ff8800
}

.slide{
	width: 960px;
	height: 275px;
	position: relative;
	overflow: hidden;
}
.slide .slide_pocs{
	position: relative;
	left: 0;
	top: 0;
	width:960px;
	height: 275px;
}
.slide .slide_pocs li{
	width: 960px;
	height: 275px;
	position: absolute;
	left: 0;
	top: 0;
}
.slide .prev,.slide .next{
	width: 17px;
	height: 23px;
	position: absolute;
	left: 11px;
	top: 122px;
	cursor: pointer;
	background: url("file:///C|/Users/LEGION/Desktop/web/222.png") left -388px no-repeat;
}
.slide .next{
	background-position: left -388px;
	left: 932px;
}
.points{
	width: 100%;
	height: 11px;
	position: absolute;
	left: 0;
	top: 250px;
	text-align: center;
}
.points li{
	display:inline-block;
	width:11px;
	height:11px;
	margin:0 5px;
	background-color:#9f9f9f;
	border-radius:50%;
	cursor:pointer;
}
.points li.active{
	background-color:#cecece;
}

.adv{
	width:240px;
	height:275px; 
	overflow:hidden;
	background-color:gold;
}
.adv a{
	height: 138px;
	width: 240px;
	display:block;
	float:left;
}



.list_model{
	width:95%;
	height:340px;
	margin:70px auto 0;
}
.list_title{
	height:50px;
	
	border-bottom:3px solid #42ad46;
}
.list_title h3{
	height:50px;
	line-height:40px;
	font-size:17px;
	color:#37ab40;
	font-weight:bold;
}
.list_title .subtitle{
	height:20px;
	line-height:20px;
	margin-top:15px;
}
.list_title .subtitle span{
	color:#666;
	margin:0 10px 0 20px;
}
.list_title .subtitle a{
	color:#666;
	font-size: 15px;
	margin:0 5px;
}
.list_title .subtitle a:hover,.goods_more:hover{
	color:#ff8800;
}
.goods_more{
	height:20px;
	margin-top:15px;
	color:#666;
}

.goods_con{
	height:300px;
	
}
.goods_con2{
	margin-left: 65px;;
}
.goods_banner{
	width:200px;
	height:300px;
}
.goods_banner img{
	width:200px;
	height:300px;
	margin: 0 20px;
}

.goods_list{
	width:1150px;
	height:299px;
	
}
.goods_list li{
	height:299px;
	width:285px;
	border-right:2px solid #ededed;
	border-bottom:2px solid #ededed;
	float:left;
}
.goods_list li:hover{
	width:285px;
	height:297px;
	border:1px solid gold;
}
.goods_list li:hover img{
	opacity:0.8;
}

.goods_list li h4{
	width:200px;
	height:50px;
	margin:20px auto 0;
	text-align:center;
}
.goods_list li h4 a{
	font-size:14px;
	color:#666;
	font-weight:normal;
	line-height:24px;
}
.goods_list li h4 a:hover{
	color:#ff8800
}

.goods_list li img{
	display:block;
	width:180px;
	height:180px;
	margin:0 auto;
}
.goods_list li .prize{
	text-align:center;
	font-size:20px;
	color:#c40000;
	margin-top:5px;
}


.footer{
	border-top:2px solid #42ad46;
	margin:30px 0;
}

.foot_link{
	text-align:center;
	margin-top:30px;
}
.foot_link a,.foot_link span{
	color:#4e4e4e;
}
.foot_link a:hover{
	color:#ff8800;
}
.foot_link span{
	padding:0 10px;
}
.footer p{
	text-align:center;
	margin-top:10px;
}
</style>
