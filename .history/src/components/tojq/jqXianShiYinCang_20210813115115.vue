<template>
<body>
    
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