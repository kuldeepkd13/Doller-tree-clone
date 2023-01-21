

    let API = 'https://63ca377e4f53a004201ed865.mockapi.io/vproduct';

    async function fetchdata() {

        try {

            let res = await fetch(API);
            let data = await res.json();
            console.log(data)
            displayData(data)
        } catch (error) {
            console.log(error)
        }

    }

    fetchdata();

    let productEl = document.getElementById("productbar");
    let cart = JSON.parse(localStorage.getItem("cart"))||[];
    function displayData(data){

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
        
    }

        function checkcart(element){
           for(let i=0;i<cart.length;i++){
            if(cart[i].id===element.id){
                return true;
            }
           }
           return false;
        }

