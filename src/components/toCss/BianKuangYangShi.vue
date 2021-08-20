<template>
<body>
    <a href="#"><img src="@/assets/img/a.png" width="500px" height="300px"></a>
	
	<p>文档中的一些文字</p>
	<p class="soliddouble">文档中的一些文字</p>
</body>
</template> 


<style scoped>
	a:link img{
		border-style: outset;
		border-color: aqua;
		border-width: 5px;
		}
	p{
        border: medium double #3EFF4F;
        }
		
	.soliddouble{
		border-width: 10px;
		border-style: solid double;
		border-top-color: maroon;
		}
</style>