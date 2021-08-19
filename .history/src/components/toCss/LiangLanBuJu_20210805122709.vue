<template>
<body>
    
</body>
</template> 


<style scoped>
	*{
			margin: 0px;
			padding: 0px;
		}
		.container{
			width: 410px;
			height: 200px;
		}
		.left{
			width: 100px;
			height: 100%;
			float: left;
			background-color: aqua;
		}
		.right{
			width: 300px;
			height: 100%;
			background-color: blueviolet;
			float: left;
			margin-left: 10px;
		}
		.container::after{
			content: 'abcasadklajsdklas';
			display: block;
			visibility: hidden;
			clear: both;
		}
</style>