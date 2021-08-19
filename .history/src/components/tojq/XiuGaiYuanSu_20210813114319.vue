<template>
<body>
    
</body>
</template> 
<script type="text/javascript">
        export default {   
                mounted() {
                    $(document).ready(function(){
			$("button").click(function(){
				var newContent=$("#userInput").val();
				$("ul lli:first").html(newContent);
				$("ul li:last").text(newContent);
			});
		});
                                
                }
                }

</script>


<style scoped>
	
</style>