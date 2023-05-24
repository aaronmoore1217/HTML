$("#balls").on("click", function(){
    $("#transition").attr("src", "images/Untitled-250.gif")
    setTimeout(function(){
        window.location.replace("menu.html")
    }, 1100)
})