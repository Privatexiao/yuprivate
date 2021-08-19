<template>
<body>
    <div id="box">
		<ul class="menu">
			<li class="MenuItem">
				<a href="#" class="subMenuTitle">
					<b>▼</b>好友
				</a>
				<ul class="subMenuItem">
					<li><a href="#">好友1</a></li>
					<li><a href="#">好友2</a></li>
					<li><a href="#">好友3</a></li>
				</ul>
			</li>
			<li class="MenuItem">
				<a href="#" class="subMenuTitle">
					<b>▼</b>朋友
				</a>
				<ul class="subMenuItem">
					<li><a href="#">朋友1</a></li>
					<li><a href="#">朋友2</a></li>
					<li><a href="#">朋友3</a></li>
					<li><a href="#">朋友4</a></li>
				</ul>
			</li>
			<li class="MenuItem">
				<a href="#" class="subMenuTitle">
					<b>▼</b>同学
				</a>
				<ul class="subMenuItem">
					<li><a href="#">同学1</a></li>
					<li><a href="#">同学2</a></li>
					<li><a href="#">同学3</a></li>
					<li><a href="#">同学4</a></li>
				</ul>
			</li>
			<li class="MenuItem">
				<a href="#" class="subMenuTitle">
					<b>▼</b>家人
				</a>
				<ul class="subMenuItem">
					<li><a href="#">家人1</a></li>
					<li><a href="#">家人2</a></li>
					<li><a href="#">家人3</a></li>
					<li><a href="#">家人4</a></li>
					<li><a href="#">家人5</a></li>
					<li><a href="#">家人6</a></li>
				</ul>
			</li>
		</ul>
	</div>
</body>
</template> 
<script type="text/javascript">
        export default {   
                mounted() {
                    $(function(){
			$(".subMenuItem").eq(0).show();
			$(".subMenuTitle").click(function(){
				$(".subMenuItem").slideUp();
				$(".MenuItem b").text("▶");
				if($(this).next().is(":hidden")){
					$(this).next().slideDown();
					$(this).find("b").text("▼");
				}
			});
		})
                                
                }
                }

</script>


<style scoped>
	*{
			margin: 0px;
			padding: 0px;
		}
		#box{
			width: 100px;
			height: 500px;
			background: #9cf;
		}
		#box ul{
			list-style: none;
		}
		#box ul li.MenuItem{
			width: 100%;
			background:#33C4C9;
		}
		#box ul li a{
			text-decoration: none;
		}
		#box ul li a{
			margin-left: 5px;
		}
		#box ul li ul{
			display: none;
		}
		#box ul li ul li{
			width: 100%;
			height: 25px;
			background:#FFE1BE;
			margin-bottom: 2px;
			text-align: center;
			line-height: 25px;
		}
</style>