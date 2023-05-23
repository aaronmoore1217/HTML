$("#balls").on("click", function(){
    $("#transition").attr("src", "images/sample-gif.gif")
    setTimeout(function(){
        window.location.replace("menu.html")
    }, 1100)
})