const foods=[

{
id:1,
name:"Pizza",
price:120,
image:"image/pizza.jpg"
},

{
id:2,
name:"Burger",
price:90,
image:"image/burger.jpg"
},

{
id:3,
name:"Dosa",
price:70,
image:"image/dosa.jpg"
},

{
id:4,
name:"Coffee",
price:40,
image:"image/coffee.jpg"
},

{
id:5,
name:"Meals",
price:120,
image:"image/meals.jpg"
},

{
id:6,
name:"Sandwich",
price:80,
image:"image/sandwich.jpg"
}

];

displayFoods(foods);

function displayFoods(data){

let menu=document.getElementById("menu");

menu.innerHTML="";

data.forEach(food=>{

menu.innerHTML+=`

<div class="card">

<img src="${food.image}">

<h3>${food.name}</h3>

<p>₹ ${food.price}</p>

<button onclick="addCart(${food.id})">

Add to Cart

</button>

</div>

`;

});

}

function searchFood(){

let value=document.getElementById("search").value.toLowerCase();

let filtered=foods.filter(food=>food.name.toLowerCase().includes(value));

displayFoods(filtered);

}

function addCart(id){

let cart=JSON.parse(localStorage.getItem("cart")) || [];

let food=foods.find(item=>item.id==id);

let exist=cart.find(item=>item.id==id);

if(exist){

exist.quantity++;

}else{

food.quantity=1;

cart.push(food);

}

localStorage.setItem("cart",JSON.stringify(cart));

alert("Item Added to Cart");

}