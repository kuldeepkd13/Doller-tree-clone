let data = JSON.parse(localStorage.getItem("userdata")) || [];
let formEl = document.querySelector("form");
let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let passwordEl = document.getElementById("password");

formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    let formdata = {
        name: nameEl.value,
        email: emailEl.value,
        password: passwordEl.value,
    }

    data.push(formdata);
    localStorage.setItem("userdata", JSON.stringify(data));
})
let inputEl = document.getElementById("alert");
inputEl.addEventListener("click",function(){
    if(nameEl.value==="" && emailEl.value==="" && passwordEl.value===""){
        alert("fill the data first")
    }else{
        alert("Account Created")
        window.location.href='signin.html'
    }
})