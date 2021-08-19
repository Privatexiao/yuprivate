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
				<tr :v-for="(item,index) in books">
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
		<h2 :v-else="books.length">购物车为空</h2>
	</div>
</body>
</template> 
<script type="text/javascript">
	export default {
	name: 'app',//注意这里就是Index.vue文件的名称
	data() {
        return {

        }
        },
        methods: {
            gotoTest(id) {
                // this.$router.push() 表示路由调转
                this.$router.push(`/test/${id}`)
            }
        },
        mounted() {
        },
	components: {
	}
}
    var app = new Vue({
			el:"#app",
			data:{
				id:0,
				name:'',
				price:0,
				count:0,
				books:[
					{
						id:1,
						name:"mate20pro",
						price:4566,
						count:2
					},
					{
						id:2,
						name:"p30",
						price:4166,
						count:5
					},
					{
						id:3,
						name:"X",
						price:5200,
						count:7
					},
					{
						id:4,
						name:"OPPO",
						price:2180,
						count:6
					}
				]
			},
			methods:{
				increment(index){
					this.books[index].count++
				},	
				decrement(index){
					this.books[index].count--
				},
				removeHandle(index){
					this.books.splice(index,1)
					for(let i=0;i<this.books.length;i++){
						this.books[i].id=i+1
					}
				}
			},
			computed:{
				totalPrice(){
					let totalPrice=0
					for(let i=0;i<this.books.length;i++){
						totalPrice += this.books[i].price * this.books[i].count
					}
					return totalPrice
				}
			},
			filters:{
				showPrice(price){
					return "￥"+price.toFixed(2)
				}
			}
		})
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