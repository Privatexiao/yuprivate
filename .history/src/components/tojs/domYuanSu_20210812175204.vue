<template>
<body>
    <table id="employeeTable">
		<tr class="emp1">
			<th>Name</th>
			<th>Email</th>
			<th>Salary</th>
			<th>&nbsp;</th>
		</tr>
		<tr class="emp1">
			<td>Tom</td>
			<td>tom@tom.com</td>
			<td>5000</td>
			<td><a href="deleteEmp?id=001">Delete</a></td>
		</tr>
		<tr class="emp1">
			<td>Jerry</td>
			<td>jerry@sohu.com</td>
			<td>8000</td>
			<td><a href="deleteEmp?id=002">Delete</a></td>
		</tr>
		<tr class="emp1">
			<td>Bob</td>
			<td>bob@tom.com</td>
			<td>10000</td>
			<td><a href="deleteEmp?id=003">Delete</a></td>
		</tr>
	</table>

	<div id="formDiv">
	
		<h4>添加新员工</h4>

		<table>
			<tr>
				<td class="word">name: </td>
				<td class="inp">
					<input type="text" name="empName" id="empName" />
				</td>
			</tr>
			<tr>
				<td class="word">email: </td>
				<td class="inp">
					<input type="text" name="email" id="email" />
				</td>
			</tr>
			<tr>
				<td class="word">salary: </td>
				<td class="inp">
					<input type="text" name="salary" id="salary" />
				</td>
			</tr>
			<tr>
				<td colspan="2" align="center">
					<button id="addEmpButton" value="abc">
						Submit
					</button>
				</td>
			</tr>
		</table>

	</div>
</body>
</template> 
<script type="text/javascript">
import {domYuanSu} from '../assets/js/domY'
export default {
    mounted() {
    const s = document.createelement('script');
    s.type = 'text/javascript';
    s.src = '@/assets/js/domYuanSu.js';
    document.body.appendchild(s);
    },
}
</script>


<style rel="stylesheet" type="text/css" scoped>

#employeeTable {
    border: 1px solid black;
	border-spacing: 2px;
	background-color: rgb(0, 0, 0);
	margin: 80px auto 10px auto;
}
.emp1 th,td{
    border: 1px solid black;
	margin: 10px;
	padding: 10px;
}
th,td {
	background-color: white;
}

#formDiv {
	width: 300px;
	border-style: solid;
	border-width: 1px;
	margin: 50px auto 10px auto;
	padding: 10px;
}
#formDiv tr td,th{
    border: none;
}
#formDiv input {
	width: 100%;
    margin: 5px auto;
}

.word {
	width: 40px;
}

.inp {
	width: 200px;
}
</style>