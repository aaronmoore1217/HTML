let elHome = document.getElementById("home");
let elEvents = document.getElementById("events");
let elLessons = document.getElementById("lessons");
let elSnowReports = document.getElementById("reports");
let elEmployment = document.getElementById("employment");
let elOpenNav = document.getElementById("openNav");

function openNav(){
    document.getElementById("nav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    elHome.innerHTML = '<i class="fa-solid fa-house fa-2xl"></i>' + ' Home';
    elEvents.innerHTML = '<i class="fa-solid fa-calendar-days fa-2xl"></i>' + ' Events';
    elLessons.innerHTML = '<i class="fa-solid fa-person-skiing fa-2xl"></i>' + ' Skiing Lessons';
    elSnowReports.innerHTML = '<i class="fa-solid fa-snowflake fa-2xl"></i>' + ' Snow Reports';
    elEmployment.innerHTML = '<i class="fa-solid fa-user-tie fa-2xl"></i>' + ' Employment';
    elOpenNav.innerHTML = '<a onclick="closeNav()"><i class="fa-solid fa-arrow-left fa-2xl"></i></a>'
}
function closeNav(){
    document.getElementById("nav").style.width = "auto";
    document.getElementById("main").style.marginLeft = "6rem";
    elHome.innerHTML = '<i class="fa-solid fa-house fa-2xl"></i>';
    elEvents.innerHTML = '<i class="fa-solid fa-calendar-days fa-2xl"></i>';
    elLessons.innerHTML = '<i class="fa-solid fa-person-skiing fa-2xl"></i>';
    elSnowReports.innerHTML = '<i class="fa-solid fa-snowflake fa-2xl"></i>';
    elEmployment.innerHTML = '<i class="fa-solid fa-user-tie fa-2xl"></i>';
    elOpenNav.innerHTML = '<a onclick="openNav()"><i class="fa-solid fa-arrow-right fa-2xl"></i></a>'
}