<template>
<body>
    <div id="app">
		<table align="center" width="400px" border="1">
			<caption><h2>购物车</h2></caption>
			<tr align="center">
				<td>货名</td>
				<td>单价</td>
				<td>数量</td>
				<td>合计</td>
			</tr>
			<tr align="center" :v-for="(user) in package1">
				<td>{{user.name}}</td>
				<td>{{user.price}}</td>
				<td>{{user.count}}</td>
				<td>{{user.price*user.count}}</td>
			</tr>
			<tr align="center">
				<td>总价</td>
				<td colspan="3">{{prices}}</td>
			</tr>
		</table>
	</div>
</body>
</template> 
<script type="text/javascript">
        

</script>


<style scoped>
	
</style>