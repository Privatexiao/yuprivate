<template>
<body>
    <input type="text" id="userInput">
	<button>修改HTML元素内容</button>
	<ul>
		<li>音乐</li>
		<li>羽毛球</li>
		<li>足球</li>
		<li>篮球</li>
	</ul>
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
	body{
        float: left;
    }
    ul li{
        padding: 2px;
        float: left;
    }
</style>