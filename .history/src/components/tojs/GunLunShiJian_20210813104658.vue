<template>
<body>
    
</body>
</template> 

<script type="text/javascript">
        export default {   
                mounted() {
                let box1 = document.getElementById("box1");

                box1.onmousewheel = function(event){
                event = event || window.event;
                    
                if(event.wheelDelta>0 || event.detail<0){
                        box1.style.height = box1.clientHeight - 10 +"px";
                }else{
                        box1.style.height = box1.clientHeight + 10 +"px";
                    }
                    event.preventDefault && event.preventDefault();
                    return false;
                };
                bind(box1,"DOMMouseScroll",box1.onmousewheel);
                                
                }
                }

</script>


<style scoped>
	#box1{
            width: 100px;
            height: 100px;
            background-color: red;
        }
        body{
            height: 2000px;
        }
</style>