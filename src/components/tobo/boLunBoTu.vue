<template>
<body>
    <div class="container">
		<div class="col-lg-12">
			<div id="myCarousel" class="carousel slide">
				<ol class="carousel-indicators">
					<li data-target="#myCarouse1" data-slide-to="0" class="active"></li>
					<li data-target="#myCarouse1" data-slide-to="1"></li>
					<li data-target="#myCarouse1" data-slide-to="2"></li>
				</ol>
				<div class="carousel-inner">
					<div class="item active">
						<img src="@/assets/img/a.png" alt="First slide">
						<div class="carousel-caption">运动</div>
					</div>
					<div class="item">
						<img src="@/assets/img/b.png" alt="Second slide">
						<div class="carousel-caption">力量</div>
					</div>
					<div class="item">
						<img src="@/assets/img/c.png" alt="Third slide">
						<div class="carousel-caption">羽毛球</div>
					</div>
				</div>
				<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
					<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a>
				<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
					<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				</a>
			</div>
		</div>
	</div>
</body>
</template> 
<script type="text/javascript">


</script>


<style scoped>
	.carousel-inner img{
			width: 100%;
		}
</style>