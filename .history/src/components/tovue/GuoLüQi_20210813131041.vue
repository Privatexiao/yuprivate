<template>
<body>
    <div id="app">
		<input type="text" v-model="content" @change="changeEvent">
		<h3>{{viewContent | changeCapitalLetter}}</h3>
	</div>
</body>
</template> 
<script type="text/javascript">

        export default {   
            el:"#app",
			data:{
				viewContent:'',
				content:''
			},
                mounted() {
                    
                    let vm = new Vue({
			
			methods:{
				changeEvent(){
					this.viewContent=this.content;
				}
			},
			filters:{
				changeCapitalLetter(value){
					if(value){
						let str=value.toString();
						let newArr=str.split(" ").map(ele=>{
									return ele.charAt(0).toUpperCase()+ele.slice(1)
													});
						return newArr.join(" ")
					}
				}
			}
		})            
                }
                }

</script>


<style scoped>
	
</style>