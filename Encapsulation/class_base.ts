{
  class Order {
    protected _texCalculator: TexCalculator;
    getOrderTotal(order) {
      let total = order.reduce((acc, cur) => {
        acc += cur.price * cur.quantity;
        return acc;
      }, 0);

      total = total * this._texCalculator.getTexRate("US", "New");
    }
  }

  class TexCalculator {
    public getTexRate(country, state) {
      if (country === "US") {
        return this._getUSTexRate(state);
      }

      return 0;
    }

    private _getUSTexRate(state) {
      //
      return 0;
    }
  }
}
