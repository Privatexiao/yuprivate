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
                const s = document.createElement('script');
                    s.type = 'text/javascript';
                    s.src = 'https://g.alicdn.com/dingding/dinglogin/0.0.2/ddLogin.js';
                    document.body.appendChild(s);
},
}
</script>


<style scoped>
	body{
                width: 100%;
                min-width: 1500px;
                height: 3500px; 
            }
            *{
                margin: 0;
                padding: 0;
            }
            li{
                list-style: none;
            }
            a{
                color: #b0b0b0;
                text-decoration: none;
            } 
        /* 商品菜单右边图片 */
            .CaiDan_right{
                float: left;
                position: relative;
                top: -10px;
                margin: 200px;
            }
            .CaiDan_right .CaiDan_right_img{
                width: 1050px;
                height: 394px;
                float: left;
                overflow: hidden;
            } 
            .CaiDan_right .CaiDan_right_img img{
                width: 1050px;
                height: 394px;
                
            }
            
            .shangPinJieShaoCaiDan .CaiDan_right .points li{
                border-radius: 50%;
                width: 10px;
                height: 10px;
                margin-left: 5px;
                background-color: rgb(218, 218, 218);
                float: right;
                position: relative;
                top: -30px;
                left: -95px;
            }
            .CaiDan_right .points .active{
                background-color: rgb(173, 173, 173);
            }
            .CaiDan_right .prev{
                position: absolute;
                left: 10px;
                top: 158px;
                font-size: 50px;
                color: rgb(211, 211, 211);
                background-color: transparent;
                border: transparent;
                cursor: pointer;
            }
            .CaiDan_right .next{
                position: absolute;
                top: 158px;
                left: 1000px;
                font-size: 50px;
                color: rgb(211, 211, 211);
                float: right;
                background-color: transparent;
                border: transparent;
                cursor: pointer;
            } 
</style>