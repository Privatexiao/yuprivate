<template>
<body>
    <table id="employeeTable">
		<tr>
			<th>Name</th>
			<th>Email</th>
			<th>Salary</th>
			<th>&nbsp;</th>
		</tr>
		<tr>
			<td>Tom</td>
			<td>tom@tom.com</td>
			<td>5000</td>
			<td><a href="deleteEmp?id=001">Delete</a></td>
		</tr>
		<tr>
			<td>Jerry</td>
			<td>jerry@sohu.com</td>
			<td>8000</td>
			<td><a href="deleteEmp?id=002">Delete</a></td>
		</tr>
		<tr>
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



<style scoped>
	#total {
	width: 450px;
	margin-left: auto;
	margin-right: auto;
}

ul {
	list-style-type: none;
}

li {
	border-style: solid;
	border-width: 1px;
	padding: 5px;
	margin: 5px;
	background-color: #99ff99;
	float: left;
}

.inner {
	width: 400px;
	border-style: solid;
	border-width: 1px;
	margin: 10px;
	padding: 10px;
	float: left;
}

#employeeTable {

	border-spacing: 1px;
	background-color: black;
	margin: 80px auto 10px auto;
}

th,td {
	background-color: white;

}

#formDiv {
	width: 250px;
	border-style: solid;
	border-width: 1px;
	margin: 50px auto 10px auto;
	padding: 10px;
}

#formDiv input {
	width: 100%;
}

.word {
	width: 40px;
}

.inp {
	width: 200px;
}
</style>