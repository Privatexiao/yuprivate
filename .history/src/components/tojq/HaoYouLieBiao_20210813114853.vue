<template>
<body>
    
</body>
</template> 
<script type="text/javascript">
        export default {   
                mounted() {
                    $(function(){
			$(".subMenuItem").eq(0).show();
			$(".subMenuTitle").click(function(){
				$(".subMenuItem").slideUp();
				$(".MenuItem b").text("▶");
				if($(this).next().is(":hidden")){
					$(this).next().slideDown();
					$(this).find("b").text("▼");
				}
			});
		})
                                
                }
                }

</script>


<style scoped>
	
</style>