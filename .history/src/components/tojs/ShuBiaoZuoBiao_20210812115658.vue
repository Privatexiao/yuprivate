<template>
<body>
    <div class="CaiDan_right">
        <ul class="CaiDan_right_img">
            <li><img name="img1" src="@/assets/img/a.jpg" alt="..."></li>
        </ul>
        <button id="prev" class="prev"><strong>&lt;</strong></button>
        <button id="next" class="next"><strong>&gt;</strong></button>
        <ul class="points">
            <li><a href="javaScript:"></a></li>
            <li class="active"><a href="javaScript:"></a></li>
            <li><a href="javaScript:"></a></li>
            <li><a href="javaScript:"></a></li>
            <li><a href="javaScript:"></a></li>
        </ul>
    </div>
</body>
</template> 
<script type="text/javascript">
    export default {
        mounted() {
                // 图片切换
                window.onload=function(){

                    let prev = document.getElementById("prev");
                    let next = document.getElementById("next");

                    let img =document.getElementsByName("img1")[0];

                    let imgArr =["@/assets/img/a.jpg","@/assets/img/b.jpg","@/assets/img/c.jpg","@/assets/img/d.jpg","@/assets/img/e.jpg"];

                    let index = 0;

                    prev.onclick = function(){
                        index--;
                        if(index<0){
                            index=imgArr.length-1;
                        }
                        img.src = imgArr[index];
                    };

                    next.onclick = function(){
                        index++;
                        if (index>imgArr.length-1){
                            index=0;
                        }
                        img.src = imgArr[index];
                    };

                    // 定时器
                    setInterval(function(){
                        index++;
                        if(index>=imgArr.length){
                            index=0;
                        }
                        img.src = imgArr[index];
                    },2000);
                };

                                },
                        }

</script>


<style scoped>

</style>