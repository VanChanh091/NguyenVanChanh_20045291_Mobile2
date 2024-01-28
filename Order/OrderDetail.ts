import Product from "./product";

class OrderDetails {
  private quantity: number;
  private product: Product;

  constructor(quantity: number, product: Product) {
    this.setQuantity(quantity);
    this.setProduct(product);
  }

  getQuantity():number{
    return this.quantity;
  }

  getProduct():Product{
    return this.product;
  }

  setQuantity(quantity:number):void{
    if(quantity>0){
        this.quantity = quantity;
    }else{
        this.quantity = 0;
    }
  }

  setProduct(product:Product):void{
    this.product = product;
  }

  calTotalPrice():number{
    return this.quantity * this.product.getPrice();
  }

  toString():string{
    return `Product ${this.product}, Quantity ${this.quantity}, TotalPrice ${this.calTotalPrice()}`;
  }
}

export default OrderDetails;