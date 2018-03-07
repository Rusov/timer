var pointDate = new Date("2018-04-06T10:00:00Z").getTime();//указываем свою дату, которая еще не наступила. Если дата наступила, таймер будет показывать все по нулям
var time = pointDate-new Date().getTime();
time = Math.round(time/1000);
function parseTime_bv(timestamp){
    if (timestamp < 0) timestamp = 0;
  
    var day = Math.floor((timestamp/60/60) / 24);
    var hour = Math.floor(timestamp/60/60);
    var mins = Math.floor((timestamp - hour*60*60)/60);
    var secs = Math.floor(timestamp - hour*60*60 - mins*60);
    var left_hour = Math.floor((timestamp - day*24*60*60) / 60 / 60 );
  
    $('.timer_day').text(day);
    $('.timer_hour').text(left_hour);

    if(day==1 || day.toString().slice(-1)==1 && day>20){
    	var minDay = 'день';
    } else if (day==2 || day==3 || day==4 || day.toString().slice(-1)==2 && day>20 || day.toString().slice(-1)==3 && day>20 || day.toString().slice(-1)==4 && day>20) {
    	var minDay = 'дня';
    } else {
    	var minDay = 'дней';
    }
    
    if(hour==1 || hour.toString().slice(-1)==1 && hour>20){
    	var minHour = 'час';
    } else if (hour==2 || hour==3 || hour==4 || hour.toString().slice(-1)==2 && hour>20 || hour.toString().slice(-1)==3 && hour>20 || hour.toString().slice(-1)==4 && hour>20) {
    	var minHour = 'часа';
    } else {
    	var minHour = 'часов';
    }

    if(mins==1 || mins.toString().slice(-1)==1 && mins>20){
    	var minText = 'минута';
    } else if (mins==2 || mins==3 || mins==4 || mins.toString().slice(-1)==2 && mins>20 || mins.toString().slice(-1)==3 && mins>20 || mins.toString().slice(-1)==4 && mins>20) {
    	var minText = 'минуты';
    } else {
    	var minText = 'минут';
    }

    if(secs==1 || secs.toString().slice(-1)==1 && secs>20){
    	var minSecs = 'секунда';
    } else if (secs==2 || secs==3 || secs==4 || secs.toString().slice(-1)==2 && secs>20 || secs.toString().slice(-1)==3 && secs>20 || secs.toString().slice(-1)==4 && secs>20) {
    	var minSecs = 'секунды';
    } else {
    	var minSecs = 'секунд';
    }

    $('.afss_days_bv_text').text(minDay);
    $('.afss_hours_bv_text').text(minHour);
    $('.afss_mins_bv_text').text(minText);
    $('.afss_secs_bv_text').text(minSecs);
  
    if(String(mins).length > 1)
        $('.timer_min').text(mins);
    else
        $('.timer_min').text("0" + mins);
    if(String(secs).length > 1)
        $('.timer_sec').text(secs);
    else
        $('.timer_sec').text("0" + secs);
      
}
  
$(document).ready(function(){
    setInterval(function(){
        time = time - 1;
        parseTime_bv(time);
        if(time <= 0){
            console.log('Окончание таймера');
        }
    }, 1000);
});