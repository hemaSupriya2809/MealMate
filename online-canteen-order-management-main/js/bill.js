let cart = JSON.parse(localStorage.getItem("cart")) || [];

let table = document.getElementById("billTable");

let subtotal = 0;

document.getElementById("date").innerHTML =
new Date().toLocaleString();

cart.forEach(item=>{

let total=item.price*item.quantity;

subtotal+=total;

table.innerHTML+=`

<tr>

<td>${item.name}</td>

<td>${item.quantity}</td>

<td>₹${item.price}</td>

<td>₹${total}</td>

</tr>

`;

});

let gst=(subtotal*5)/100;

let grand=subtotal+gst;

document.getElementById("subtotal").innerHTML=subtotal.toFixed(2);

document.getElementById("gst").innerHTML=gst.toFixed(2);

document.getElementById("grand").innerHTML=grand.toFixed(2);

function placeOrder(){

let user=JSON.parse(localStorage.getItem("loggedInUser"));

let orders=JSON.parse(localStorage.getItem("orders")) || [];

orders.push({

student:user.name,

date:new Date().toLocaleString(),

items:cart,

subtotal:subtotal,

gst:gst,

grandTotal:grand

});

localStorage.setItem("orders",JSON.stringify(orders));

localStorage.removeItem("cart");

alert("Order Placed Successfully!");

window.location.href="orders.html";

}