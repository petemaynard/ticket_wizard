module.exports = {
   format_time: (date) => {
      return date.toLocaleTimeString();
   },
   format_date: (date) => {
      const d = new Date(date + ' UTC');

      // Adjust for zero-based indexing
      const month = d.getUTCMonth() + 1;
      const day = d.getUTCDate();
      const year = d.getUTCFullYear();

      const formattedMonth = month.toString();
      const formattedDay = day.toString();

      return `${formattedMonth}/${formattedDay}/${year}`;
   },

   format_currency: (amount) => {
      let USDollar = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD",
      });
      return `${USDollar.format(amount)}`;
   },
};
