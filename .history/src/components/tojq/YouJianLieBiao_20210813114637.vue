<template>
<body>
    <div id="box">
		<p>收件箱</p>
		<table border="1" width="400">
			<tr>
				<td>状态</td>
				<td>发件人</td>
				<td>主题</td>
			</tr>
			<tr>
				<td><input name="select" type="checkbox" value="select"></td>
				<td>王者归来</td>
				<td>羽毛球服饰</td>
			</tr>
			<tr>
				<td><input name="select" type="checkbox" value="select"></td>
				<td>天下</td>
				<td>明天会下雨吗？</td>
			</tr>
			<tr>
				<td><input name="select" type="checkbox" value="select"></td>
				<td>沧海</td>
				<td>您什么时候需要轮椅？</td>
			</tr>
			<tr>
				<td><input name="select" type="checkbox" value="select"></td>
				<td>王者归来</td>
				<td>明天约了场比赛</td>
			</tr>
		</table>
		<button id="selectBtn">全选</button>
		<button id="selectCancle">取消</button>
		<button id="notSelect">反选</button>
		<button id="delBtn">删除</button>
	</div>
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