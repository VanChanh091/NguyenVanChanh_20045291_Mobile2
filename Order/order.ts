import OrderDetails from "./OrderDetail";
import Product from "./product";

class Order{
  private orderId: number;
  private orderDate: Date;
  private lineItems: OrderDetails[];
  private count: number;

  constructor(orderId: number, orderDate: Date) {
    this.orderId = orderId;
    this.setOrderDate(orderDate);
  }

  getOrderId(): number {
    return this.orderId;
  }

  getOrderDate(): Date {
    return this.orderDate;
  }

  getLineItems(): OrderDetails[] {
    return this.lineItems;
  }

  getCount(): number {
    return this.count;
  }

  setOrderDate(orderDate: Date): void {
    this.orderDate = orderDate;
  }

  addLineItems(product: Product, quantity: number): void {
    let orderDetail = new OrderDetails(quantity, product);
    this.lineItems.push(orderDetail);
  }

  calTotalCharge(): number {
    let total: number = 0;
    this.lineItems.forEach((Element) => {
      total += Element.calTotalPrice();
    });
    return total;
  }

  toString(): string {
    return `MaHD: ${this.orderId} \n Ngay lap HD: ${this.orderDate} \n STT: ${
      this.count
    }, ${this.lineItems} \n 
    Tong tien thanh toan: ${this.calTotalCharge()}`;
  }
}

function main(): void {
  let product_1: Product = new Product("sp4", "Nuoc tuong", 13000);
  let product_2: Product = new Product("Sp1", "Gao", 18000);

  // let detail_1:OrderDetails = new OrderDetails(10, product_1);
  // let detail_2:OrderDetails = new OrderDetails(5, product_2);

  let order_1: Order = new Order(1, new Date());
  let order_2: Order = new Order(2, new Date());

  order_1.addLineItems(product_1, 10);
  order_2.addLineItems(product_2, 5);

  console.log(order_1);
  console.log(order_2);
}

main();
