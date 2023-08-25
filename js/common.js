$(document).ready(function () {
    $("header").load("./header.html",hover)
    $("footer").load("./footer.html")

    function hover(){
        $("header li:nth-of-type(4)").on('mouseenter',()=>{
            $("header li:nth-of-type(4) ul").slideDown();
        })
        $("header li:nth-of-type(4)").on('mouseleave',()=>{
            $("header li:nth-of-type(4) ul").slideUp();
        })
    }
})
