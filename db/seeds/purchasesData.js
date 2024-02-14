const { Purchases } = require('../models');

const purchasesData = [

   {cust_tix_id: 1, cust_id: 1, perf_id: 3, seat_grade: "V", seat_count: 2, purchased: 1, },
   {cust_tix_id: 2, cust_id: 2, perf_id: 6, seat_grade: "A", seat_count: 4, purchased: 1, },
   {cust_tix_id: 3, cust_id: 3, perf_id: 9, seat_grade: "A", seat_count: 4, purchased: 1, },
   {cust_tix_id: 4, cust_id: 4, perf_id: 12, seat_grade: "B", seat_count: 6, purchased: 1, },
   {cust_tix_id: 5, cust_id: 5, perf_id: 15, seat_grade: "B", seat_count: 2, purchased: 1, },
   {cust_tix_id: 6, cust_id: 6, perf_id: 18, seat_grade: "C", seat_count: 2, purchased: 1, },
   {cust_tix_id: 7, cust_id: 7, perf_id: 21, seat_grade: "C", seat_count: 2, purchased: 1, },
   {cust_tix_id: 8, cust_id: 8, perf_id: 25, seat_grade: "V", seat_count: 3, purchased: 1, },
   {cust_tix_id: 9, cust_id: 9, perf_id: 35, seat_grade: "A", seat_count: 2, purchased: 1, },
   {cust_tix_id: 10, cust_id: 10, perf_id: 45, seat_grade: "B", seat_count: 2, purchased: 1, },

];

const seedPurchases = () => Purchases.bulkCreate(purchasesData);

module.exports = seedPurchases;
