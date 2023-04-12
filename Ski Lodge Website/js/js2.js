let elButton = document.getElementById("myButton");

function schedule()
{
    let date = document.getElementById("date").value;
    let newDate = new Date();
    let currentDate = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate())
    let location = document.getElementById("Location").value;

    // if(currentDate > date) {
    //     alert("Current Date is Greater THan the User Date");
    // } else {
    //     alert("Current Date is Less than the User Date");
    // }

        if (location == "MountainRetreat"){
            elButton.innerHTML = "moumtain";
        }

        else if (location == "TrailGetaway"){
            elButton.innerHTML = "trail";
        }

        else {
            elButton.innerHTML = currentDate;
        }
}

elButton.addEventListener("click", schedule);
