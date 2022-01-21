let data=[
    {
        img:"https://cdn-images.farfetch-contents.com/17/85/56/68/17855668_37664833_600.jpg",
        season:"New Season",
        brand:"AMIRI",
        type:"down-feather logo-print jacket",
        amount:"$3,042"
    },
    {
        img:["https://cdn-images.farfetch-contents.com/17/85/07/40/17850740_37668489_600.jpg"],
        season:"New Season",
        brand:"AMIRI",
        type:"down-feather logo-print jacket",
        amount:"$3,042"
    },
    {
        img:["https://cdn-images.farfetch-contents.com/17/83/46/65/17834665_37738435_600.jpg"],
        season:"New Season",
        brand:"AMIRI",
        type:"down-feather logo-print jacket",
        amount:"$3,042"
    },
    {
        img:["https://cdn-images.farfetch-contents.com/17/53/80/30/17538030_37558778_600.jpg"],
        season:"New Season",
        brand:"AMIRI",
        type:"down-feather logo-print jacket",
        amount:"$3,042"
    },
]

let result =document.getElementById("display-flex")
function showData(data){
  data.forEach((el)=>{
     let div=document.createElement("div")

      let img=document.createElement("img")
      img.src=el.img;

     let  season=document.createElement("h6")
      season.innerText=el.season

      let brand = document.createElement("h4")
      brand.innerText=el.brand

      let type=document.createElement("h5")
      type.innerText=el.type

      let amount=document.createElement("h4")
      amount.innerText=el.amount

      div.append(img,season,brand,type,amount)

      result.append(div)
  })
}
showData(data)

let data1=[
  {img:"https://cdn-static.farfetch-contents.com/cms-cm/in/media/3134012/data/7b9c9bf4e3b5aec20833f00044e233a5.jpg?ratio=3x4_three-columns&minWidth=409",
    brand:"ISABEL MARANT",
    type:"A Parisian take on daywear",
  },
  {img:"https://cdn-static.farfetch-contents.com/cms-cm/in/media/3134034/data/909dec9949132fa3cf8d56fee7119658.jpg?ratio=3x4_three-columns&minWidth=409",
    brand:"NEW SNEAKER DROPS",
    type:"Meet the future classics",
  },
  {img:"https://cdn-static.farfetch-contents.com/cms-cm/in/media/3134044/data/b8abb9fd849de4d05dec5467becff2a9.jpg?ratio=3x4_three-columns&minWidth=409",
    brand:"BRUNELLO CUCINELLI",
    type:"Modern tailoring to wear on repeat",
  },
]


let result1=document.getElementById("display-flex1")
function showData1(data1){
  data1.forEach((el)=>{
     let div=document.createElement("div")

      let img=document.createElement("img")
      img.src=el.img;

     let  season=document.createElement("h6")
      season.innerText=el.season

      let brand = document.createElement("h4")
      brand.innerText=el.brand

      let type=document.createElement("h5")
      type.innerText=el.type

      div.append(img,season,brand,type)

      result1.append(div)
  })
}
showData1(data1)

let data2=[
    {
        img:"https://cdn-images.farfetch-contents.com/17/45/71/52/17457152_36637834_600.jpg",
        season:"New Season",
        brand:"AMIRI",
        type:"down-feather logo-print jacket",
        amount:"3,042"
    },
    {
        img:["https://cdn-images.farfetch-contents.com/17/62/03/36/17620336_36746291_600.jpg"],
        season:"New Season",
        brand:"AMIRI",
        type:"down-feather logo-print jacket",
        amount:"3,042"
    },
    {
        img:["https://cdn-images.farfetch-contents.com/17/57/42/72/17574272_37020496_600.jpg"],
        season:"New Season",
        brand:"AMIRI",
        type:"down-feather logo-print jacket",
        amount:"3,042"
    },
    {
        img:["https://cdn-images.farfetch-contents.com/17/59/22/19/17592219_36598213_600.jpg"],
        season:"New Season",
        brand:"AMIRI",
        type:"down-feather logo-print jacket",
        amount:"3,042"
    },
]


let result2 =document.getElementById("display-flex2")
function showData2(data2){
  data2.forEach((el)=>{
     let div=document.createElement("div")

      let img=document.createElement("img")
      img.src=el.img;

     let  season=document.createElement("h6")
      season.innerText=el.season

      let brand = document.createElement("h4")
      brand.innerText=el.brand

      let type=document.createElement("h5")
      type.innerText=el.type

      let amount=document.createElement("h4")
      amount.innerText=` $ ${el.amount}`

      div.append(img,season,brand,type,amount)

      result2.append(div)
  })
}
showData2(data2)