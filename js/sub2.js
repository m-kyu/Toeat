const con = document.querySelector('.con')
let tag ='';

let s_arr = sessionStorage.getItem('s_code'), l_arr = localStorage.getItem('w_code');

$(".list ul li a").each(function(k,v){
    $(this).click(function(e){
        e.preventDefault();
        con.innerHTML=``;   
        $(".list ul li").removeClass('on')
        $(".list ul li").eq(k).addClass('on')
        if(v.innerText == "최근 본 맛집"){
            tag ='';
            list(s_arr)
        } else {
            tag ='';
            list(l_arr)
        }
    })
})


function list(q) {
    fetch('./js/data/md.json')
    .then(res=>res.json())
    .then(({list})=>{   
        list.forEach((v,k)=>{
            if(!q) { tag = ` <h2> 최근 본 목록이 없습니다. </h2> ` }
            else {
                let code_arr = q.split(',');
                for(let i=0; i<code_arr.length; i++){
                    if(v.code == code_arr[i]){
                        tag += `
                        <li class="on2" onclick="pageMove(${k})">
                                <figure>
                                    <img src="${v.images}" alt="">
                                    <p class = "ad">
                                    ${v.adress}
                                    </p>
                                    <i class="fa-solid fa-location-dot"></i>
                                </figure>
                                    <b>${v.name}</b>
                                    <p>${v.time}</p>
                                    <p>${v.phone}</p>
                        </li>
                        `
                        
                    }
                }
            }
            
        })
        con.innerHTML = tag;
    })
}

list(s_arr)

function pageMove(e){
    localStorage.setItem("pagecode",e);
    location.href='./detail.html';
}


