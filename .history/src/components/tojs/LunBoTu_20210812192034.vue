<template>
<body>
    
</body>
</template> 
<script src="/assets/js/tools.js" ></script>
<script type="text/javascript">
        export default {   
                mounted() {
                    
                                
                }
                }

</script>


<style scoped>
	*{
        margin: 0;
        padding: 0;
    }
    #outer{
        width: 820px;
        height: 333px;
        margin: 100px auto;
        background-color: yellow;
        padding: 10px 0;
        position: relative;
        overflow: hidden;
    }
    #outer img{
        width: 800px;
        height: 333px;
    }
    #imgList{
        list-style: none;
        position: absolute;
        left: 0px;
    }
    #imgList li{
        float: left;
        margin: 0 10px;
    }
    #navDiv{
        position: absolute;
        top: 315px;

    }
    #navDiv a{
        width: 15px;
        height: 15px;
        float: left;
        background-color: red;
        margin: 0 5px;
        /* 透明度 */
        opacity: 0.5;
        /* 兼容IE8 */
        filter: alpha(opacity=50);
    }
    #navDiv a:hover{
        background-color: black;
    }
</style>