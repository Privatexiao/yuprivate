<template>
<body>
    <div class="mainBox"></div>
		<div class="subBox"></div>
</body>
</template> 


<style scoped>
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
</style>