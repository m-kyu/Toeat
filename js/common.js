$(document).ready(function () {
    $("header").load("./header.html", k)
    $("footer").load("./footer.html")


})

function link(v,k){
    sessionStorage.setItem("active", k)
    location.href = v;
}

function k() {
    sessionStorage.active && $('header nav ul li').eq(sessionStorage.active).addClass('active')
    if(sessionStorage.active != 0) {
        sessionStorage.active && $('header').addClass('sub')
        sessionStorage.active && $('footer').addClass('sub')
    }
    $("header nav ul li a").click(function(e){
        e.preventDefault();
        let li = $("header nav ul li a").index(this), url = $(this).attr('href')
        if(li == 4 || li == 5) li = 3;
        history.pushState({active:li},'',url)
        link(url,li);
    })

    $("header figure a").on('click',(e)=>{
        e.preventDefault();
        history.pushState({active:0},'','index.html')
        link('index.html',0);
    })
}


$(window).on('popstate',function(){
    let li = history.state?.active || 0
    let url = $('header nav ul li').eq(li).find('a').attr('href')
    link(url,li)
})