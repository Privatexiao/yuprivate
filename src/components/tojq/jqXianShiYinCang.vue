<template>
<body>
    <p>这是一个测试段落</p>
	<button id="btn1">显示</button>
	<button id="btn2">隐藏</button>
	<button id="btn3">显示和隐藏</button>
</body>
</template> 
<script type="text/javascript">
        export default {   
                mounted() {
                    $(document).ready(function(){
			$("#btn1").click(function(){
				$("p").show(2000);
			});
			$("#btn2").click(function(){
				$("p").hide(2000);
			});
			$("#btn3").click(function(){
				$("p").toggle(2000);
			});
		});
                                
                }
                }

</script>


<style scoped>
	
</style>