"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderDetail_1 = require("./OrderDetail");
var product_3 = require("./product");
var Order = /** @class */ (function () {
    function Order(orderId, orderDate) {
        this.orderId = orderId;
        this.setOrderDate(orderDate);
    }
    Order.prototype.getOrderId = function () {
        return this.orderId;
    };
    Order.prototype.getOrderDate = function () {
        return this.orderDate;
    };
    Order.prototype.getLineItems = function () {
        return this.lineItems;
    };
    Order.prototype.getCount = function () {
        return this.count;
    };
    Order.prototype.setOrderDate = function (orderDate) {
        this.orderDate = orderDate;
    };
    Order.prototype.addLineItems = function (product, quantity) {
        var orderDetail = new OrderDetail_1.default(quantity, product);
        this.lineItems.push(orderDetail);
    };
    Order.prototype.calTotalCharge = function () {
        var total = 0;
        this.lineItems.forEach(function (Element) {
            total += Element.calTotalPrice();
        });
        return total;
    };
    Order.prototype.toString = function () {
        return "MaHD: ".concat(this.orderId, " \n Ngay lap HD: ").concat(this.orderDate, " \n STT: ").concat(this.count, ", ").concat(this.lineItems, " \n \n    Tong tien thanh toan: ").concat(this.calTotalCharge());
    };
    return Order;
}());
function main() {
    var product_1 = new product_3.default("sp4", "Nuoc tuong", 13000);
    var product_2 = new product_3.default("Sp1", "Gao", 18000);
    // let detail_1:OrderDetails = new OrderDetails(10, product_1);
    // let detail_2:OrderDetails = new OrderDetails(5, product_2);
    var order_1 = new Order(1, new Date());
    var order_2 = new Order(2, new Date());
    order_1.addLineItems(product_1, 10);
    order_2.addLineItems(product_2, 5);
    console.log(order_1);
    console.log(order_2);
}
main();
