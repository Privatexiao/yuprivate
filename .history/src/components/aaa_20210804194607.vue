
<template>
	<div>我是aaa
	<button @click="back">点我返回</button>
	</div>
	
</template>
 
<script>
export default {
  name: 'aaa',
  /*data () {
    return {
      msg: '哈哈'
    }
  },*/
  methods:{
  	back(){
  		this.$router.push('/')
  	}
  }
}
</script
————————————————
版权声明：本文为CSDN博主「w_t_y_y」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/w_t_y_y/article/details/80825143