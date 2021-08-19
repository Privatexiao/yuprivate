<template>
  <nav class="navbar navbar-default" role="navigation">  
    <div class="container-fluid">  
      <!-- Brand and toggle get grouped for better mobile display -->  
      <div class="navbar-header">  
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">  
          <span class="sr-only">Toggle navigation</span>  
          <span class="icon-bar"></span>  
          <span class="icon-bar"></span>  
          <span class="icon-bar"></span>  
        </button>  
        <a class="navbar-brand" href="#">{{ msg }}</a>  
      </div>  
  
      <!-- Collect the nav links, forms, and other content for toggling -->  
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">  
        <ul class="nav navbar-nav"> 
          <li><a href="#" style="margin: 0;padding: 5px;"><img src="@/assets/img/LOGO.png" style="border-radius: 50%;width: 40px;height: 40px;"></a></li>
          <li class="active"><a href="#">Private</a></li>  
          <li><a href="#" style="color:#02b7ff;">你好</a></li>  
          <li class="dropdown">  
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Css <span class="caret"></span></a>  
            <ul class="dropdown-menu" role="menu">  
              <li><a @click="toCss_ccdw">层次定位</a></li>
              <li><a @click="toCss_fd">Another action</a></li>  
              <li><a href="#">Something else here</a></li>  
              <li class="divider"></li>  
              <li><a href="#">Separated link</a></li>  
              <li class="divider"></li>  
              <li><a href="#">One more separated link</a></li>  
            </ul>  
          </li>

          <li class="dropdown">  
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">javaScript <span class="caret"></span></a>  
            <ul class="dropdown-menu" role="menu">  
              <li><a href="#">Action</a></li>  
              <li><a href="#">Another action</a></li>  
              <li><a href="#">Something else here</a></li>  
              <li class="divider"></li>  
              <li><a href="#">Separated link</a></li>  
              <li class="divider"></li>  
              <li><a href="#">One more separated link</a></li>  
            </ul>  
          </li>
          <ul class="nav navbar-nav navbar-left">  
          <li class="dropdown">  
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">jQuery <span class="caret"></span></a>  
            <ul class="dropdown-menu" role="menu">  
              <li><a href="#">Action</a></li>  
              <li><a href="#">Another action</a></li>  
              <li><a href="#">Something else here</a></li>  
              <li class="divider"></li>  
              <li><a href="#">Separated link</a></li>  
              <li class="divider"></li>  
              <li><a href="#">One more separated link</a></li>  
            </ul>  
          </li>
          <li class="dropdown">  
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Ajax <span class="caret"></span></a>  
            <ul class="dropdown-menu" role="menu">  
              <li><a href="#">Action</a></li>  
              <li><a href="#">Another action</a></li>  
              <li><a href="#">Something else here</a></li>  
              <li class="divider"></li>  
              <li><a href="#">Separated link</a></li>  
              <li class="divider"></li>  
              <li><a href="#">One more separated link</a></li>  
            </ul>  
          </li> 
          <li class="dropdown">  
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Bootstrap <span class="caret"></span></a>  
            <ul class="dropdown-menu" role="menu">  
              <li><a href="#">Action</a></li>  
              <li><a href="#">Another action</a></li>  
              <li><a href="#">Something else here</a></li>  
              <li class="divider"></li>  
              <li><a href="#">Separated link</a></li>  
              <li class="divider"></li>  
              <li><a href="#">One more separated link</a></li>  
            </ul>  
          </li>
          <li class="dropdown">  
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Vue.js <span class="caret"></span></a>  
            <ul class="dropdown-menu" role="menu">  
              <li><a href="#">Action</a></li>  
              <li><a href="#">Another action</a></li>  
              <li><a href="#">Something else here</a></li>  
              <li class="divider"></li>  
              <li><a href="#">Separated link</a></li>  
              <li class="divider"></li>  
              <li><a href="#">One more separated link</a></li>  
            </ul>  
          </li>
          <li class="dropdown">  
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">项目<span class="caret"></span></a>  
            <ul class="dropdown-menu" role="menu">  
              <li><a href="#">Action</a></li>  
              <li><a href="#">Another action</a></li>  
              <li><a href="#">Something else here</a></li>  
              <li class="divider"></li>  
              <li><a href="#">Separated link</a></li>  
            </ul>  
          </li> 
        </ul>  
        </ul> 
        <form class="navbar-form navbar-right" role="search">  
          <div class="form-group">  
            <input type="text" class="form-control" placeholder="Search">  
          </div>  
          <button type="submit" class="btn btn-default">Submit</button>  
        </form>  
      </div><!-- /.navbar-collapse -->  
    </div><!-- /.container-fluid -->  
  </nav> 
</template>

<script>
  export default {
  name: 'HelloWorld',
  // data () {
  //   return {
  //     msg: '哈哈'
  //   }
  // },
  methods:{
    // 层次定位跳转
    toCss_ccdw(){
      this.$router.push('/toCss/CengCiDingWei')
    },
    {
      
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}


</style>
