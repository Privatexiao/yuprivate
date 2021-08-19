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
		export default {
	name: 'app',
	data() {
        		this.length='',
				width='',
				num=''
				return {

        }
        },
		computed:{
				areas:function(){
					let areas=0
					areas = this.length * this.width
					return areas
				}
			},
        methods: {
        	add:function(){
					this.num=parseInt(this.length)+parseInt(this.width)
				}
        }
}
</script>


<style scoped>
	
</style>