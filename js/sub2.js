
/* function con (){
    const ele = document.querySelectorAll('.test li ')
    let pageNum = sessionStorage.pageNum;
        if(pageNum)ele[pageNum].style.backgroundcolor='black'
        ele.forEach(function(m,k){
            m.onclick=function(e){
                sessionStorage.pageNum=k;
            }
        })
} */

$(document).ready(function(){


    $(".list ul li a").each(function(k,v){
        $(this).click(function(e){
            e.preventDefault();
            $(".list ul li").removeClass('on')
            $(".list ul li").eq(k).addClass('on')
        })
    })

})