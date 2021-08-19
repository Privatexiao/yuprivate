<template>
<body>
    <div class="c1">
		<ul>
			<li><a href="#">首页</a></li>
			<li class="setHiddin"><a href="#">新闻</a></li>
			<li><a href="#">科技</a></li>
			<li><a href="#">财经</a></li>
		</ul>
		
		<p>首页和科技中间的新闻标签被隐藏</p>
	
	</div>
</body>
</template> 


<style scoped>
	p{
		display: block;
		float: left;
	}
    .c1 ul{
			list-style: none;
		}
	.c1 li{
			border: 1px solid black;
			background-color: yellow;
			font-size: 24px;
			width: 100px;
			height: 40;
			line-height: 40px;
			text-align: center;
			float: left;
		}
	.c1 ul li.setHiddin{
			/*visibility:hidden;*/
			display: none;
		}
</style>