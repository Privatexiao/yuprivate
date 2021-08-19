// 图片切换
window.onload=function(){
            
    let prev = document.getElementById("prev");
    let next = document.getElementById("next");

    let img =document.getElementsByName("img1")[0];
    
    let imgArr =["img/a.jpg","img/b.jpg","img/c.jpg","img/d.jpg","img/e.jpg"];
    
    let index = 0;

    prev.onclick = function(){
        index--;
        if(index<0){
            index=imgArr.length-1;
        }
        img.src = imgArr[index];
    };

    next.onclick = function(){
        index++;
        if (index>imgArr.length-1){
            index=0;
        }
        img.src = imgArr[index];
    };

    // 定时器
    setInterval(function(){
        index++;
        if(index>=imgArr.length){
            index=0;
        }
        img.src = imgArr[index];
    },2000);
};
