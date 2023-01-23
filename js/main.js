let elForm = document.querySelector('.form')
let elList = document.querySelector('.list')
let elInp = document.querySelector('.inp')

let dataArr = [
    {
        id:1,
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.zoodmall.uz%2Fen%2Fproduct%2F17040700%2Fmobilnyy-telefon-nokia-6310-2021%2F&psig=AOvVaw1C6PrlblD4ZQsB3KUvY1q0&ust=1674538281125000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOjdvp2W3fwCFQAAAAAdAAAAABAE',
        name: 'Nokia',
        color: 'black',
        model: 'Fly',
        price: '150 000'
    },
    {
        id:2,
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fportativ.ua%2Fproduct_18004.html&psig=AOvVaw0UcvGUjvxRQAzndoWM34iV&ust=1674451497510000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKjAmIfT2vwCFQAAAAAdAAAAABAD',
        name: 'J2',
        color: 'greenyellow',
        model: 'Samsung',
        price: '250 000'
    },
    {
        id:3,
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aliexpress.com%2Fitem%2F33041758759.html&psig=AOvVaw0pSQgFMoHqiDhpUQhT5zaL&ust=1674451568160000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOjv77_T2vwCFQAAAAAdAAAAABAU',
        name: 'A50',
        color: 'gold',
        model: 'Samsung',
        price: '3 000 000'
    },
    {
        id:4,
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.walmart.ca%2Fen%2Fip%2FPhone-Case-for-Samsung-Galaxy-A32-4g-Purple-Samsung-A32-Case-Silicone-Samsung-Galaxy-A32-Cases-Shockproof-Samsung-A32-4g-Camellia-Red%2FPRD3CZ45GLICV3Q&psig=AOvVaw2EVtKUIDICELXy8odc2bpn&ust=1674451711058000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNjd6eTT2vwCFQAAAAAdAAAAABAJ',
        name: 'A32',
        color: 'red',
        model: 'Samsung',
        price: '2 500 000'
    },
    {
        id:5,
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Folcha.uz%2Foz%2Fproduct%2Fview%2Fsamsung-galaxy-a72-6128-white&psig=AOvVaw2hR6S4AMOh2I806z-ST0Dx&ust=1674451805104000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKDj9pTU2vwCFQAAAAAdAAAAABAF',
        name: 'A72',
        color: 'white',
        model: 'Samsung',
        price: '3 500 000'
    },
    {
        id:6,
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fapple-iphone-pro-max-gold-front-back-sides-comparison-apple-iphone-pro-max-rose-gold-front-back-sides-comparison-image245528458&psig=AOvVaw0DGqHSuD5ybQL8jSAGcjts&ust=1674452108247000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNiTm5_V2vwCFQAAAAAdAAAAABAE',
        name: '13Pro',
        color: 'gold',
        model: 'Iphone',
        price: '8 000 000'
    },
    {
        id:7,
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.giznext.com%2Fmobiles%2Fapple-iphone-12-pro-gnt%2Fimages&psig=AOvVaw2iXdA26PIIj-Uxbmc3Vc5H&ust=1674452578131000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMCQwIDX2vwCFQAAAAAdAAAAABAE',
        name: '12Pro',
        color: 'black',
        model: 'Iphone',
        price: '7 000 000'
    },
]

elForm.addEventListener('submit', (evn)=>{
    evn.preventDefault();
    let inpVal = elInp.value;
    const newDataArr = []
    elList.innerHTML = ''
    dataArr.forEach((e)=> {
        if(e.name.toLowerCase().indexOf(inpVal.trim().toLowerCase()) !=-1 || e.model.toLowerCase().indexOf(inpVal.trim().toLowerCase() )!=-1) {
            newDataArr.push(e);
            let newLi = document.createElement('li')
            newLi.innerHTML = `<div class="card">
            <img src="${e.img}" alt="">
            <h2 class="name">${e.name}</h2>
            <p class="color">${e.color}</p>
            <h3 class="model">${e.model}</h3>
            <b class="price">${e.price}</b>
        </div>`
            elList.appendChild(newLi)
        }
    })
    console.log(newDataArr);
    elInp.value = ''
})


