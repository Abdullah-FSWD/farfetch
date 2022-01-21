let result=document.getElementById("display-grid")
let  cartItem=[]

 cartItem=JSON.parse(localStorage.getItem("products")) || [];
 console.log('cartItem:', cartItem)


 let data=[
     {
         img:"https://cdn-images.farfetch-contents.com/17/85/95/59/17859559_37642493_480.jpg",
         season:"New Season",
         brand:"AMIRI",
         type:"down-feather logo-print jacket",
         amount:"3042"
     },
     {
         img:"https://cdn-images.farfetch-contents.com/17/85/85/45/17858545_37616011_480.jpg",
         season:"New Season",
         brand:"AMIRI",
         type:"down-feather logo-print jacket",
         amount:"3042"
     },
     {
         img:"https://cdn-images.farfetch-contents.com/17/86/33/69/17863369_37597619_480.jpg",
         season:"New Season",
         brand:"AMIRI",
         type:"down-feather logo-print jacket",
         amount:"3042"
     },
     {
         img:"https://cdn-images.farfetch-contents.com/17/86/31/66/17863166_37594171_480.jpg",
         season:"New Season",
         brand:"AMIRI",
         type:"down-feather logo-print jacket",
         amount:"3042"
     },
     {
       img:"https://cdn-images.farfetch-contents.com/17/84/89/85/17848985_37625796_480.jpg",
       season:"New Season",
       brand:"Drill Bucket",
       type:"Prada",
       amount:"505",
     },
     {
       img:"https://cdn-images.farfetch-contents.com/17/53/07/58/17530758_37608955_480.jpg",
       season:"New Season",
       brand:"RIck Owens",
       type:"round neck short sleeve",
       amount:"680",
     },
     {
       img:"https://cdn-images.farfetch-contents.com/17/83/91/21/17839121_37638502_480.jpg",
       season:"New Season",
       brand:"Amiri",
       type:"Skel Top High Snekears",
       amount:"1252",
     },
     {
       img:"https://cdn-images.farfetch-contents.com/17/15/08/94/17150894_34838298_480.jpg",
       season:"New season",
       brand:"Isaek naeabt",
       type:"new Season",
       amount:"530",
     },
     {
       img:"https://cdn-images.farfetch-contents.com/17/44/37/17/17443717_36600061_480.jpg",
       season:"New Season",
       brand:"1AMI Paris",
       type:"mid-rise straight-leg jeans",
       amount:"325",
     },
     {
       img:"https://cdn-images.farfetch-contents.com/17/80/68/77/17806877_5cb476ab-321a-4d80-a573-ea103b7e97ee_480.jpg",
       season:"Exclusiv ",
       brand:"Jw Anderson",
       type:"strawberry-motif pool slides",
       amount:"275",
     },
     {
       img:"https://cdn-images.farfetch-contents.com/17/84/32/08/17843208_37651412_480.jpg",
       season:"New Season ",
       brand:"Isabel Marant",
       type:"obersized trench coat",
       amount:"886",
     },
     {
       img:"https://cdn-images.farfetch-contents.com/17/84/32/08/17843208_37651412_480.jpg",
       season:"New Season",
       brand:"Jil Sander",
       type:"Logo Totoe bag",
       amount:"1044",
     },
 ]

 document.getElementById("select").addEventListener("change", function(){
  let select=document.getElementById("select").value
  console.log('select:', select)
  if (select==="LtH"){
   data= data.sort(function(a,b){
      return a.amount-b.amount
    })
    showData(data)
  }else{
    data= data.sort(function(a,b){
      return b.amount-a.amount
    })
    showData(data)
  }
 })


 function showData(data){
   result.innerHTML=null;
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
       amount.innerText=` $ ${el.amount}`

       let btn=document.createElement("button")
       btn.innerText="Add to Cart"
       btn.setAttribute("id","add")

       btn.addEventListener("click", function(){
         cartItem.push(el)
        
         localStorage.setItem("products", JSON.stringify(cartItem))
       })
       div.append(img,season,brand,type,amount,btn)

       result.append(div)
   })
 }
 showData(data)