<template>
<body>
	<div class="one">
    	<div class="mainBox"></div>
		<div class="subBox"></div>
	</div>
	<div class="two">
		<div class="mainBox1"></div>
		<div class="subBox1"></div>
	</div>
</body>
</template> 


<style scoped>
	.one{
		float: left;
	}
    .mainBox{
			width: 100px;
			height: 100px;
			background-color: pink;
			position: relative;
			overflow:hidden;
		}
		.subBox{
			width: 200px;
			height: 50px;
			background-color: yellow;
			position:absolute;
			top: 20px;
			left: 20px;
			
		}
	.two{
		float: left;
	}
		.mainBox1{
			width: 200px;
			height: 200px;
			background-color: pink;
			position: relative;
			overflow:visible
		}
		.subBox1{
			width: 200px;
			height: 50px;
			background-color: yellow;
			position:absolute;
			top: 50px;
			left: 50px;
			
		}
</style>