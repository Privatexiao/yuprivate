<script scoped>
import'../assets/js/swiper.min.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
     var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
</script>