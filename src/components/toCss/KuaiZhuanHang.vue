<template>
<body>
    <p>这是一个&lt;p&gt;标记--块元素</p>
		
		<i>这是一个行内元素</i>
		<span>这是一个行内元素</span>
		<div>这是一个div--块元素</div>
</body>
</template> 


<style scoped>
    p{
        background-color: antiquewhite;
		display: inline;
        }
	i{
        background-color: beige;
		display: inline-block;
        }
	span{
        background-color: darkmagenta;
		display: block;
        }
	div{
        background-color: greenyellow;
		}
</style>