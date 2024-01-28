"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderDetails = /** @class */ (function () {
    function OrderDetails(quantity, product) {
        this.setQuantity(quantity);
        this.setProduct(product);
    }
    OrderDetails.prototype.getQuantity = function () {
        return this.quantity;
    };
    OrderDetails.prototype.getProduct = function () {
        return this.product;
    };
    OrderDetails.prototype.setQuantity = function (quantity) {
        if (quantity > 0) {
            this.quantity = quantity;
        }
        else {
            this.quantity = 0;
        }
    };
    OrderDetails.prototype.setProduct = function (product) {
        this.product = product;
    };
    OrderDetails.prototype.calTotalPrice = function () {
        return this.quantity * this.product.getPrice();
    };
    OrderDetails.prototype.toString = function () {
        return "Product ".concat(this.product, ", Quantity ").concat(this.quantity, ", TotalPrice ").concat(this.calTotalPrice());
    };
    return OrderDetails;
}());
exports.default = OrderDetails;
