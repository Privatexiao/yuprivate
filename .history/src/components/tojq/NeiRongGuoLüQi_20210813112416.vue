<template>
<body>
    <button>显示效果</button>
	<div>hahha</div>
	<div>heihei</div>
	<div></div>
	<div><a href="http://www.baidu.com">content</a></div>
</body>
</template> 
<script type="text/javascript">
        export default {   
                mounted() {
                    $(document).ready(function(){
			$("button").click(function(){
				$('div:contains(ha)').css('backgroundColor','green');
				$('div:empty').css('backgroundColor','yellow');
				$('div:has(a)').css('backgroundColor','pink');
			})
		})
                                
                }
                }

</script>


<style scoped>
	div{
			width:300px;
			height: 50px;
			border: 1px solid red;
			margin: 5px;
			text-align: center;
			display: block;
		}
		button{
			
			margin-top: 240px;
			
			
		}
</style>