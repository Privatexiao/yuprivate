<template>
<body>
    <div id="app">
		<table border="1" align="center" width="400px">
			<caption><h2>学生信息表</h2></caption>
			<tr>
				<td>学号</td>
				<td>姓名</td>
				<td>年龄</td>
			</tr>
			<tr align="center" :v-for="(user) in list">
				<td>{{user.id}}</td>
				<td>{{user.name}}</td>
				<td>{{user.age}}</td>
			</tr>
		</table>
	</div>
</body>
</template> 
<script type="text/javascript">
        

</script>


<style scoped>
	
</style>