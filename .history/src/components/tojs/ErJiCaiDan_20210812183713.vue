<template>
<body>
    <div id="my_menu" class="sdmenu">
			<div>
				<span class="menuSpan">在线工具</span>
				<a href="#">图像优化</a>
				<a href="#">收藏夹图标生成器</a>
				<a href="#">邮件</a>
				<a href="#">htaccess密码</a>
				<a href="#">梯度图像</a>
				<a href="#">按钮生成器</a>
			</div>
			<div class="collapsed">
				<span class="menuSpan">支持我们</span>
				<a href="#">推荐我们</a>
				<a href="#">链接我们</a>
				<a href="#">网络资源</a>
			</div>
			<div class="collapsed">
				<span class="menuSpan">合作伙伴</span>
				<a href="#">JavaScript工具包</a>
				<a href="#">CSS驱动</a>
				<a href="#">CodingForums</a>
				<a href="#">CSS例子</a>
			</div>
			<div class="collapsed">
				<span class="menuSpan">测试电流</span>
				<a href="#">Current or not</a>
				<a href="#">Current or not</a>
				<a href="#">Current or not</a>
				<a href="#">Current or not</a>
			</div>
		</div>
</body>
</template> 
<script type="text/javascript">

        export default {   
                mounted() {
                    var menuSpan = document.querySelectorAll(".menuSpan");
				
				//定义一个变量，来保存当前打开的菜单
				var openDiv = menuSpan[0].parentNode;
				
				//为span绑定单击响应函数
				for(var i=0 ; i<menuSpan.length ; i++){
					menuSpan[i].onclick = function(){
						
						//this代表我当前点击的span
						//获取当前span的父元素
						var parentDiv = this.parentNode;
						
						//切换菜单的显示状态
						toggleMenu(parentDiv);
						
						
						//判断openDiv和parentDiv是否相同
						if(openDiv != parentDiv  && !hasClass(openDiv , "collapsed")){
							//切换菜单的显示状态
							toggleMenu(openDiv);
						}
						
						//修改openDiv为当前打开的菜单
						openDiv = parentDiv;
						
					};
				}
				
				/*
				 * 用来切换菜单折叠和显示状态
				 */
				function toggleMenu(obj){
					//在切换类之前，获取元素的高度
					var begin = obj.offsetHeight;
					
					//切换parentDiv的显示
					toggleClass(obj , "collapsed");
					
					//在切换类之后获取一个高度
					var end = obj.offsetHeight;
					
					//动画效果就是将高度从begin向end过渡
					//将元素的高度重置为begin
					obj.style.height = begin + "px";
					
					//执行动画，从bengin向end过渡
					move(obj,"height",end,10,function(){
						//动画执行完毕，内联样式已经没有存在的意义了，删除之
						obj.style.height = "";
					});
						
				}
                                
                }
                }

</script>


<style scoped>
	* {
				margin: 0;
				padding: 0;
				list-style-type: none;
			}
			
			a,img {
				border: 0;
				text-decoration: none;
			}
			
			body {
				font: 12px/180% Arial, Helvetica, sans-serif, "新宋体";
			}
            div.sdmenu {
                    width: 150px;
                    margin: 0 auto;
                    font-family: Arial, sans-serif;
                    font-size: 12px;
                    padding-bottom: 10px;
                    background: url(bottom.gif) no-repeat right bottom;
                    color: #fff;
                    }

                    div.sdmenu div {
                    background: url(title.gif) repeat-x;
                    overflow: hidden;
                    }

                    div.sdmenu div:first-child {
                    background: url(toptitle.gif) no-repeat;
                    }

                    div.sdmenu div.collapsed {
                    height: 25px;
                    }

                    div.sdmenu div span {
                    display: block;
                    height: 15px;
                    line-height: 15px;
                    overflow: hidden;
                    padding: 5px 25px;
                    font-weight: bold;
                    color: white;
                    background: url(expanded.gif) no-repeat 10px center;
                    cursor: pointer;
                    border-bottom: 1px solid #ddd;
                    }

                    div.sdmenu div.collapsed span {
                    background-image: url(collapsed.gif);
                    }

                    div.sdmenu div a {
                    padding: 5px 10px;
                    background: #eee;
                    display: block;
                    border-bottom: 1px solid #ddd;
                    color: #066;
                    }

                    div.sdmenu div a.current {
                    background: #ccc;
                    }

                    div.sdmenu div a:hover {
                    background: #066 url(linkarrow.gif) no-repeat right center;
                    color: #fff;
                    text-decoration: none;
                    }
</style>