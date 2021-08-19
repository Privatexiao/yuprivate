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
	*{
			margin: 0px;
			padding: 0px;
		}
		#box{
			width: 100px;
			height: 500px;
			background: #9cf;
		}
		#box ul{
			list-style: none;
		}
		#box ul li.MenuItem{
			width: 100%;
			background:#33C4C9;
		}
		#box ul li a{
			text-decoration: none;
		}
		#box ul li a{
			margin-left: 5px;
		}
		#box ul li ul{
			display: none;
		}
		#box ul li ul li{
			width: 100%;
			height: 25px;
			background:#FFE1BE;
			margin-bottom: 2px;
			text-align: center;
			line-height: 25px;
		}
</style>