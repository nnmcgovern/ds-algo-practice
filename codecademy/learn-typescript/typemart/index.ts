import products from "./products";

let productName: string = products[2].name;
let product;
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress: string = "123 Main Street";

for (let i: number = 0; i < products.length; i++) {
  if (productName === products[i].name) {
    product = products[i];
    break;
  }
}

if (product.preOrder === "true") {
  console.log("We'll send a message when your order is on its way.")
}

if (Number(product.price) > 25) {
  shipping = 0;
  console.log("We provide free shipping for this product.");
} else {
  shipping = 5;
}

if (shippingAddress.match("New York")) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05;
}

taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;

console.log(product.name);
console.log(shippingAddress);
console.log(product.price);
console.log(taxTotal);
console.log(shipping);
console.log(total);