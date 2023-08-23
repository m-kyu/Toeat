const elUl = document.querySelector('.d-list')
let code='';
fetch('./js/data/md.json')
.then(res=>res.json())
.then(data=>{   
    let k = localStorage.getItem("pagecode")
    let item = data.list[k]
    code = item.code;
    let sk = sessionStorage.getItem("s_code")
    if(!sk){
        sessionStorage.setItem('s_code',item.code)
    }else{
        if(!sk.includes(item.code)){
            let codes = sk + ',' + item.code;
            sessionStorage.setItem('s_code',codes)
        }
    }
    
    if(!k) {
        alert("정상적인 접근 해주세요.")
        location.href='./';
        return false;
    }
    elUl.innerHTML = `
                <li class="d-on" >
                    <b>${item.name}</b>
                    <p class="des">${item.description}</p>
                    <figure>
                        <img src="${item.images}" alt="">
                    </figure>
                    <p>${item.menus}</p>
                    <p class = "ad1">
                    <i class="fa-solid fa-location-dot"></i>
                        ${item.adress}
                    </p>
                    <p>${item.phone}</p>
                    <p>${item.time}</p>
                </li>
    `
});


$(".rev a").on('click',(e)=>{
    e.preventDefault();
    localStorage.setItem("wr_code",code)
    location.href='./write.html';
})