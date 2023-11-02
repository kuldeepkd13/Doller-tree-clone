let productEl = document.getElementById("productbar");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let totalEl=document.getElementById("total")
function displayData(data) {
    productEl.innerHTML = "";
    cart.forEach(element => {

        let div = document.createElement("div");

        let image = document.createElement("img")
        image.src = element.image;
        let name = document.createElement("h3");
        name.innerText = element.name;
        let price = document.createElement("p");
        price.innerText = `Rs:-${element.price}`;
        let rating = document.createElement("h5");
        rating.innerText = `Rating ★★★☆`
        let button = document.createElement("button");
        button.innerText = "+"
        let quantity = document.createElement("span");
        quantity.innerText = element.quantity;
        let button2 = document.createElement("button");
        button2.innerText = "-"
        let button3 = document.createElement("button");
        button3.innerText = "Remove"

        button.addEventListener("click", function () {
            element = element.quantity++;
            localStorage.setItem("cart", JSON.stringify(cart));
            displayData();
        })
        button2.addEventListener("click", function () {
            if (element.quantity > 1) {
                element = element.quantity--;
                localStorage.setItem("cart", JSON.stringify(cart));
                displayData();
            }
        })
        button3.addEventListener("click", function () {
            cart = cart.filter((ele) => {
                if (element.id === ele.id) {
                    return false
                } else {
                    return true
                }
            })
            localStorage.setItem("cart", JSON.stringify(cart));
            displayData();
        })

        div.append(image, name, price, rating, button, quantity, button2, button3)
        productEl.append(div)
    });
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
        sum += cart[i].price * cart[i].quantity;
    }
    totalEl.innerText = sum
    let itemsEl = document.getElementById("items");
    itemsEl.innerText=cart.length;
}
displayData();

