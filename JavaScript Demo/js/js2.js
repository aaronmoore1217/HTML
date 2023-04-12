//set up a hotel object
// OBJECT LITERAL DEFINITION 
//
// let hotel= {
//     name: 'The View at Eastland',
//     rooms: 50,
//     booked: 33,

//     checkAvailability: function(){
//         return this.rooms - this.booked;
//     }
// };

// OBJECT CONSTRUCTOR
// let hotel = new Object();
//     hotel.name = 'The River Inn';
//     hotel.rooms = 25;
//     hotel.books = 19;
//     hotel.checkAvailability = function(){return this.rooms - this.booked}

// MULTIPLE OBJECT CONSTRUCTOR
// function Hotel(name, rooms, booked){
//     this.name=name;
//     this.rooms=rooms;
//     this.booked=booked;
//     this.checkAvailability = function(){
//         return this.rooms - this.booked
//     }
// }

// let quayHotel = new Hotel('Quay', 80, 44);
// let parkHotel = new Hotel('Park', 120, 87);


// //update the ids on our HTML document
// let elName = document.getElementById('hotel1');
// let details = quayHotel.name + " Hotel Rooms:"
//     details += quayHotel.checkAvailability();
// elName.textContent = details;


// let elRooms = document.getElementById('hotel2');
// let details2 = parkHotel.name + " Hotel Rooms:"
//     details2 += parkHotel.checkAvailability();
// elRooms.textContent = details2;

//  browser object model // create a msg with browser info // alert msg displays current location
// let message = '<h2>browser window</h2><p>width: ' + window.innerWidth + '</p';
// message += '<br><p>height: ' + window.innerHeight + '</p>';
// message += '<h2>history</h2><p>items: ' + window.history.length + '</p>';
// message += '<h2>screen</h2><p>width: ' + window.screen.width + '</p>';
// message += '<p>height: ' + window.screen.height + '</p>';


// let saying = "Home Sweet Home Ohio";
// let message = '<h2>length: </h2><p>' + saying.length + '</p>'
// message += '<h2>upper: </h2><p>' + saying.toUpperCase() + '</p>'
// message += '<h2>lower: </h2><p>' + saying.toLowerCase() + '</p>'
// message += '<h2>char 12: </h2><p>' + saying.charAt(11) + '</p>'
// message += '<h2>chars 8-14: </h2><p>' + saying.substring(7,14) + '</p>'


// let randomNum = Math.floor(Math.random() * 3 +1);
// message += '<h2>Random Number: </h2><p>' + randomNum + '</p>'
// let elInfo = document.getElementById('info');
// elInfo.innerHTML = message;


// alert('Current page: ' + window.location);


// document object model
// let message2 = '<p><b>page title: </b>' + document.title + '<br/>';
// message2 += '<b>page address </b>' + document.URL + '<br/>';
// message2 += '<b>last modified: </b>' + document.lastModified + '</p>'
let today = new Date();
let year = today.getFullYear();
let startDate = new Date('Mar 24, 2016 09:00:00')
let difference = today.getTime() - startDate.getTime();
difference = (difference/31556900000);

let message2 = '<p>Copyright &copy; ' + year + '</p>'
message2 += '<p>Giving Advice for over ' + Math.floor(difference) + ' years</p>';

let elFooter = document.getElementById('footer');
elFooter.innerHTML = message2;

// Immediately invoked function expression to help protect variable and scope

((function(){
    let hotel={
        name: 'Park',
        roomRate: 250,
        discount: 20,
        offerPrice: function(){
            let offerRate = this.roomRate * (1 - (this.discount / 100));
            return offerRate;
        }
    };

    let elHotelName = document.getElementById('hotelName')
    let elRoomRate = document.getElementById('roomRate')
    let elSpecialRate = document.getElementById('specialRate')

    elHotelName.textContent = hotel.name;
    elRoomRate.textContent = '$' + hotel.roomRate.toFixed(2);
    elSpecialRate.textContent = '$' + hotel.offerPrice();
//end part 1

//part 2 = calculate and write out the expiration details for the offer
    let expMSG = '';
    let elEnds;

    function offerExpires(today){
        let weekFromToday, day, date, month, year, dayNames, monthNames;
        let expDate = new Date(2023,3,31);
        weekFromToday = new Date(today.getTime() + 7*24*60*60*1000)

        //create lists/arrays of day/month Names
        dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();

        let days = expDate.getTime() - today.getTime();
        days = Math.floor(days/(1000*60*60*24*7));
        // create our message
        expMSG = 'Offer expires in ';
        // expMSG += day + '\n(' + month + ' ' + date + ' ' + year + ')';
        expMSG += days + ' days'
        
        return expMSG;
    }

    elEnds = document.getElementById('offerEnds');
    elEnds.innerHTML = offerExpires(today);
}()))