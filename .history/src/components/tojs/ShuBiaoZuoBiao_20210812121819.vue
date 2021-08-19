<template>
<body>
    <div id="areaDiv"></div>
	<div id="showMsg"></div>
</body>
</template> 
<script type="text/javascript">
    export default {
        mounted() {
            window.onload=function(){
                let areaDiv = document.getElementById("areaDiv");
                let showMsg = document.getElementById("showMsg");

                areaDiv.onmousemove = function(event){
             //解决事件对象的兼容问题
                    event = event || window.event;

                    let x = event.clientX;
        let y = event.clientY;

        showMsg.innerHTML = "X = "+x+",Y = "+y;
    };
};  
        }
                        }

</script>


<style scoped>
    #areaDiv {
		border: 1px solid black;
		width: 300px;
		height: 500px;
		margin-bottom: 10px;
	}
	
	#showMsg {
		border: 1px solid black;
		width: 300px;
		height: 20px;
	}
</style>