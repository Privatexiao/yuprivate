<template>
<body>
    
</body>
</template> 
<script type="text/javascript">
        export default {   
                mounted() {
                let box1 = document.getElementById("box1");
            document.onmousemove = function(event){
                // event = event || window.event;

                let st = document.body.scrollToP || document.documentElement.scrollTop;
                let sl = document.body.scrollLeft || document.documentElement.scrollLeft;

                let left = event.clientX;
                let top = event.clientY;

                // let left = event.pageX;
                // let top = event.pageY;

                box1.style.left=left+sl+"px";
                box1.style.top=top+st+"px";
            };
                                
                }
                }

</script>


<style scoped>
	
</style>