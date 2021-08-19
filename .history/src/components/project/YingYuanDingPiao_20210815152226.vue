<template>
<body>
    <!-- <head>
    <meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE-edge">
	<meta name="viewport" content="width=device-width,initial-scale=1">
<title>影院购票</title>
</head> -->

</body>
</template> 
<script type="text/javascript">
        export default {   
            // data:{
			// 	curSeat:[],
			// 	curSeatDisp:[],
			// 	count:0,
			// 	maxLength:5,
			// 	maxFlag:false,
			// 	seatCol:10,
			// 	seatflag:[
			// 		0,0,0,0,0,0,0,0,0,0,
			// 		0,0,0,0,0,0,0,0,0,0,
			// 		0,0,0,0,0,0,0,0,0,0,
			// 		0,0,0,0,0,0,0,0,0,0,
			// 		0,0,0,0,0,0,0,0,0,0,
			// 		0,0,0,0,0,2,0,0,0,0,
			// 		0,0,0,0,0,0,0,0,0,0,
			// 		0,0,0,0,0,2,2,0,0,0,
			// 		0,0,0,2,2,0,2,2,0,0,
			// 		-1,0,0,0,0,0,0,0,0,-1,
			// 		-1,-1,0,0,0,0,0,0,-1,-1,
			// 	],
			// 	filmInfo:{
            //             name:'急先锋',
            //             nameEnglish:'Abc Def sajsd',
            //             copyRight:'中文2D',
            //             filmImg:'img/jxf.jpg',
            //             storyType:'惊险',
            //             place:'中国大陆',
            //             timeLength:'126分钟',
            //             timeShow:'2020.02',
            //             cinema:'万达影城',
            //             room:'8号影厅',
            //             time:'2020.05.18(周一)20:00',
            //             unitPrice:'38',
			// }
			// },
            // computed:{
			// 	totalPrice:function(){
			// 	return this.conut * this.filmInfo.unitPrice;
			// 	},
            // methods:{
			// 	handleClick:function(index){
			// 		if(vm.seatflag[index]==1){
			// 			vm.$set(vm.seatflag,index,0);
			// 			this.curSeat.splice(this.curSeat.findIndex(item=>item===index),1);
			// 		}else
			// 			if(vm.seatflag[index]==0 && this.count<5){
			// 				vm.$set(vm.seatflag,index,1);
			// 				this.curSeat.push(index);
			// 			}
			// 		this.curSeatDisp=[];
			// 		for(let item of this.curSeat){
			// 			this.curSeatDisp.push((Math.floor(item / this.seatCol)+1)+"行"+(item % this.seatCol +1)+"列");
			// 		}
			// 		var mySeat = vm.seatflag.filter(item=>{
			// 			return item==1;
			// 		})
			// 		this.count=mySeat.length;
			// 		if(this.count>=5)this.maxFlag=true;
			// 		else this.maxFlag=false;
			// 	}
			// },
                
            //     }
        }
</script>


<style lang="css" scoped>
    @import "../../assets/css/yyxt.css";
</style>