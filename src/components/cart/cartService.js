// //import {message} from 'antd';
//
// class CartService {
//
//     constructor() {
//         this.count = parseInt(localStorage.getItem("count")) || 0;
//         this.total = parseInt(localStorage.getItem("total")) || 0;
//         this.details = JSON.parse(localStorage.getItem("details")) || {}
//     }
//
//     save() {
//         localStorage.setItem("total", this.total);
//         localStorage.setItem("count", this.count);
//         localStorage.setItem("details", JSON.stringify(this.details));
//     }
//
//     clearStorage() {
//         this.count = 0;
//         this.details = {};
//         this.total = 0;
//         this.save();
//     }
//
//     addProduct(product) {
//
//         this.clearStorage();
//         this.details[product.key] = {
//             "item": product
//         };
//         this.count += 1;
//         this.total += parseInt(product.precio);
//         this.save();
//
//         /*if (typeof this.details[product.key] === "undefined") {
//             this.details[product.key] = {
//                 "item": product
//             };
//             this.count += 1;
//             this.total += parseInt(product.precio);
//             this.save();
//         }*/
//     }
//
//     deleteProduct(productId) {
//         this.count -= 1;
//         this.total -= this.details[productId].item.price;
//         delete this.details[productId];
//         this.save();
//     }
//
// }
//
// export default CartService;