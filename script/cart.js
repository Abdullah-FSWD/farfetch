    let total=0;

     let result=document.getElementById("showCartProducts")

     let check=document.querySelector("#checkout")

     let cartItem=JSON.parse(localStorage.getItem("products"))
     console.log('cartItem:', cartItem)

    
   showData(cartItem)

   checkout()

   console.log ("total:" , total)

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
         total+=+el.amount

         let remove=document.createElement("button")
         remove.innerText="Remove"
         remove.setAttribute("class","remove")

        

         remove.addEventListener("click", function(){

           localStorage.removeItem("products")
         })
       


         div.append(img,season,brand,type,amount,remove)

         result.append(div)
     })
   }

   function checkout(){
       let amount=document.createElement("h4")
       amount.innerText=`Total Amount:  ${total}`

       total=total-Math.floor(total*20)/100
       let off=document.createElement("h4")
       off.innerText=`20% off: -${Math.floor(total*20)/100}`

       let tax=document.createElement("h4")
       total=total+Math.floor(total*18)/100
       tax.innerText=`Tax(18%): ${Math.floor(total*18)/100}`

       let amountPaid=document.createElement("h3")

       amountPaid.innerText=`Total Amount:  $${total}`
       amountPaid.style.backgroundColor="Teal"

       let buy=document.createElement("button")
       buy.innerText="Buy Now"
    buy.setAttribute("class","Buy")

      buy.addEventListener("click", function(){
        window.location.href="checkout.html"
        })

     check.append(amount,off,tax,amountPaid,buy)

    }