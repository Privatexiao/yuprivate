
var index=0;
    var word=document.getElementById("w").innerHTML;
    function type(){
        document.getElementById("intro_aa").innerText = word.substring(0,index++);
    }
    setInterval(type, 200);