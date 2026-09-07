let orders = JSON.parse(localStorage.getItem("orders")) || [];

let container = document.getElementById("ordersContainer");

if(orders.length==0){

container.innerHTML="<h2 style='text-align:center'>No Orders Found</h2>";

}

orders.forEach((order,index)=>{

let html=`

<div class="order-card">

<h3>Order ${index+1}</h3>

<p><b>Student :</b> ${order.student}</p>

<p><b>Date :</b> ${order.date}</p>

<table>

<tr>

<th>Food</th>

<th>Qty</th>

<th>Price</th>

<th>Total</th>

</tr>

`;

order.items.forEach(item=>{

html+=`

<tr>

<td>${item.name}</td>

<td>${item.quantity}</td>

<td>₹${item.price}</td>

<td>₹${item.price*item.quantity}</td>

</tr>

`;

});

html+=`

</table>

<p><b>Subtotal :</b> ₹${order.subtotal.toFixed(2)}</p>

<p><b>GST :</b> ₹${order.gst.toFixed(2)}</p>

<p><b>Grand Total :</b> ₹${order.grandTotal.toFixed(2)}</p>

</div>

`;

container.innerHTML+=html;

});

function clearOrders(){

if(confirm("Are you sure you want to clear all orders?")){

localStorage.removeItem("orders");

location.reload();

}

}