let xhr = new XMLHttpRequest(); //router = peripherals("top")

xhr.onload = function() {

    if(xhr.status === 200){
        let responseObject = JSON.parse(xhr.responseText);

        //begin to build content for the webpage
        let newContent = '';

        //loop through object to obtain all elements/data to add to the webpage
        for( let i = 0; i < responseObject.events.length; ++i){
            newContent += '<div class="event">';
            newContent += '<img src="' + responseObject.events[i].map + '" ';
            newContent += 'alt="' + responseObject.events[i].location + '" />'
            newContent += '<p><b>' + responseObject.events[i].location + '<br>'
            newContent += responseObject.events[i].date + '</b></p>'
            newContent += '</div>';
        }

        document.getElementById('content').innerHTML = newContent;
    }
}

xhr.open('GET', 'data/data.json', true); //router.open

xhr.send(null); //router.recieve