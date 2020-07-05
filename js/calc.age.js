$(document).ready(function(){
    var birth_date = new Date('December, 24, 1997');
    
    var years,months,days, hours, minutes, seconds;
    var ageCount = document.getElementById('age');
    setInterval(function(){
    
    var current_date = new Date();
    var YearDiff =  (current_date.getYear() - birth_date.getYear());
    var monthDiff = (current_date.getMonth() - birth_date.getMonth());
     if(monthDiff<0)    {monthDiff=-1*monthDiff;}
   
    var daysDiff = (current_date.getDate() - birth_date.getDate());
    if(daysDiff<0)    {daysDiff=-1*daysDiff;}
    var hoursDiff = (current_date.getHours() - birth_date.getHours());
    var minDiff = (current_date.getMinutes() - birth_date.getMinutes());
    var secDiff = (current_date.getSeconds() - birth_date.getSeconds());
    
    
    	 ageCount.innerHTML=YearDiff+' Years '+monthDiff+' Months '+daysDiff+' Days '+hoursDiff+
    	' Hours '+minDiff+' Minutes '+secDiff+' Seconds';
    
    },500);
    
    });