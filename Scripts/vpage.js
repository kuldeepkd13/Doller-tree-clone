

    let API = 'https://63ca377e4f53a004201ed865.mockapi.io/vproduct';

    async function fetchdata() {

        try {

            let res = await fetch(API);
            data = await res.json();
            console.log(data)
            // displayData(data)
            filterData(data)
        } catch (error) {
            console.log(error)
        }

    }

    fetchdata();

    let priceEl =document.getElementById("sortPrice");
    let nameEl=document.getElementById("sortNames");
    let selectionEl= document.getElementById("filterRole");
    let heading1El = document.getElementById("heading1")
    selectionEl.addEventListener("change",function(){
        fetchdata()
    })
     function filterData(data){
    if(selectionEl.value==""){
      displayData(data);
    }else {
      let filtered = data.filter((ele)=>{
        if(ele.material==selectionEl.value){
          return true;
        }else {
          return false;
        }
      })
      displayData(filtered)
    }
   }
   nameEl.addEventListener("change", function() {
    if (nameEl.value === "") {
        fetchdata()
    } else {
        if (nameEl.value === "ascending") {
            let sortedData = data.sort(function(a, b) {
                if (a.name < b.name) {
                    return -1;
                } else if (a.name > b.name) {
                    return 1;
                } else {
                    return 0;
                }
            });
            displayData(sortedData);
        } else if (nameEl.value === "descending") {
            let sortedData = data.sort(function(a, b) {
                if (a.name > b.name) {
                    return -1;
                } else if (a.name < b.name) {
                    return 1;
                } else {
                    return 0;
                }
            });
            displayData(sortedData);
        }
    }
});

priceEl.addEventListener("change",function(){
    if(priceEl.value==""){
        fetchdata()
    }
    else 
    
    {if (priceEl.value=="htl"){
        let sortprice = data.sort(function(a,b){
            return b.price-a.price
        });
        displayData(sortprice);
    }else if (priceEl.value=="lth"){
        let sortprice = data.sort(function(a,b){
            return a.price - b.price
        });
        displayData(sortprice)
    }
}
})





    let productEl = document.getElementById("productbar");
    let cart = JSON.parse(localStorage.getItem("cart"))||[];
    function displayData(data){
         productEl.innerHTML="";
        data.forEach(element => {

            let div= document.createElement("div");

            let image = document.createElement("img")
            image.src=element.image;
            let name = document.createElement("h3");
            name.innerText=element.name;
            let price = document.createElement("p");
            price.innerText=  `Rs:-${element.price}`;
            let rating = document.createElement("h5");
            rating.innerText=`Rating ★★★☆`
            let button = document.createElement("button");
            button.innerText="Add To Cart"
            image.addEventListener('click', function() {
                window.location.href = `vsmall.html`;
              });
            button.addEventListener("click",function(){
                if(checkcart(element)){
                    alert("Item is already in the cart")
                }else {
                    cart.push({...element,quantity:1});
                    localStorage.setItem("cart",JSON.stringify(cart))
                    alert("Item Added Successfully")
                }
            })

            div.append(image,name,price,rating,button)
            productEl.append(div)
        });
        heading1El.innerText=data.length
    }

        function checkcart(element){
           for(let i=0;i<cart.length;i++){
            if(cart[i].id===element.id){
                return true;
            }
           }
           return false;
        }

