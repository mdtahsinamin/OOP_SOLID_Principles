{
  const getOrderTotal = (order) => {
    let total = order.reduce((acc, cur) => {
      acc += cur.price * cur.quantity;
      return acc;
    }, 0);

    total = total * getTexRate(order.country);

    return total;
  };

  /*
   * // beshi change hobe tokhon take alada babe isolate korbo
   */
  const getTexRate = (country: string): number => {
    if (country === "US") {
      return 0.07;
    }

    // add country

    return 0;
  };
}
