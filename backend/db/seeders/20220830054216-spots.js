'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Spots', [
    {
        "ownerId": 1,
        "address": "Cupar",
        "city": "Fife",
        "state": "Scotland",
        "country": "United Kingdom",
        "lat": 56.3333331,
        "lng": -3.0000001,
        "name": "Kinnettles Mansion",
        "description": "The Kinnettles Mansion hosts eight large bedrooms/ suites, each of which has its own individual character and decor from the original interiors when the property was first built albeit tastefully restored over the years.",
        "price": "630"
    },
    {
        "ownerId": 2,
        "address": "Hwy 18 & Kuffle Canyon (Sky Forest) West, Rim of the World Highway",
        "city": "Skyforest",
        "state": "California",
        "country": "United States",
        "lat": 34.2354166,
        "lng": -117.1792338,
        "name": "Castle in the Forest",
        "description": "Nestled in a deep canyon nearby serene Lake Arrowhead \u2013 you will find Southern California\u2019s secret gem: the Castle In the Forest.",
        "price": "3450"
    },
    {
        "ownerId": 3,
        "address": "226, North Rexford Drive",
        "city": "Beverly Hills",
        "state": "California",
        "country": "United States",
        "lat": 34.0696501,
        "lng": -118.3963062,
        "name": "Chateau de Laurel",
        "description": "Cancel before 4:00 PM on Oct 1 and only get a refund of the hospitality fee..",
        "price": "15840"
    },
    {
        "ownerId": 4,
        "address": "Access Trail 56, North Shore",
        "city": "Lake Arrowhead",
        "state": "California",
        "country": "United States",
        "lat": 34.2585615,
        "lng": -117.18300401517857,
        "name": "Spectacular Lake Front Retreat",
        "description": "LUXURY LAKE FRONT historic property- newly remodeled with updated features! Relax in the Restoration Hardware furniture as you enjoy the wonderful lake views from nearly every room in the house.",
        "price": "2000"
    },
    {
        "ownerId": 5,
        "address": "70-380, Highway 111",
        "city": "Rancho Mirage",
        "state": "California",
        "country": "United States",
        "lat": 33.757805,
        "lng": -116.4354884,
        "name": "'Chateau Dumont' 18,000 sqft, 15 BR/13 BA Resort Compound",
        "description": "The Chateau Dumont (formerly known as the Solomon Estate) is a spectacular 5 acre paradise that sleeps 30, with 15 bedrooms, 13 bathrooms and 18,000 square feet in the heart of Rancho Mirage.",
        "price": "3928"
    },
    {
        "ownerId": 1,
        "address": "East Sawmill Lot, North Main Street Alley",
        "city": "Breckenridge",
        "state": "Colorado",
        "country": "United States",
        "lat": 39.4829124,
        "lng": -106.0465486,
        "name": "Luxury w/Mountain Views + Hot Tub/Elevator + Ski in/Ski out - Epic Retreat",
        "description": "With meticulous attention to detail and designed to deliver an epic experience, you will lack for nothing while vacationing at Epic Retreat, a ski-in/ski-out designer home..",
        "price": "2225"
    },
    {
        "ownerId": 2,
        "address": "Tillicoultry",
        "city": "Clackmannanshire",
        "state": "Scotland",
        "country": "United Kingdom",
        "lat": 56.166395,
        "lng": -3.7513968,
        "name": "DOLLARBEG CASTLE - The Tower - luxury 3 bed rental",
        "description": "DOLLARBEG CASTLE is a unique castle holiday location in Scotland.",
        "price": "373"
    },
    {
        "ownerId": 3,
        "address": "Sauchenford West, Bannockburn, Stirling, Alba / Scotland, FK7 8AF, United Kingdom",
        "city": "Stirlingshire",
        "state": "Scotland",
        "country": "United Kingdom",
        "lat": 56.0701208,
        "lng": -3.9087351,
        "name": "Duchray Castle - 16th Century Scottish Castle",
        "description": "2.5 miles from Aberfoyle, nestled in the heart of the Queen Elizabeth Forest this 500 year old tower house with connections to Rob Roy has been fully renovated. It now offers comfortable accommodation with en suite bathrooms to each bedroom.",
        "price": "489"
    },
    {
        "ownerId": 4,
        "address": "Index Elementary, 5th Street",
        "city": "Index",
        "state": "Washington",
        "country": "United States",
        "lat": 47.8203106,
        "lng": -121.5543876,
        "name": "The Treeframe Cabin",
        "description": "Outrageously beautiful modern treehouse aframe cabin perched 13ft off the ground between 4 evergreen trees. Brand new with luxurious finishes, a two person hot tub, full bathroom, fireplace, giant skylights, and a king bed sleeping loft.",
        "price": "543"
    },
    {
        "ownerId": 5,
        "address": "Jema\u00e2 El Fna, Derb Boukili, Mouassine, Medina",
        "city": "Marrakech",
        "state": "Marrakech-Safi",
        "country": "Morocco",
        "lat": 31.6258257,
        "lng": -7.9891608,
        "name": "Charming Riad/Pool /Spa/Restaurant in Marrakech",
        "description": "Some info has been automatically translated..",
        "price": "143"
    },
    {
        "ownerId": 1,
        "address": "Boomer's Main Street Plaza, West Center Street",
        "city": "Cedar City",
        "state": "Utah",
        "country": "United States",
        "lat": 37.6774238,
        "lng": -113.061827,
        "name": "Hobbit Cottage",
        "description": "Tucked away in our peaceful garden, this modern Hobbit Cottage will delight you! Although it's not the Shire of Middle Earth from LOTR, it's our little piece of paradise.",
        "price": "58"
    },
    {
        "ownerId": 2,
        "address": "Last Wilderness Cafe, 8279, Main Street",
        "city": "Presque Isle",
        "state": "Wisconsin",
        "country": "United States",
        "lat": 46.247171,
        "lng": -89.729323,
        "name": "Dog-friendly home on private island w/boat landing",
        "description": "Take advantage of this once in a lifetime adventure in the Northwoods on your own private island on Katinka Lake!.",
        "price": "1285"
    },
    // {
    //     "ownerId": 3,
    //     "address": "2213, J O Stephenson Avenue NorthWest",
    //     "city": "Kennesaw",
    //     "state": "Georgia",
    //     "country": "United States",
    //     "lat": 34.0234337,
    //     "lng": -84.6154897,
    //     "name": "Treasure Hunt Tree House in Metro Atlanta",
    //     "description": "Welcome to Treasure Hunt Tree House, located in Kennesaw GA (about 20 min drive from Atlanta).",
    //     "price": "175"
    // },
    {
        "ownerId": 4,
        "address": "Civic Center & Webb, Civic Center Way, Malibu Beach",
        "city": "Malibu",
        "state": "California",
        "country": "United States",
        "lat": 34.035591,
        "lng": -118.689423,
        "name": "The Carbon",
        "description": "Cancel before 4:00 PM on Oct 1 and only get a refund of the hospitality fee..",
        "price": "3551"
    },
    {
        "ownerId": 5,
        "address": "Privada Paseo Real del Mar, La Cruz de Huanacaxtle, Bah\u00eda de Banderas, Nayarit, M\u00e9xico",
        "city": "Real del Mar",
        "state": "Nayarit",
        "country": "Nayarit",
        "lat": 20.742311,
        "lng": -105.3918464,
        "name": "Paraiso Real del Mar",
        "description": "Cancel before 3:00 PM on Oct 1 and only get a refund of the hospitality fee..",
        "price": "8000"
    },
    {
        "ownerId": 1,
        "address": "131, Elm Street",
        "city": "Watsonville",
        "state": "California",
        "country": "United States",
        "lat": 36.9092773,
        "lng": -121.7529071,
        "name": "Redwood Retreat",
        "description": "Enjoy Redwoods while relaxing on large deck or inside by indoor woodstove (woodstove fee $50).",
        "price": "231"
    },
    {
        "ownerId": 2,
        "address": "Via della Fontana",
        "city": "Montegiove",
        "state": "Umbria",
        "country": "Italy",
        "lat": 42.9156191,
        "lng": 12.1444745,
        "name": "Old Castle Olive Mill",
        "description": "Charming and completely restored 13th century castle olive mill, transformed into a luxurious country house, located just outside the ring wall of Castello di Montegiove..",
        "price": "280"
    },
    {
        "ownerId": 3,
        "address": "Napa County Administration Building, 3rd Street, Napa Abajo",
        "city": "Napa",
        "state": "California",
        "country": "United States",
        "lat": 38.2971367,
        "lng": -122.2855293,
        "name": "White House Napa Valley Inn",
        "description": "Great hospitality, great downtown location & very conscious of following covid precautions. Highly recommend!.",
        "price": "12055"
    },
    {
        "ownerId": 4,
        "address": "Los Angeles City Hall, 200, North Spring Street, Civic Center, Downtown",
        "city": "Los Angeles",
        "state": "California",
        "country": "United States",
        "lat": 34.0536909,
        "lng": -118.242766,
        "name": "The Hideaway",
        "description": "Cancel before 4:00 PM on Oct 1 and only get a refund of the hospitality fee..",
        "price": "3560"
    },
    {
        "ownerId": 5,
        "address": "226, North Rexford Drive",
        "city": "Beverly Hills",
        "state": "California",
        "country": "United States",
        "lat": 34.0696501,
        "lng": -118.3963062,
        "name": "Chateau de Laurel",
        "description": "Cancel before 4:00 PM on Oct 1 and only get a refund of the hospitality fee..",
        "price": "15840"
    }
])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Spots', null, {});
  }
};
