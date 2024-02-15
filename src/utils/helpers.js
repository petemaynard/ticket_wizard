module.exports = {
  format_date: (date) => {
    const dateArray = date.split("-");
    return `${new Number(dateArray[1])}/${new Number(dateArray[2])}/${new Number(dateArray[0])}`;
  },

  format_currency: (amount) => {
    let USDollar = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return `${USDollar.format(amount)}`;
  },
};
