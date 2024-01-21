class Product {
  private description: string;
  private productId: string;
  private price: number;

  constructor(description: string, productId: string, price: number) {
    this.setDescription(description);
    this.setProductId(productId);
    this.setPrice(price);
  }

  getDescription():string{
    return this.description;
  }

  getProductId():string{
    return  this.productId;
  }

  getPrice():number{
    return this.price;
  }

  setDescription(description: string):void{
    if(description.length>0){
        this.description = description;
    }else{
        this.description = "chua biet";
    }
  }

  setProductId( productId: string):void{
    if(productId.length > 0){
        this.productId = productId;
    }else{
        this.description = "chua biet";
    }
  }

  setPrice(price: number):void{
    if(price > 0){
        this.price = price;
    }else{
        this.price = 0;
    }
  }

  toString():string{
    return `ProductId: ${this.productId}, Description: ${this.description}, Price:${this.price}`;
  }
}

export default Product;