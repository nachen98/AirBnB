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
        "review": "It was perfect for the 4 of us to spend a few days, exploring the mansion and the surrounding grounds. Every room is unique and worth discovering, and the girls had a blast dancing in the red ball room, picking red apples from the garden, playing with the gardner\u2019s dog, and watching cartoons in the theater room. The hot tub was great for the adults to wind down in the evenings, and snuggle by the fireplace in the living room. Once in a lifetime experience!\nShow more",
        "stars": 3
    },
    {
        "spotId": 1,
        "userId": 3,
        "review": "The most stunning, unique and one of a kind property! I wish I could give it more stars! It was a dream for us to stay here! And the doggie Milo was a huge plus! I hope to stay again soon!",
        "stars": 4
    },
    {
        "spotId": 1,
        "userId": 4,
        "review": "This place was fantastic. It was bigger than we thought and really was a perfect place to have a base for golf in Scotland/fife area. We loved it",
        "stars": 3
    },
    {
        "spotId": 2,
        "userId": 3,
        "review": "Excellent stay! We all agreed where we want to stay for the entirety of our next trip to Saint Andrew's. Such an awesome property. Gus, thank you for the quick communication and thorough walkthrough. Wish we stayed longer. I got a lot of high-fives for booking this spot. Thanks again!",
        "stars": 3
    },
    {
        "spotId": 2,
        "userId": 4,
        "review": "Amazing property, which exceeded our expectations. Gus looked after all our inquires and requests quickly and was very helpful during our stay. A unique experience and can highly recommend for any large group needing a property close to St Andrews.",
        "stars": 3
    },
    {
        "spotId": 2,
        "userId": 5,
        "review": "Fantastic house for a guys golf adventure. The house worked out very well and we enjoyed using the kitchen and wine cooler. We played some great golf at the New Course, Jubilee, Balcomie, Elie, Kingsbarns, and Carnoustie. The 8 bedrooms worked well for our group.",
        "stars": 4
    },
    {
        "spotId": 3,
        "userId": 4,
        "review": "Place was great and as expected. Thank you!\n\nThere\u2019s no cell service but wifi is great.\n\nThere\u2019s no Uber or Lyft or doordash up there but there\u2019s a local taxi service if you need it.\nShow more",
        "stars": 3
    },
    {
        "spotId": 3,
        "userId": 5,
        "review": "Overall our family really enjoyed our time at this home, we especially love the kitchen and views throughout! Arsine and Ben are very communicative and are available to answer any questions, they also have plenty of suggestions about things to do in the area. There is plenty of room for a large family or group to spread out and enjoy time together. We didn\u2019t feel like we were missing anything and would definitely stay again.\nShow more",
        "stars": 5
    },
    {
        "spotId": 3,
        "userId": 1,
        "review": "The castle was amazing. It was far better than we could have imagined. The place was very very big and very well appointed. It might take you about a day to get familiar with the space. Decor was awesome, plenty of linens, towels and most everything you might need. The kitchen was a dream. The host was easy to reach and communicated everything very well. The property was well maintained inside and out. I highly recommend this place it will not disappoint.\nShow more",
        "stars": 3
    },
    {
        "spotId": 4,
        "userId": 5,
        "review": "Our stay at The Castle In The Forest was even more exquisite than the wondrous photos posted on this listing. My now *husband* and I hosted a wonderful evening rehearsal dinner with our guests at the castle and stayed here during our wedding weekend. While we ended up getting married at Lake Arrowhead resort, this was a magnificent place to experience with our immediate families, and from our parents to our baby niece and nephew, everyone was in absolute awe of its unique details, hidden rooms, breathtaking forest views and incredible english architecture. This was by far the most grand AirBNB i've ever booked, and it will forever remain in our hearts and memories! Some of the reviews complain of a long list of requests by the hosts, however given its rich history and marvelous preservation, there is a good reason this home has stayed in such spectacular condition so don't fret at the requests and paperwork! It is well worth it and the hosts are nothing short of warm-hearted honest people. They are hospitable, and were very swift in all communication. Enjoy the espresso machine for all those to come, we hope whoever stays here has as wonderful of a time as we did!! Thank you Arsine and Ben! Cheers to staying here in the future for our future anniversary!!! :-)\nShow more",
        "stars": 3
    },
    {
        "spotId": 4,
        "userId": 1,
        "review": "The castle was beyond magical. I celebrated my 30th there with 23 friends. Arsine was super accommodating in ensuring we were able to fit everyone. I planned for a month and regularly asked questions, Arsine responded within the hour. The castle itself is pure whimsical bliss. Every single guest was so thrilled and I definitely hope to return soon!!!!! <3 Thank you",
        "stars": 5
    },
    {
        "spotId": 4,
        "userId": 2,
        "review": "Epic and incredible spot for a team offsite / gathering. The home will not disappoint!",
        "stars": 5
    },
    {
        "spotId": 5,
        "userId": 1,
        "review": "This is our second time hosting our Women\u2019s Retreat here. Great location, close to lake and beach. Tons of parking, lots of room for all 16 of us to spread out. Loved cooking and spending time together in the huge fully stocked kitchen or doing a puzzle around the large dining table. Hope to be back!",
        "stars": 4
    },
    {
        "spotId": 5,
        "userId": 2,
        "review": "Tony\u2019s house is amazing. Huge. Many bedrooms. Very nice finishes. Great location on the lake.",
        "stars": 4
    },
    {
        "spotId": 5,
        "userId": 3,
        "review": "I didn\u2019t think it was possible for this place to be more beautiful than the pictures but it was! And amazing location right on the water! The moment we got there, it was instantly relaxing! Highly recommend!",
        "stars": 3
    },
    {
        "spotId": 6,
        "userId": 2,
        "review": "N/a",
        "stars": 3
    },
    {
        "spotId": 6,
        "userId": 3,
        "review": "Where to begin?! From the exceptional communication, to the exemplary home and location, to all the amazing amenities this home provided, it will be difficult to find anything better. Tony was quick to respond and truly made us feel like \u2018guests\u2019 in his home. If vacationing again here, there is no other place I would think about staying! Thank you Tony!",
        "stars": 3
    },
    {
        "spotId": 6,
        "userId": 4,
        "review": "We spent a weekend here for my friend's birthday and we had a blast! The house is beautiful, with a nice layout for multiple guests. The dock was a nice place to hang out during the day. The kitchen was very well stocked with more than enough dinnerware. Tony is a great host and easy to communicate with. Thank you:)",
        "stars": 4
    },
    {
        "spotId": 7,
        "userId": 3,
        "review": "This is a fabulous property! Great location too!! Paul was very responsive and communicated everything we needed to know. What a special treat to stay in a castle! We appreciated the attention to detail and stay was perfect for us!",
        "stars": 3
    },
    {
        "spotId": 7,
        "userId": 4,
        "review": "I love surprises, This was surprise planed by my boy, and Felt over the moon.I love The decorate The wall\nPlace with such beautiful painting\nThis place is like fairytale castle\nAnd felt like princes. will remember\nThis Place forever. I have a secret wish\nshhh. one day Thank You Majid\nShow more",
        "stars": 5
    },
    {
        "spotId": 7,
        "userId": 5,
        "review": "Fantastic place, very clean and well maintained.",
        "stars": 3
    },
    {
        "spotId": 8,
        "userId": 4,
        "review": "We could not have had a more wonderful place to stay. It looked amazing in the pictures and reviews, neither did the place justice. The grounds were amazing. The little touches such as the champagne and breakfast to get us started were wonderful. Julie could have not been a more gracious host! This place was the highlight of our three weeks in Scotland! Thank you so much.",
        "stars": 3
    },
    {
        "spotId": 8,
        "userId": 5,
        "review": "Beautiful apt in a Disney like castle. Clean and luxurious decorated. Highly recommended.",
        "stars": 4
    },
    {
        "spotId": 8,
        "userId": 1,
        "review": "We cannot say enough about how wonderful our stay was at the castle! This property was truly amazing in every way. The interior was meticulously maintained and gave you the full Scottish Castle experience. The outside was also magical from the grounds to the views. My boyfriend proposed to me on the rooftop deck, and it felt like a true fairytale. Thank you so much Paul for sharing this beautiful space, we will definitely be back!\nShow more",
        "stars": 4
    },
    {
        "spotId": 9,
        "userId": 5,
        "review": "We had an absolutely wonderful stay at the castle! The grounds are so much fun to walk, run, discover. Our five kids enjoyed the river walk, game room, and massive DVD collection! The peaceful atmosphere of the castle and grounds were worth every penny. We cannot wait to return.",
        "stars": 4
    },
    {
        "spotId": 9,
        "userId": 1,
        "review": "Duchray Castle is the most spectacular property I\u2019ve ever stayed. It is exceedingly rare to find a 500-year-old family seat that has been thoroughly modernized, but with tremendous respect for the historic fabric of the home. The decor is tasteful English country house. The location and gardens are beyond compare. The local village is picturesque. Amy and her husband have used the pandemic to make upgrades to the property that make it even more delightful. if you want tranquility, peace, beauty, and a historic setting that still allows a long soak in a beautiful bathroom at the end of a day in the Highlands, please consider staying here.\nShow more",
        "stars": 4
    },
    {
        "spotId": 9,
        "userId": 2,
        "review": "An absolute gem of a castle. Close enough to whatever you need and off the beaten path enough to be perfectly relaxing and wonderful. Cozy, comfortable and fabulous!! A pocket of Scottish happiness!!! We are so grateful for this fabulous week and have all fallen in love with Scotland!",
        "stars": 5
    },
    {
        "spotId": 10,
        "userId": 1,
        "review": "Luxuriously furnished historic castle in beautiful grounds with a wide variety of outdoor activities available nearby in the beautiful Trossachs area of Scotland.",
        "stars": 4
    },
    {
        "spotId": 10,
        "userId": 2,
        "review": "We had a lovely stay in Duchray castle. We were there at the end of May/beginning of June - with whole carpets of bluebells and fiery rhododendrons. The situation (in the middle of a forest), the views and the river underneath are truly special. We managed to swim off the little beach set up by the owners every day (we were v lucky with the weather)! Hamish and Douglas, the highland cows, were a massive hit with our 2 younger children, who immensely looked forward to the feeding time every morning. There are also 6 chickens, a treat for us as it was the first time we stayed in a place where there was a chance we could find some fresh eggs (the uncertainty of it all - as we shared the secrets with the others guests - made it properly suspenseful). The castle itself is very charming and comfortable - you really feel that Amy and Nikita cherish the place. Although we did not meet Amy, she made us feel very welcome, and left lots of tips and recommendation.\nThe only things we would improve are the temperamental wifi and\u2026 the midges (sadly a feature of this part of the world at this season)!\nShow more",
        "stars": 5
    },
    {
        "spotId": 10,
        "userId": 3,
        "review": "Amy and Nikita were super star hosts, and their dogs are the star attractions! I\u2019ve never seen such lovely dogs that understand small kids.\n\nThe castle itself was a special place and was huge! Be prepared to climb stairs, but the views are totally worth it. The kitchen itself was well stocked and suitable for cooking for large numbers (a lot of rentals skimp on this but this was exceptional)\n\nThanks again\nShow more",
        "stars": 5
    },
    {
        "spotId": 11,
        "userId": 2,
        "review": "We weren\u2019t able to experience Nick\u2019s beautiful stay due to fires. But he was incredibly helpful with info and whether we would be able to make it there. Grateful for the updates and hope to stay sometime in the future.",
        "stars": 4
    },
    {
        "spotId": 11,
        "userId": 3,
        "review": "Beautiful surroundings! And every angle of the house was just as charming as it looks! Definitely use the hot tub and wander down to the river. No fish, but that might just be my technique.",
        "stars": 5
    },
    {
        "spotId": 11,
        "userId": 4,
        "review": "Very clean",
        "stars": 5
    },
    {
        "spotId": 12,
        "userId": 3,
        "review": "Amazing cabins! We rented all 5 of Nick's cabins for 3 nights to host my wedding, and set up rented tables, chairs, an arch, and lawn games on the big center lawn for an afternoon wedding with 18 guests. Nick was a great host and on-board with everything, even reaching out a couple times to see if we needed anything. The beautiful forest, mountains, and river made the perfect backdrop for a memorable day.\nShow more",
        "stars": 3
    },
    {
        "spotId": 12,
        "userId": 4,
        "review": "Just as it seems. Glorious!",
        "stars": 3
    },
    {
        "spotId": 12,
        "userId": 5,
        "review": "Nick has created a unique and amazing space in a beautiful area. We loved sitting on the porch overlooking the trees, listening to the river in the distance and just enjoying the natural beauty. Nick also made check-in and check-out easy with detailed instructions. Make sure you review his guidebook for the area - we had great experiences at Good Brewing Co, Zeke's, LouSki's Deli and the Espresso Chalet (great view of the mountain and falls!). We also enjoyed exploring Index. The couple of days that we stayed in August saw daytime highs in the 80s and the recently added portable AC unit and fans were a lifesaver.\nShow more",
        "stars": 5
    },
    {
        "spotId": 13,
        "userId": 4,
        "review": "This listing is fake. In other words it is s fraudulent listing. Do not book with this person. We were able to stay at this Riad and it was amazing but they do not provide bookings through airBnb. They only provide bookings through (Website hidden by Airbnb) We got there and they had one room available fortunately but we had to pay the Riad itself to be able to stay here. DO NOT BOOK THROUGH HERE!\nShow more",
        "stars": 4
    },
    {
        "spotId": 13,
        "userId": 5,
        "review": "The host canceled this reservation 22 days before arrival. This is an automated posting.",
        "stars": 4
    },
    {
        "spotId": 13,
        "userId": 1,
        "review": "Fun little place to stay! The theme is very well done and makes for a cozy spot.",
        "stars": 5
    },
    {
        "spotId": 14,
        "userId": 5,
        "review": "Perfect! The place was amazing.",
        "stars": 5
    },
    {
        "spotId": 14,
        "userId": 1,
        "review": "Very unique experience.",
        "stars": 5
    },
    {
        "spotId": 14,
        "userId": 2,
        "review": "Fun themed place!! is in the backyard, but fun place to watch movies or something after a day of travel :)",
        "stars": 3
    },
    {
        "spotId": 15,
        "userId": 1,
        "review": "Clean, professional and unique stay. We had a blast watching LOTR in our Hobbit House.",
        "stars": 4
    },
    {
        "spotId": 15,
        "userId": 2,
        "review": "This was the cutest little cottage EVER",
        "stars": 5
    },
    {
        "spotId": 15,
        "userId": 3,
        "review": "Beautiful home on private island and set up is excellent for multiple families. Quiet and peaceful. Lake is wonderful for swimming and fishing.",
        "stars": 4
    },
    {
        "spotId": 16,
        "userId": 2,
        "review": "We are a family of six with kids ranging from 10-15. Huge WOW from\nevery single one of us. I have rented many houses over the years and this is one of the best. It does not feel like a rental at all. It feels like you\u2019re borrowing a friend\u2019s house. Nothing is low quality. Everything you need is there\u2014great beds, linens, furniture, kitchen accoutrements. There were so many lovely places on the island to run and play, or sit and relax, it was hard to choose! We had one rainy day and we were delighted to spend the day inside the gorgeous house. So much to do, and so much inside and outside to enjoy. Fishing, yes-every kid caught tons! Swimming, yes- the clearest & least mucky lake I\u2019ve been in up north. Bring goggles! The lake was peaceful enough that we never worried about the kids swimming and paddling all around. If you want memories, this is the place to go. Don\u2019t hesitate. This is the one!\nShow more",
        "stars": 5
    },
    {
        "spotId": 16,
        "userId": 3,
        "review": "Not a cabin, not a house, but an exquisite lodge built on a hilltop that forms a 4-acre island encircled by a magical, crystalline lake in Wisconsin's far north. The authentic mortice-and-tenon/post-and-beam structure is both appealingly rustic and architecturally impressive, the kitchen is fully-equipped with top-of-line appliances, and the four distinct bedrooms/sleeping areas were perfect for our extended family get-together. There is even a water's edge cabana that could conceivably be used as an additional sleeping space (bring your own hammock?). Katinka Lake (first week of July '22) was VERY clean and clear and a delight for swimming, snorkeling, boating, paddling, and fishing. There is even a hiking trail that loops around the island's stand of mature hemlocks, cedars, and birches. Flagstone patios, at points along the trail, invite walkers to pause and imprint the scenery into their memories. These and other outdoor living spaces, including a firepit area amply stocked with firewood were wonderful places to gather.\n\nThe host is super friendly, accommodating, and responsive. Communication was never a problem.\n\nThis is an island destination, so be sure to clarify with the host and confirm how you will make the 100-yard \"voyage\" from the land-side dock/boat ramp to the island and how the trash and recycle bins are to be handled. Once you get to the island, you must also be prepared to carry you baggage another 100 yards up a flagstone pathway with occasional steps along the way before you reach the lodge.\nShow more",
        "stars": 5
    },
    {
        "spotId": 16,
        "userId": 4,
        "review": "Fantastic home with beautiful views, decor and furniture. everything was just as described. Jennifer communicated well and responded to every need.",
        "stars": 3
    },
    {
        "spotId": 17,
        "userId": 3,
        "review": "Amazing private island retreat on pristine, quiet, northern Wisconsin waters. All the comforts of a 5 star resort, in the heart of Mother Nature\u2019s paradise.",
        "stars": 4
    },
    {
        "spotId": 17,
        "userId": 4,
        "review": "Amazing retreat. Somewhere we will visit again.\nEverything was as expected and more.",
        "stars": 5
    },
    {
        "spotId": 17,
        "userId": 5,
        "review": "Funners & perfect for couples!!!",
        "stars": 3
    },
    {
        "spotId": 18,
        "userId": 4,
        "review": "We loved our stay here! It\u2019s definitely a unique experience. While this is in the owners backyard, there\u2019s plenty of privacy. The treasure hunt is super fun too! Reminds me a lot of a an escape room. The puzzles are challenging, but not so much so that most people won\u2019t be able to solve them. The bathroom is a little small, but we made due. Overall, we loved our stay here and highly recommend it!\nShow more",
        "stars": 4
    },
    {
        "spotId": 18,
        "userId": 5,
        "review": "This place was so beautiful! We loved staying here and will definitely be planning to come back. They wrote little notes for us, had tons of snacks, and the treasure hunt was super fun.",
        "stars": 3
    },
    {
        "spotId": 18,
        "userId": 1,
        "review": "We just completed our stay in the treehouse for my birthday! The location is a bit weird (behind the host\u2019s house in a cul-de-sac), but the host has done a great job of making it feel private and romantic. There was no TV in the treehouse, but I think that added to the charm. Plus there are board games under the bed and a scavenger hunt to keep you busy! The bed was absolutely heavenly, the twinkle lights in the ceiling are lovely, and the A/C in the treehouse is pretty legit for a floor unit! I do wish there were more pillows though! There is a mini fridge to hold drinks and snacks too! The host provided a lovely selection of snacks upon our arrival, but if you\u2019re staying more than 1 night, I would stock up before you arrive! The bathroom is actually detached from the treehouse and at the back of the house, which is a bit inconvenient, but not a deal-breaker because it is a treehouse after all. Overall, I am glad we went and we enjoyed our stay, but one night was enough for us.\nShow more",
        "stars": 5
    },
    {
        "spotId": 19,
        "userId": 5,
        "review": "Fantastic experience! This treehouse is everything the listing shows, and more. Communication was thorough, the property was clean with thoughtful touches, and the added fun of a treasure hunt really made our stay a special one. The hosts clearly put a lot of thought and effort into their property, and it shows!",
        "stars": 4
    },
    {
        "spotId": 19,
        "userId": 1,
        "review": "Me and my fianc\u00e9 had a great time, the vibe was perfect the host were excellent. Treasure hunt was a great addition 10/10 for us",
        "stars": 5
    },
    {
        "spotId": 19,
        "userId": 2,
        "review": "A great space to decompress for a few days and enjoy peacefulness in nature. Mary and Matt are incredibly kind and great at communication. Thank you again!",
        "stars": 3
    },
    {
        "spotId": 20,
        "userId": 1,
        "review": "Beautiful location. We loved the redwood trees and the remote, peaceful surroundings.",
        "stars": 3
    },
    {
        "spotId": 20,
        "userId": 2,
        "review": "An amazing cabin in the forest surrounded by towering redwoods. Comfortable for 6 people, very well equipped, lovely terrace to eat or sit and listen to the wildlife. Lots of great hiking nearby.",
        "stars": 4
    },
    {
        "spotId": 20,
        "userId": 3,
        "review": "Another relaxing stay at this redwood retreat. An ideal spot to relax and unwind. We enjoyed hiking the new trail to a meadow area above the woods and found the most amazing redwood cathedral. Highlights were just sitting playing cards and board games on the large deck enjoying family time, surrounded by the trees and enjoying the cool and the silence. The cabin has everything we needed and the host is amazing!\nShow more",
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
