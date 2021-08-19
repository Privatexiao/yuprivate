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
		export default {
   name: 'Index',//注意这里就是Index.vue文件的名称
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

        var vm = new Vue({
			el:'#app',
			data:{
				list:[
					{id:1,name:'张三',age:18},
					{id:2,name:'李四',age:19},
					{id:3,name:'王文',age:22},
					{id:4,name:'天天',age:26},
					{id:5,name:'人人',age:29},
					{id:6,name:'艺',age:23},
					]
				}
		})

</script>


<style scoped>
	
</style>