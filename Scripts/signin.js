let data = JSON.parse(localStorage.getItem("userdata")) || [];
let formEl = document.querySelector("form");
let emailEl = document.getElementById("email");
let passwordEl = document.getElementById("password");

formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    data.forEach(element => {
        if (element.email === emailEl.value && element.password === passwordEl.value) {
            alert('Welcome To One-Click Pick')
            window.location.href = 'index.html'
        }
        else {
            alert("Wrong credential")
        }
    });

})