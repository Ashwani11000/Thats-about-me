$(document).ready(function(){
    var birth_date = new Date('April, 24, 1997');
    var mon_day=[31,28,31,30,31,30,31,31,30,31,30,31];
    var year=new Date().getYear();
    if(((year % 4 == 0) && (year % 100 != 0)) ||  (year % 400 == 0))
    {
        mon_day[1]++;
    }
    var years,months,days, hours, minutes, seconds;
    var ageCount = document.getElementById('age');
    setInterval(function(){
    var current_date = new Date();
    var month=current_date.getMonth();
    var day=mon_day[month-1];

    var YearDiff =  (current_date.getYear() - birth_date.getYear());
    
    var monthDiff = (current_date.getMonth() - birth_date.getMonth());
     if(monthDiff<0)    {
         monthDiff=current_date.getMonth()+(12-birth_date.getMonth())
         YearDiff=YearDiff-1;
     }
   
    var daysDiff = (current_date.getDate() - birth_date.getDate());
    if(daysDiff<0)    {
        daysDiff=current_date.getDate()+(day-birth_date.getDate());
        monthDiff=monthDiff-1;
    }
    
    
    var hoursDiff = (current_date.getHours() - birth_date.getHours());
    var minDiff = (current_date.getMinutes() - birth_date.getMinutes());
    var secDiff = (current_date.getSeconds() - birth_date.getSeconds());
    
    
    	 ageCount.innerHTML=YearDiff+' Years '+monthDiff+' Months '+(daysDiff-1)+' Days '+hoursDiff+
    	' Hours '+minDiff+' Minutes '+secDiff+' Seconds :D';
    
    },500);
    
    });