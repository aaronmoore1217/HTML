let elButton = document.getElementById("myButton");
let elCost = document.getElementById("cost");
let cost = 0;

let discount20 = new Date(2023, 3, 30);
let discount10 = new Date(2023, 4, 31);
function schedule()
{
    let q = new Date();
    
    let userDate = new Date(document.getElementById("date").value);
    let currentDate = new Date(q.getFullYear(), q.getMonth(), q.getDate());
    let dayOfTheWeek = userDate.getDay();
    
    let location = document.getElementById("Location").value;
    

    if(currentDate < userDate) {
        if (location == "MountainRetreat"){
            if (currentDate < discount20)
            {
                if (dayOfTheWeek === (1 || 2 || 3)){
                    cost += (50 * 0.7)
                }
                else {
                    cost += (50 * 0.8)
                }
            }
            else if (discount20 < currentDate < discount10)
            {
                if (dayOfTheWeek == 3 || 4 || 5){
                    cost += (50 * 0.8)
                }
                else {
                    cost += (50 * 0.9)
                }
            }
            else {
                if (dayOfTheWeek == 3 || 4 || 5){
                    cost += (50 * 0.9)
                }
                else {
                    cost += 50;
                }
            }
            elCost.innerHTML = "Total Cost: $" + cost;
        }

        else if (location == "TrailGetaway"){
            if (currentDate < discount20)
            {
                cost += (40 * 0.8);
            }
            else if (currentDate < discount10)
            {
                cost += (40 * 0.9);
            }
            else {
                cost += 40;
            }
            elCost.innerHTML = "Total Cost: $" + cost;
        }

        else {
            alert("please select a location")
        }
    }
    else {
        elButton.innerHTML = discount20;
    }
}

// elButton.addEventListener("click", schedule);
