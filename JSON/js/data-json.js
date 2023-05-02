let xhr = new XMLHttpRequest(); //router = peripherals("top")

xhr.onload = function() {

    if(xhr.status === 200){
        let responseObject = JSON.parse(xhr.responseText);

        //begin to build content for the webpage
        let newContent = '';

        //loop through object to obtain all elements/data to add to the webpage
        for( let i = 0; i < 1; ++i){
            newContent += '';
        }
    }
}

xhr.open(); //router.open

xhr.send(null); //router.recieve