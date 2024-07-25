class InvoiceService {
  protected courier: PathaoCourier; // dependency 

  constructor(courier: PathaoCourier) {
    this.courier = courier;
  }

  public getFinalBill(productPrice: number) {
    return productPrice + this.courier.getDeliveryFee();
  }
}

class PathaoCourier {
  public getDeliveryFee(): number {
    return 50;
  }
}
