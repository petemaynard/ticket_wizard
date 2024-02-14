const { Venue } = require('../models');

const venueData = [
   {venue_id: 1, venue_name: "Madison Square Garden", city: "New York City, NY"},
   {venue_id: 2, venue_name: "Staples Center", city: "Los Angeles, CA"},
   {venue_id: 3, venue_name: "United Center", city: "Chicago, IL"},
   {venue_id: 4, venue_name: "Toyota Center", city: "Houston, TX"},
   {venue_id: 5, venue_name: "Talking Stick Resort Arena", city: "Phoenix, AZ"},
   {venue_id: 6, venue_name: "Wells Fargo Center", city: "Philadelphia, PA"},
   {venue_id: 7, venue_name: "AT&T Center", city: "San Antonio, TX"},
   {venue_id: 8, venue_name: "Pechanga Arena", city: "San Diego, CA"},
   {venue_id: 9, venue_name: "Frank Erwin Center", city: "Austin, TX"},
   {venue_id: 10, venue_name: "Spectrum Center", city: "Charlotte, NC"},
   {venue_id: 11, venue_name: "Nationwide Arena", city: "Columbus, OH"},
   {venue_id: 12, venue_name: "American Airlines Center", city: "Dallas, TX"},
   {venue_id: 13, venue_name: "Ball Arena", city: "Denver, CO"},
   {venue_id: 14, venue_name: "Dickies Arena", city: "Fort Worth, TX"},
   {venue_id: 15, venue_name: "Bankers Life Fieldhouse", city: "Indianapolis, IN"},
   {venue_id: 16, venue_name: "VyStar Veterans Memorial Arena", city: "Jacksonville, FL"},
   {venue_id: 17, venue_name: "Chase Center", city: "San Francisco, CA"},
   {venue_id: 18, venue_name: "SAP Center", city: "San Jose, CA"},
   {venue_id: 19, venue_name: "Climate Pledge Arena", city: "Seattle, WA"},
   {venue_id: 20, venue_name: "Capital One Arena", city: "Washington, D.C."},
   {venue_id: 21, venue_name: "Hammerjacks", city: "Baltimore, MA"},
   {venue_id: 22, venue_name: "Target Center", city: "Minneapolis, MN"},
];

const seedVenue = () => Venue.bulkCreate(venueData);

module.exports = seedVenue;


