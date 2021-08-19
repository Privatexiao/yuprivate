<template>
<body>
    <p>第一段文字</p>
		<p>第二段文字</p>
		<p>第三段文字</p>
</body>
</template> 


<style scoped>
        *{
			margin: 0px;
			padding: 0px;
		}
		html,body{
			width: 100%;
			height: 100%;
			background-color: #FFFFCC;	
		}
		div.container{
			width: 80%;
			height: 100%;
			background-color: #CCFF33;
			margin: 0 auto;	
		}
		div.header,div.footer{
			color: white;
			background-color: #CCFF33;
			clear: left;
			text-align:center;
			height: 80px;
			line-height: 80px;		
		}
		div.middle{
			background-color: pink;
			height: 502px;	
		}
		div.left,div.content,div.right{
			float: left;
			background-color: yellow;
			height: 100%;
			width: 70%;
		}
		div.left,div.right{
			background-color: #9999FF;
			width: 15%;
			
		}
</style>