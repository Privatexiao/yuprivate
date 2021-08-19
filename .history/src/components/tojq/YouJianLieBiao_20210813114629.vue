<template>
<body>
    
</body>
</template> 
<script type="text/javascript">
        export default {   
                mounted() {
                    $(function(){
			$("#selectBtn").click(function(){
				$("input[name=select]").prop("checked",true)
			});
			$("#selectCancle").click(function(){
				$("input[name=select]").prop("checked",false)
			});
			$("#notSelect").click(function(){
				$("input[name=select]").each(function(index,element){
					$(this).prop("checked",!$(this).prop("checked"))
				})
			});
			$("#delBtn").click(function(){
				$("input[name=select]").each(function(index,element){
					if($(this).prop("checked"))
						$(this).parent().parent().remove();
				});
			})
		})
                                
                }
                }

</script>


<style scoped>
	*{
			margin: 0px;
			padding: 0px;
		}
		#box{
			width: 400px;
			margin: 0px auto;
		}
</style>