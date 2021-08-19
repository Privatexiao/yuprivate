<template>
<body>
    <div id="one">1</div>
    <div id="two">2</div>
    <div id="three">3</div>
</body>
</template> 


<style>
		div{height: 100px;
			width: 100px;
			position: absolute;
			top: 0px;
			left: 0px;
			z-index: 2;
			background-color: yellow;}
		#two{top: 10px;
			left: 10px;
			z-index: 1;
			background-color: grey;}
		#three{top: 20px;
				left: 20px;
				z-index: 0;
				background-color: pink;}
	
	</style>