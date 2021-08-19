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
		export default {
	name: 'app',
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
        var prices=new Vue({
			el:"#app",
			data:{
				package1:[
					{
						name:"mate20pro",
						price:4566,
						count:13
						},
					{
						name:"p30",
						price:4166,
						count:2
					},
					{
						name:"X",
						price:5200,
						count:8
					},
					{
						name:"oppo",
						price:2180,
						count:24
					},
				]
				
			},
			computed:{
				prices:function(){
					var prices=0;
					for(var i=0;i<this.package1.length;i++){
						prices+=this.package1[i].price * this.package1[i].count;
					}
					return prices;
				}
			}
		})

</script>


<style scoped>
	
</style>