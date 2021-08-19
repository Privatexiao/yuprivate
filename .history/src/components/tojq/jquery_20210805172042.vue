<template>
<body>
    <p id="myId">单击我</p>
</body>
</template> 


<script>
	export default {
    name: 'jquery',
    methods:{
        [
            $(document).ready(function(e){
			$("#myId").click(function(){
				$("#myId").html("Hello World");
			});
		}),
        ]
    }
}
</script>