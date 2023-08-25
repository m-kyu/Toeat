$("header").addClass('sub')
$("footer").addClass('sub')
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


$(".rev a:nth-of-type(2)").on('click',(e)=>{
    e.preventDefault();
    localStorage.setItem("wr_code",code)
    location.href='./write.html';
})




let wr_arr =[];
function checkCode(){
    let wr_code = localStorage.getItem("w_code");
    let setData = localStorage.getItem("pagecode");
    wr_arr = wr_code.split(',')
    if(wr_arr[0] == ''){
        $(".fav").toggleClass('active');
    } else {
        for(let i=0; i<wr_arr.length; i++){
            if(wr_arr[i] != setData){
            } else {
                for(let i=0; i<wr_arr.length; i++){
                    if(wr_arr[i] == setData){
                        $(".fav").addClass('active')
                    } else {
                        $(".fav").removeClass('active')
                    }
                }
            }
        }
    }
}

$(".rev a:nth-of-type(1)").on('click',(e)=>{
    e.preventDefault();
    let w_codes = localStorage.getItem("w_code")
    let this_code = localStorage.getItem("pagecode");
    if(!w_codes){
        localStorage.setItem("w_code",this_code)
    } else {
        let w_arr = w_codes.split(',')
        for(let i=0; i<w_arr.length; i++){
            if(w_arr[i] != this_code){
                let codes = w_codes + "," + this_code
                localStorage.setItem("w_code", codes)
            } else {
                localStorage.setItem("w_code", w_arr.filter(v => v != this_code));
            }
        }
    }    
    checkCode()

})

checkCode()