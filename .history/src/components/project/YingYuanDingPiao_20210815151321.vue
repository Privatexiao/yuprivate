<template>
<body>
    <head>
<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE-edge">
	<meta name="viewport" content="width=device-width,initial-scale=1">
<title>影院购票</title>
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/cinema.css">
	<script src="js/jquery-3.6.0.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/vue.js"></script>
	<script src="js/cinema.js"></script>
</head>
<div class="container" id="app">
		<div class="row">
			<div class="col-md-6">
				<div class="row">
					<!--左上半部分-->
					<ul>
						<li id="screen">
							<h1>屏幕</h1>
						</li>
						<hr>
						<li class="seat" v-for="(item,index) in seatflag" 
							:key="index" :class="{'seatNo':seatflag[index]==-1,
							'seatActive':seatflag[index]==1,
							'seatSpace':seatflag[index]==0,
							'seatNouse':seatflag[index]==2}"
							 @click="handleClick(index)"></li>
					</ul>
				</div>
				<div class="row">
					<!--左下半部分-->
					<hr>
					<ul>
						<li class="seat seatActive"></li>
						<span class="notice">已选座位</span>
						<li class="seat seatSpace"></li>
						<span class="notice">可选座位</span>
						<li class="seat seatNouse"></li>
						<span class="notice">售出座位</span>
						
					</ul>
				</div>
			</div>
			<div  class="col-md-6 sceenRight">
				<div class="row">
						<!--右上半部分-->
						<div class="media">
                            <div class="media-left">
                                <a href="#">
                                    <img class="media-object" :src="filmInfo.filmImg" alt="..." height="200px">
                                </a>
                            </div>
                            <div class="media-body">
                            <h4 class="media-heading">中文名：<strong>{{filmInfo.name}}</strong></h4>
                            <h4 class="media-heading">英文名：<strong>{{filmInfo.nameEnglish}}</strong></h4>
                            <p>剧情：{{filmInfo.storyType}}</p>
                            <p>版本：{{filmInfo.copyRight}}</p>
                            <p>{{filmInfo.place}}/{{filmInfo.timeLength}}</p>
                            <p>{{filmInfo.timeShow}}</p>
                        </div>
					</div>
				</div>
				<div class="row">
					<!--右下半部分 -->
					<p>影院：<strong>{{filmInfo.cinema}}</strong></p>
					<p>影厅：<strong>{{filmInfo.room}}</strong></p>
					<p>场次：<strong>{{filmInfo.time}}</strong></p>
					<p id="seatSelect">座位：<span v-for="(item,index) in curSeatDisp" :key="index">{{item}}</span></p>
					<p>已选择<strong style="color:red;">{{count}}</strong>个座位，<strong style="color:red;">再次单击座位可取消。<span v-if="maxFlag">您一次最多只能买五张票！</span></strong></p>
					<hr>
					<p>单价：<strong>{{filmInfo.unitPrice | numberFormat}}</strong></p>
					<p>总价：<strong style="color:red;">{{totalPrice | numberFormat}}</strong></p>
					<hr>
					<button type="button" class="btn btn-success" style="margin:0 200px;">确认信息，下单</button> <!--@click="filmSubmit"-->
				</div>
			</div>
		</div>
	</div>
</body>
</template> 
<script type="text/javascript">
        export default {   
                mounted() {
                    
                                
                }
                }

</script>


<style lang="css" scoped>
    @import "../../assets/css/xmsc.css";
</style>