

/* code of days   *****************/
var today=new Date();
var day=today.getDay();
var daylist=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
document.getElementById("arr").innerHTML="DAY:"+daylist[day];

/*code of calender */
var dd=today.getDate();
var mm=today.getMonth()+1;
var yyy=today.getFullYear();
if(dd<10){
    dd='0'+dd;
}
if(mm<10){
    dd='0'+mm;
}
var result=dd+"-"+mm+"-"+yyy+"."
document.getElementById("arrr").innerHTML="DATE:"+result;

/* code of Time */
var hour=today.getHours();
var minute=today.getMinutes();
var second=today.getSeconds();
var prepand=(hour>=12)?'PM':'AM';
hour=(hour>=12)?hour-12:hour;

if(hour===0 && prepand==='PM'){
    if(minute===0 && second===0){
        hour=12;
        prepand='Noon';
    }
else{
    hour=12;
    prepand='PM';
  }  
}
if(hour===0 && prepand==='AM'){
    if(minute==0 && second==0){
        hour=12;
        prepand='Midnight';
    }
else{
    hour=12;
    prepand='AM';
 }
}
time=hour+":"+minute+":"+second+" "+prepand;
document.getElementById("tt").innerHTML="TIME:"+time;
