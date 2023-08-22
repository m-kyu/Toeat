const elUl = document.querySelector('.list');
let tag ='',cnt=0,maxCnt=10;;

function dataSet(cnts,maxCnts){
    fetch('./js/data/seoulmat.json')
    .then( (res) => res.json())
    .then(({review})=>{
        tag='';
        for(let i=cnts; i<maxCnts; i++){
            tag += `
            <li data-code="${review[i].code}">
                <div class="matname"><p></p><span><img src="./images/sub_3/Group 101.png" alt=""></span></div>
                <div class="star"><img src="./images/sub_3/star${review[i].start}.png" alt=""></div>
                <div class="img"><img src="${review[i].images}" alt=""></div>
                <div class="say"><p>${review[i].content}</p></div>
            </li>
            `
        }
        elUl.innerHTML+=tag;
        title_set();
    })
    
    function title_set(){
        const elLi = document.querySelectorAll(".list li");
        elLi.forEach(function(j,q){
            fetch('./js/data/md.json')
            .then( (res2) => res2.json())
            .then(({list})=>{
                list.forEach((v,k)=>{
                    if(v.code == j.dataset['code']){
                        $(elLi).eq(q).find('.matname > p').text(v.name)
                    }
                })      
            })
        })
    
    }
}
dataSet(cnt,maxCnt);

function more(){
    console.log(cnt,maxCnt)
    cnt = maxCnt;
    maxCnt += 10;
    dataSet(cnt,maxCnt);
}

//검색기능
const inputs = document.querySelector('.search input');
const searchbtn = document.querySelector('.searchbtn');


searchbtn.addEventListener('click',()=>{
    searchData(inputs.value)
})

function searchData(e){
    fetch('./js/data/md.json')
    .then(res => res.json())
    .then(({list})=>{
        list.forEach((v,k)=>{
            tag='';
            elUl.innerHTML='';
            if(v.name == e){
                fetch('./js/data/seoulmat.json')
                .then(res2 => res2.json())
                .then(({review})=>{
                    review.forEach((d,q)=>{
                        if(d.code == v.code) {
                            elUl.innerHTML += `
                            <li data-code="${v.code}">
                                <div class="matname"><p>${v.name}</p><span><img src="./images/sub_3/Group 101.png" alt=""></span></div>
                                <div class="star"><img src="./images/sub_3/star${d.start}.png" alt=""></div>
                                <div class="img"><img src="${d.images}" alt=""></div>
                                <div class="say"><p>${d.content}</p></div>
                            </li>
                            
                            `
                        }
                    })
                })
            }
        })
    })
}





