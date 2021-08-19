<template>
<body>
        <div id="box1"><p>键盘的上下左右来控制div方块的移动</p></div>
</body>
</template> 
<script type="text/javascript">
        export default {   
                mounted() {
                document.onkeydown =function(event){
                event = event || window.event;

                let speed =10;
                if(event.ctrlKey){
                        speed = 50;
                }

                //37左38上39右40下

                switch(event.keyCode){
                        case 37:
                        box1.style.left = box1.offsetLeft -speed +"px";
                        break;
                        case 38:
                        box1.style.top = box1.offsetTop -speed +"px";
                        break;
                        case 39:
                        box1.style.left = box1.offsetLeft +speed +"px";
                        break;
                        case 40:
                        box1.style.top = box1.offsetTop +speed +"px";
                        break;
                }
        };
                                
                }
                }

</script>


<style scoped>
	#box1{
        width: 100px;
        height: 100px;
        background-color: yellow;
        position: absolute;
        }
        #box1 p{
                text-align: ;
        }
</style>