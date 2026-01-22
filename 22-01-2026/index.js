// API

fetch("https://jsonplaceholder.typicode.com/users")
.then(a => a.json())
.then(a1 => {
    console.log(a1);
})
.catch(a2 => {
    console.log(a2);
})


// 

let output = document.getElementById("users");
let getbtn = document.getElementById("getbtn");
let clearbtn = document.getElementById("clearbtn");

getbtn.addEventListener("click", 
function (){
       fetch("https://jsonplaceholder.typicode.com/users")
       .then(function(response){
        return response.json();
    })
    .then(function(users){

        output.innerHTML = "";
        clearbtn.disabled = false;
        for(let user of users){
        let UserDiv = document.createElement("div");  

        let id = document.createElement("P")
        id.textContent = "ID:" + user.id;

        let name = document.createElement("p");
        name.textContent = "Name:" + user.name;

        let phone = document.createElement("p");
        phone.textContent = "Phone:" + user.phone;
        
        let email = document.createElement("p");
        email.textContent = "Email:" + user.email;
        
        let city = document.createElement("p");
        city.textContent = "City:" + user.address.city;
        
        let geo = document.createElement("p");
        geo.textContent = "Geo:" + user.address.geo.lat + " " + user.address.geo.lng;

        UserDiv.appendChild(id);
        UserDiv.appendChild(name);
        UserDiv.appendChild(phone);
        UserDiv.appendChild(email);
        UserDiv.appendChild(city);
        UserDiv.appendChild(geo);

        UserDiv.appendChild(document.createElement("hr"));

        output.appendChild(UserDiv);
        }
    })
    .catch(function(){
        output.textContent = "Error fecting data";
    });
});


clearbtn.addEventListener("click", function(){
    output.innerHTML = "";
    clearbtn.disabled = true;
});


//

function checkPassword(password){
    return new Promise(function(resolve, reject){
        if(password.length >= 6){
            resolve("Password is strong")
        } else {
            reject("Password is short")
        }
    });
}
checkPassword("12345")
.then(msg =>
    console.log("Correct:", msg)
)
.catch(error => 
    console.log("Incorrect:", error)
);

