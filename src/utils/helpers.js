module.exports = {
  format_date: (date) => {
    // Check if date is undefined or not a string
    if (typeof date !== 'string') {
      console.error('format_date called with invalid date:', date);
      // Return a default value or handle the error as appropriate
      return 'Invalid date';
    }
  },

  format_currency: (amount) => {
    let USDollar = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return `${USDollar.format(amount)}`;
  },
};
