var today=new Date()
document.write("Today="+today+"<br>"+"<br>");

var day=today.getDay()
document.write(day+"<br>");

if((day==0)||(day==6))
{
    document.write("This day is week end")
}
else{
    document.write("This day is not week end")
}