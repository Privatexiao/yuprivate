<template>
<body>
    <div id="app">
		<div v-if="books.length">
		<table>
			<thead>
				<tr>
					<th></th>
					<th>名称</th>
					<th>价格</th>
					<th>数量</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item,index) in books">
					<td>{{item.id}}</td>
					<td>{{item.name}}</td>
					<td>{{item.price | showPrice}}</td>
					<td>
						<button @click="decrement(index)" v-bind:disabled="item.count<=0">-</button>
						{{item.count}}
						<button @click="increment(index)">+</button>
					</td>
					<td>
						<button @click="removeHandle(index)">移除</button>
					</td>
				</tr>
			</tbody>
		</table>
			<h2>总价格:{{totalPrice | showPrice}}</h2>
		</div>
		<h2 v-else="books.length">购物车为空</h2>
	</div>
</body>
</template> 
<script type="text/javascript">
    
</script>


<style scoped>
	table {
    border:1px solid #e9e9e9;
    border-collapse:collapse;
    border-spacing:0;
}

		th,td {
    padding:8px 16px;
    border:1px solid #e9e9e9;
    text-align:left;
}
		th {
    background-color:#f7f7f7;
    color:#5c6b77;
    
}
</style>