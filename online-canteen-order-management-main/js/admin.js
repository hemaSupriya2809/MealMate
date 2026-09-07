if(localStorage.getItem("admin")!="true"){

window.location.href="admin-login.html";

}

let foods=JSON.parse(localStorage.getItem("foods")) || [];

displayFoods();

function addFood(){

let name=document.getElementById("foodName").value;

let price=document.getElementById("foodPrice").value;

let image=document.getElementById("foodImage").value;

foods.push({

id:Date.now(),

name:name,

price:Number(price),

image:image

});

localStorage.setItem("foods",JSON.stringify(foods));

displayFoods();

document.getElementById("foodName").value="";
document.getElementById("foodPrice").value="";
document.getElementById("foodImage").value="";

}

function displayFoods(){

let table=document.getElementById("foodTable");

table.innerHTML="";

foods.forEach((food,index)=>{

table.innerHTML+=`

<tr>

<td>${food.name}</td>

<td>₹${food.price}</td>

<td>

<button onclick="deleteFood(${index})">

Delete

</button>

</td>

</tr>

`;

});

}

function deleteFood(index){

foods.splice(index,1);

localStorage.setItem("foods",JSON.stringify(foods));

displayFoods();

}

let orders=JSON.parse(localStorage.getItem("orders")) || [];

let orderDiv=document.getElementById("orders");

if(orders.length==0){

orderDiv.innerHTML="<h3>No Orders</h3>";

}else{

orders.forEach(order=>{

orderDiv.innerHTML+=`

<p>

<b>${order.student}</b>

<br>

${order.date}

<br>

Grand Total : ₹${order.grandTotal}

</p>

<hr>

`;

});

}

function logout(){

localStorage.removeItem("admin");

window.location.href="admin-login.html";

}