module.exports = {
  format_date: (date) => {
    const dateArray = date.split("-");
    return `${new Number(dateArray[1])}/${new Number(dateArray[2])}/${new Number(dateArray[0])}`;
  },
};
