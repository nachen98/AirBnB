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
   await queryInterface.bulkInsert('Reviews', [
    {
        "spotId": 1,
        "userId": 2,
        "review": "It was perfect for the 4 of us to spend a few days, exploring the mansion and the surrounding grounds.",
        "stars": 3
    },
    {
        "spotId": 1,
        "userId": 3,
        "review": "The most stunning, unique and one of a kind property! I wish I could give it more stars! It was a dream for us to stay here! And the doggie Milo was a huge plus! I hope to stay again soon!.",
        "stars": 5
    },
    {
        "spotId": 1,
        "userId": 4,
        "review": "This place was fantastic. It was bigger than we thought and really was a perfect place to have a base for golf in Scotland/fife area. We loved it.",
        "stars": 4
    },
    {
        "spotId": 2,
        "userId": 3,
        "review": "Excellent stay! We all agreed where we want to stay for the entirety of our next trip to Saint Andrew's. Such an awesome property. Gus, thank you for the quick communication and thorough walkthrough. Wish we stayed longer.",
        "stars": 3
    },
    {
        "spotId": 2,
        "userId": 4,
        "review": "Amazing property, which exceeded our expectations. Gus looked after all our inquires and requests quickly and was very helpful during our stay.",
        "stars": 4
    },
    {
        "spotId": 2,
        "userId": 5,
        "review": "Fantastic house for a guys golf adventure. The house worked out very well and we enjoyed using the kitchen and wine cooler. We played some great golf at the New Course, Jubilee, Balcomie, Elie, Kingsbarns, and Carnoustie.",
        "stars": 5
    },
    {
        "spotId": 3,
        "userId": 4,
        "review": "Place was great and as expected. Thank you!\n\nThere\u2019s no cell service but wifi is great.\n\nThere\u2019s no Uber or Lyft or doordash up there but there\u2019s a local taxi service if you need it.\nShow more.",
        "stars": 3
    },
    {
        "spotId": 3,
        "userId": 5,
        "review": "This is a nice place!",
        "stars": 3
    },
    {
        "spotId": 3,
        "userId": 1,
        "review": "The castle was amazing. It was far better than we could have imagined. The place was very very big and very well appointed. It might take you about a day to get familiar with the space.",
        "stars": 3
    },
    {
        "spotId": 4,
        "userId": 5,
        "review": "Our stay at The Castle In The Forest was even more exquisite than the wondrous photos posted on this listing.",
        "stars": 5
    },
    {
        "spotId": 4,
        "userId": 1,
        "review": "The castle was beyond magical. I celebrated my 30th there with 23 friends. Arsine was super accommodating in ensuring we were able to fit everyone. I planned for a month and regularly asked questions, Arsine responded within the hour.",
        "stars": 4
    },
    {
        "spotId": 4,
        "userId": 2,
        "review": "Epic and incredible spot for a team offsite / gathering. The home will not disappoint!.",
        "stars": 4
    },
    {
        "spotId": 5,
        "userId": 1,
        "review": "This is our second time hosting our Women\u2019s Retreat here. Great location, close to lake and beach. Tons of parking, lots of room for all 16 of us to spread out.",
        "stars": 3
    },
    {
        "spotId": 5,
        "userId": 2,
        "review": "Tony\u2019s house is amazing. Huge. Many bedrooms. Very nice finishes. Great location on the lake..",
        "stars": 3
    },
    {
        "spotId": 5,
        "userId": 3,
        "review": "I didn\u2019t think it was possible for this place to be more beautiful than the pictures but it was! And amazing location right on the water! The moment we got there, it was instantly relaxing! Highly recommend!.",
        "stars": 5
    },
    {
        "spotId": 6,
        "userId": 2,
        "review": "N/a.",
        "stars": 5
    },
    {
        "spotId": 6,
        "userId": 3,
        "review": "Where to begin?! From the exceptional communication, to the exemplary home and location, to all the amazing amenities this home provided, it will be difficult to find anything better.",
        "stars": 3
    },
    {
        "spotId": 6,
        "userId": 4,
        "review": "We spent a weekend here for my friend's birthday and we had a blast! The house is beautiful, with a nice layout for multiple guests. The dock was a nice place to hang out during the day.",
        "stars": 5
    },
    {
        "spotId": 7,
        "userId": 3,
        "review": "This is a fabulous property! Great location too!! Paul was very responsive and communicated everything we needed to know. What a special treat to stay in a castle! We appreciated the attention to detail and stay was perfect for us!.",
        "stars": 5
    },
    {
        "spotId": 7,
        "userId": 4,
        "review": "I love surprises, This was surprise planed by my boy, and Felt over the moon.I love The decorate The wall\nPlace with such beautiful painting\nThis place is like fairytale castle\nAnd felt like princes. will remember\nThis Place forever.",
        "stars": 4
    },
    {
        "spotId": 7,
        "userId": 5,
        "review": "Fantastic place, very clean and well maintained..",
        "stars": 3
    },
    {
        "spotId": 8,
        "userId": 4,
        "review": "We could not have had a more wonderful place to stay. It looked amazing in the pictures and reviews, neither did the place justice. The grounds were amazing.",
        "stars": 4
    },
    {
        "spotId": 8,
        "userId": 5,
        "review": "Beautiful apt in a Disney like castle. Clean and luxurious decorated. Highly recommended..",
        "stars": 4
    },
    {
        "spotId": 8,
        "userId": 1,
        "review": "We cannot say enough about how wonderful our stay was at the castle! This property was truly amazing in every way. The interior was meticulously maintained and gave you the full Scottish Castle experience.",
        "stars": 3
    },
    {
        "spotId": 9,
        "userId": 5,
        "review": "We had an absolutely wonderful stay at the castle! The grounds are so much fun to walk, run, discover.",
        "stars": 5
    },
    {
        "spotId": 9,
        "userId": 1,
        "review": "Duchray Castle is the most spectacular property I\u2019ve ever stayed. It is exceedingly rare to find a 500-year-old family seat that has been thoroughly modernized, but with tremendous respect for the historic fabric of the home.",
        "stars": 3
    },
    {
        "spotId": 9,
        "userId": 2,
        "review": "An absolute gem of a castle. Close enough to whatever you need and off the beaten path enough to be perfectly relaxing and wonderful.",
        "stars": 3
    },
    {
        "spotId": 10,
        "userId": 1,
        "review": "Luxuriously furnished historic castle in beautiful grounds with a wide variety of outdoor activities available nearby in the beautiful Trossachs area of Scotland..",
        "stars": 3
    },
    {
        "spotId": 10,
        "userId": 2,
        "review": "We had a lovely stay in Duchray castle. We were there at the end of May/beginning of June - with whole carpets of bluebells and fiery rhododendrons.",
        "stars": 3
    },
    {
        "spotId": 10,
        "userId": 3,
        "review": "Amy and Nikita were super star hosts, and their dogs are the star attractions! I\u2019ve never seen such lovely dogs that understand small kids.",
        "stars": 5
    },
    {
        "spotId": 11,
        "userId": 2,
        "review": "We weren\u2019t able to experience Nick\u2019s beautiful stay due to fires. But he was incredibly helpful with info and whether we would be able to make it there. Grateful for the updates and hope to stay sometime in the future..",
        "stars": 3
    },
    {
        "spotId": 11,
        "userId": 3,
        "review": "Beautiful surroundings! And every angle of the house was just as charming as it looks! Definitely use the hot tub and wander down to the river. No fish, but that might just be my technique..",
        "stars": 3
    },
    {
        "spotId": 11,
        "userId": 4,
        "review": "Very clean.",
        "stars": 4
    },
    {
        "spotId": 12,
        "userId": 3,
        "review": "Amazing cabins! We rented all 5 of Nick's cabins for 3 nights to host my wedding, and set up rented tables, chairs, an arch, and lawn games on the big center lawn for an afternoon wedding with 18 guests.",
        "stars": 4
    },
    {
        "spotId": 12,
        "userId": 4,
        "review": "Just as it seems. Glorious!.",
        "stars": 5
    },
    {
        "spotId": 12,
        "userId": 5,
        "review": "Nick has created a unique and amazing space in a beautiful area. We loved sitting on the porch overlooking the trees, listening to the river in the distance and just enjoying the natural beauty.",
        "stars": 5
    },
    {
        "spotId": 13,
        "userId": 4,
        "review": "This listing is fake. In other words it is s fraudulent listing. Do not book with this person. We were able to stay at this Riad and it was amazing but they do not provide bookings through airBnb.",
        "stars": 4
    },
    {
        "spotId": 13,
        "userId": 5,
        "review": "The host canceled this reservation 22 days before arrival. This is an automated posting..",
        "stars": 5
    },
    {
        "spotId": 13,
        "userId": 1,
        "review": "Fun little place to stay! The theme is very well done and makes for a cozy spot..",
        "stars": 4
    },
    {
        "spotId": 14,
        "userId": 5,
        "review": "Perfect! The place was amazing..",
        "stars": 5
    },
    {
        "spotId": 14,
        "userId": 1,
        "review": "Very unique experience..",
        "stars": 4
    },
    {
        "spotId": 14,
        "userId": 2,
        "review": "Fun themed place!! is in the backyard, but fun place to watch movies or something after a day of travel :).",
        "stars": 3
    },
    {
        "spotId": 15,
        "userId": 1,
        "review": "Clean, professional and unique stay. We had a blast watching LOTR in our Hobbit House..",
        "stars": 3
    },
    {
        "spotId": 15,
        "userId": 2,
        "review": "This was the cutest little cottage EVER.",
        "stars": 5
    },
    {
        "spotId": 15,
        "userId": 3,
        "review": "Beautiful home on private island and set up is excellent for multiple families. Quiet and peaceful. Lake is wonderful for swimming and fishing..",
        "stars": 3
    },
    {
        "spotId": 16,
        "userId": 2,
        "review": "We are a family of six with kids ranging from 10-15. Huge WOW from\nevery single one of us. I have rented many houses over the years and this is one of the best. It does not feel like a rental at all.",
        "stars": 4
    },
    {
        "spotId": 16,
        "userId": 3,
        "review": "Not a cabin, not a house, but an exquisite lodge built on a hilltop that forms a 4-acre island encircled by a magical, crystalline lake in Wisconsin's far north.",
        "stars": 5
    },
    {
        "spotId": 16,
        "userId": 4,
        "review": "Fantastic home with beautiful views, decor and furniture. everything was just as described. Jennifer communicated well and responded to every need..",
        "stars": 3
    },
    {
        "spotId": 17,
        "userId": 3,
        "review": "Amazing private island retreat on pristine, quiet, northern Wisconsin waters. All the comforts of a 5 star resort, in the heart of Mother Nature\u2019s paradise..",
        "stars": 5
    },
    {
        "spotId": 17,
        "userId": 4,
        "review": "Amazing retreat. Somewhere we will visit again.\nEverything was as expected and more..",
        "stars": 5
    },
    {
        "spotId": 17,
        "userId": 5,
        "review": "Funners & perfect for couples!!!.",
        "stars": 4
    },
    {
        "spotId": 18,
        "userId": 4,
        "review": "We loved our stay here! It\u2019s definitely a unique experience. While this is in the owners backyard, there\u2019s plenty of privacy. The treasure hunt is super fun too! Reminds me a lot of a an escape room.",
        "stars": 5
    },
    {
        "spotId": 18,
        "userId": 5,
        "review": "This place was so beautiful! We loved staying here and will definitely be planning to come back. They wrote little notes for us, had tons of snacks, and the treasure hunt was super fun..",
        "stars": 4
    },
    {
        "spotId": 18,
        "userId": 1,
        "review": "We just completed our stay in the treehouse for my birthday! The location is a bit weird (behind the host\u2019s house in a cul-de-sac), but the host has done a great job of making it feel private and romantic.",
        "stars": 4
    },
    {
        "spotId": 19,
        "userId": 5,
        "review": "Fantastic experience! This treehouse is everything the listing shows, and more. Communication was thorough, the property was clean with thoughtful touches, and the added fun of a treasure hunt really made our stay a special one.",
        "stars": 5
    },
    {
        "spotId": 19,
        "userId": 1,
        "review": "Me and my fianc\u00e9 had a great time, the vibe was perfect the host were excellent. Treasure hunt was a great addition 10/10 for us.",
        "stars": 3
    },
    {
        "spotId": 19,
        "userId": 2,
        "review": "A great space to decompress for a few days and enjoy peacefulness in nature. Mary and Matt are incredibly kind and great at communication. Thank you again!.",
        "stars": 3
    },
    {
        "spotId": 20,
        "userId": 1,
        "review": "Beautiful location. We loved the redwood trees and the remote, peaceful surroundings..",
        "stars": 3
    },
    {
        "spotId": 20,
        "userId": 2,
        "review": "An amazing cabin in the forest surrounded by towering redwoods. Comfortable for 6 people, very well equipped, lovely terrace to eat or sit and listen to the wildlife. Lots of great hiking nearby..",
        "stars": 3
    },
    {
        "spotId": 20,
        "userId": 3,
        "review": "Another relaxing stay at this redwood retreat. An ideal spot to relax and unwind. We enjoyed hiking the new trail to a meadow area above the woods and found the most amazing redwood cathedral.",
        "stars": 3
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
     await queryInterface.bulkDelete('Reviews', null, {})
  }
};
