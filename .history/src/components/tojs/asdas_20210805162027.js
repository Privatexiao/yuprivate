window.onload=function(){
    Stamp = new Date();
    document.write('<font size="20"><B>' + Stamp.getFullYear()+"年"+(Stamp.getMonth()+1)+"月"+Stamp.getDate()+"日"+'</B></font><BR>');
    Hours = Stamp.getHours();
    if(Hours>=12){
        Time="下午";
    }else{
        Time="上午";
    }
    if(Hours>12){
        Hours-=12;
    }if(Hours==12){
        Hours=12;
    }
    Mins=Stamp.getMinutes();
    Seconds =Stamp.getSeconds();
    if(Mins<10){
        Mins = "0" +Mins;
    }
    document.write('<font size="15"><B>' +Time+Hours+":"+Mins+":"+Seconds+'</B></font>');
}
export{St}