<template>
<body>
    <p>第一段文字</p>
		<p class="relative">第二段文字</p>
		<p>第三段文字</p>
</body>
</template> 


<style scoped>
    p{
        text-align: center;
		border: 5px solid blue;
		width: 100px;
		height: 25px;
        }
	p.relative{
        position: relative;
		top: 10px;
		left: 40px;
		background-color: #000000;
		color: #FFFFFF;
        }
</style>