let today = new Date();
let now = today.getHours();

if(now<11 && now >=6){
    message = '<h3>let \'em cook breakfast!</h3>';
}
else if (now<14 && now>=11){
    message = '<h3>let \'em cook lunch!</h3>';
}
else if (now>21 && now<=17){
    message = '<h3>Let \'em cook dinner!</h3>';
}
else
{
    message = '<h3>Let \'em cook whatever they want!</h3>';
}
document.write(message);

dateTime = () => {
    document.getElementById('demoTime').innerHTML = Date();
 };
const collection = document.getElementsByClassName("button");
collection[0].addEventListener("click",dateTime);


remove = () =>{
    document.getElementById('demoTime').innerHTML='';
}
collection[0].addEventListener("mouseleave",remove);



