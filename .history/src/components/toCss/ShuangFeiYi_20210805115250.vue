<template>
<body>
    <div class="header">header</div>
	
	<div class="center">
		<div class="content">center</div>
	</div>
		<div class="left">left</div>
		<div class="right">right</div>
	<div class="footer">footer</div>
</body>
</template> 


<style scoped>
	*{
			margin: 0px;
			padding: 0px;
		}
		div{
			color: #FFFFFF;
			height: 200px;
		}
		.header,.footer{
			width: 100%;
			background: #858687;
			height: 20%;
			clear: both;
		}
		.center{
			float: left;
			width: 100%;
		}
		.center .content{
			margin: 0 200px 0 100px;
			background: orange;
		}
		.left{
			float: left;
			width: 100px;
            height: 900px;
			margin-left: -100%;
			background: green;
		}
		.right{
			float: left;
            height: 900px;
			margin-left: -200px;
			width: 200px;
			background: green;
		}
</style>