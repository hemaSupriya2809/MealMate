let cart = JSON.parse(localStorage.getItem("cart")) || [];

displayCart();

function displayCart(){

let table=document.getElementById("cartTable");

table.innerHTML="";

let grandTotal=0;

cart.forEach((item,index)=>{

let total=item.price*item.quantity;

grandTotal+=total;

table.innerHTML+=`

<tr>

<td>${item.name}</td>

<td>₹${item.price}</td>

<td>

<button onclick="decrease(${index})">-</button>

${item.quantity}

<button onclick="increase(${index})">+</button>

</td>

<td>₹${total}</td>

<td>

<button onclick="removeItem(${index})">

Remove

</button>

</td>

</tr>

`;

});

document.getElementById("grandTotal").innerHTML=grandTotal;

localStorage.setItem("cart",JSON.stringify(cart));

}

function increase(index){

cart[index].quantity++;

displayCart();

}

function decrease(index){

if(cart[index].quantity>1){

cart[index].quantity--;

}else{

cart.splice(index,1);

}

displayCart();

}

function removeItem(index){

cart.splice(index,1);

displayCart();

}