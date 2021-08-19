export function  {   
    mounted() {
    function delA(){
    
    let tr = this.parentNode.parentNode;

    let name = tr.getElementsByTagName("td")[0].innerHTML;


    let flag = confirm("确认删除"+name+"吗?");

    if(flag){
        tr.parentNode.removeChild(tr);
    };

    return false;
};

//点击超链接删除信息
let allA = document.getElementsByTagName("a");
for(let i=0;i<allA.length;i++){
allA[i].onclick = delA;
}
let addEmpButton = document.getElementById("addEmpButton");
addEmpButton.onclick = function(){

let empName = document.getElementById("empName").value;

let email = document.getElementById("email").value;

let salary = document.getElementById("salary").value;

let tr = document.createElement("tr");

let nameTd = document.createElement("td");
let emailTd = document.createElement("td");
let salaryTd = document.createElement("td");
let aTd = document.createElement("td");

let a = document.createElement("a");

let nameText = document.createTextNode(empName);
let emailText = document.createTextNode(email);
let salaryText = document.createTextNode(salary);
let delText = document.createTextNode("Delete");

nameTd.appendChild(nameText);
emailTd.appendChild(emailText);
salaryTd.appendChild(salaryText);
aTd.appendChild(a).appendChild(delText);

a.href = "javascript:";

a.onclick =delA;

tr.appendChild(nameTd);
tr.appendChild(emailTd);
tr.appendChild(salaryTd);
tr.appendChild(aTd);

let employeeTable = document.getElementById("employeeTable");

let tbody = employeeTable.getElementsByTagName("tbody")[0];

document.tbody.appendChild(tr);


};
                    
    }
    }
