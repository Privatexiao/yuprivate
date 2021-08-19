<template>
<body>
    <div id="app">
		长度：<input type="text" v-model="length"><br/>
		宽度：<input type="text" v-model="width"><br/>
		面积：{{areas}}<br/>
		<button v-on:click="add()">计算</button>和：{{num}}
		
	</div>
</body>
</template> 
<script type="text/javascript">
    
</script>


<style scoped>
	
</style>