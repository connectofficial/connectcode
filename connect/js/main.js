
var icon = document.getElementById("clickme");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme"); 
    if(document.body.classList.contains("dark-theme")){
        logo.src = "img/output-onlinepngtools.png"
        yt.src = "img/output-onlinepngtools.png"
    }else{
        logo.src = "img/connect (1).png"
        yt.src = "img/connect (1).png"
    }

}


window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})