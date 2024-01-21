"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product(description, productId, price) {
        this.setDescription(description);
        this.setProductId(productId);
        this.setPrice(price);
    }
    Product.prototype.getDescription = function () {
        return this.description;
    };
    Product.prototype.getProductId = function () {
        return this.productId;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.setDescription = function (description) {
        if (description.length > 0) {
            this.description = description;
        }
        else {
            this.description = "chua biet";
        }
    };
    Product.prototype.setProductId = function (productId) {
        if (productId.length > 0) {
            this.productId = productId;
        }
        else {
            this.description = "chua biet";
        }
    };
    Product.prototype.setPrice = function (price) {
        if (price > 0) {
            this.price = price;
        }
        else {
            this.price = 0;
        }
    };
    Product.prototype.toString = function () {
        return "ProductId: ".concat(this.productId, ", Description: ").concat(this.description, ", Price:").concat(this.price);
    };
    return Product;
}());
exports.default = Product;
