{
  class InvoiceService {
    protected courier: DeliveryService; // dependency

    constructor(courier: DeliveryService) {
      this.courier = courier;
    }

    public getFinalBill(productPrice: number) {
      return productPrice + this.courier.getDeliveryFee();
    }
  }

  // interface create korbo tokhon jokhon ami third party upor depended
  interface DeliveryService {
    getDeliveryFee(): number;
  }

  class PathaoCourier implements DeliveryService {
    public getDeliveryFee(): number {
      return 50;
    }
  }

  class Redux implements DeliveryService {
    public getDeliveryFee(): number {
      return 40;
    }
  }
}
