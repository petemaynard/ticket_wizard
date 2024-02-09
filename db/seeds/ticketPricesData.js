const { TicketPrices } = require('../models');

const ticketPrices=
[
   {
      seat_grade: 'V',
      seat_grade_desc: "VIP Seat",
      seat_base_price: 250,
   },
   {
      seat_grade: 'A',
      seat_grade_desc: "Floor Front Seat",
      seat_base_price: 100,
   },
   {
      seat_grade: 'B',
      seat_grade_desc: "Floor Rear Seat",
      seat_base_price: 75,
   },
   {
      seat_grade: 'C',
      seat_grade_desc: "Balcony Seat",
      seat_base_price: 50,
   },
];

const seedTicketPrices = () => TicketPrices.bulkCreate(ticketPrices);

module.exports = seedTicketPrices;