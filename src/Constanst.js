import amul from "./assets/amul.jpg";
import dominos from "./assets/dominos.jpg";
import dc from "./assets/dc.jpg";
import fc from "./assets/fc.jpg";
import oneworld from "./assets/oneworld.jpg";
import heaven from "./assets/7thHeaven.jpg";
import bbq from "./assets/bbqNation.jpg";
import pizza from "./assets/pizzaHut.jpg";
import zaitoon from "./assets/Zaitoon.jpg";
import mcds from "./assets/mcds.jpg";
const list = [
  {
    id: 1,
    image: oneworld,
    name: "One Food World",
    description:
      "Indulge in quick bites and coffee blends at our vibrant café, perfect for casual dining.",
    reviews: [
      "The food here is consistently fresh and flavorful. Whether you're grabbing a quick bite or enjoying a leisurely meal, you won't be disappointed.",
      "Great atmosphere and tasty dishes make this spot a favorite for any occasion. The menu offers something for everyone, and the service is top-notch",
      "I keep coming back for more! The quality of the food is unmatched, and the prices are reasonable. A definite must-try for any food lover.",
    ],
    users: ["Nipun", "Anagha", "Aditya"],
    ratings: [1, 1, 1],
  },
  {
    id: 2,
    image: fc,
    name: "Food Court",
    description:
      "Campus eatery offering quick bites and coffee for students, fostering a vibrant atmosphere for socializing.",
    reviews: [
      "The food here is consistently fresh and flavorful. Whether you're grabbing a quick bite or enjoying a leisurely meal, you won't be disappointed.",
      "Great atmosphere and tasty dishes make this spot a favorite for any occasion. The menu offers something for everyone, and the service is top-notch.",
      "I keep coming back for more! The quality of the food is unmatched, and the prices are reasonable. A definite must-try for any food lover.",
    ],
    users: ["Nipun", "Anagha", "Aditya"],
    ratings: [2, 4, 3],
  },
  {
    id: 3,
    image: dc,
    name: "DC Bakery",
    description:
      "Freshly baked goods in a cozy setting, offering delightful treats and aromatic coffee for patrons.",
    reviews: [
      "The food here is consistently fresh and flavorful. Whether you're grabbing a quick bite or enjoying a leisurely meal, you won't be disappointed.",
      "Great atmosphere and tasty dishes make this spot a favorite for any occasion. The menu offers something for everyone, and the service is top-notch",
      "I keep coming back for more! The quality of the food is unmatched, and the prices are reasonable. A definite must-try for any food lover.",
    ],
    users: ["Nipun", "Anagha", "Aditya"],
    ratings: [2, 4, 3],
  },
  {
    id: 4,
    image: amul,
    name: "Amul",
    description:
      "On-campus Amul shop: fresh ice cream, milkshakes, dairy delights, perfect for college cravings and convenience.",
    reviews: [
      "The food here is consistently fresh and flavorful. Whether you're grabbing a quick bite or enjoying a leisurely meal, you won't be disappointed.",
      "Great atmosphere and tasty dishes make this spot a favorite for any occasion. The menu offers something for everyone, and the service is top-notch",
      "I keep coming back for more! The quality of the food is unmatched, and the prices are reasonable. A definite must-try for any food lover.",
    ],
    users: ["Nipun", "Anagha", "Aditya"],
    ratings: [2, 4, 3],
  },
  {
    id: 5,
    image: dominos,
    name: "Dominos",
    description:
      "On-campus Domino's: Hot pizza, cheesy delights, quick delivery, satisfying hunger pangs for college students on the go.",
    reviews: [
      "The food here is consistently fresh and flavorful. Whether you're grabbing a quick bite or enjoying a leisurely meal, you won't be disappointed.",
      "Great atmosphere and tasty dishes make this spot a favorite for any occasion. The menu offers something for everyone, and the service is top-notch",
      "I keep coming back for more! The quality of the food is unmatched, and the prices are reasonable. A definite must-try for any food lover.",
    ],
    users: ["Nipun", "Anagha", "Aditya"],
    ratings: [2, 4, 3],
  },
  {
    id: 6,
    image: heaven,
    name: "7th Heaven",
    description:
      "Comfort classics, friendly service, perfect for casual gatherings and satisfying cravings near college.",
    reviews: [
      "The food here is consistently fresh and flavorful. Whether you're grabbing a quick bite or enjoying a leisurely meal, you won't be disappointed.",
      "Great atmosphere and tasty dishes make this spot a favorite for any occasion. The menu offers something for everyone, and the service is top-notch",
      "I keep coming back for more! The quality of the food is unmatched, and the prices are reasonable. A definite must-try for any food lover.",
    ],
    users: ["Nipun", "Anagha", "Aditya"],
    ratings: [2, 4, 3],
  },
  {
    id: 7,
    image: bbq,
    name: "BBQ Nation",
    description:
      "Smoky ribs, grilled meats, tangy sauces, laid-back vibe, perfect for carnivores and meat lovers alike.",
    reviews: [
      "The food here is consistently fresh and flavorful. Whether you're grabbing a quick bite or enjoying a leisurely meal, you won't be disappointed.",
      "Great atmosphere and tasty dishes make this spot a favorite for any occasion. The menu offers something for everyone, and the service is top-notch.",
      "I keep coming back for more! The quality of the food is unmatched, and the prices are reasonable. A definite must-try for any food lover.",
    ],
    users: ["Nipun", "Anagha", "Aditya"],
    ratings: [2, 4, 3],
  },
  {
    id: 8,
    image: zaitoon,
    name: "Zaitoon",
    description:
      "Gourmet cuisine, impeccable service, elegant ambiance, ideal for special occasions or refined dining experiences.",
    reviews: [
      "The food here is consistently fresh and flavorful. Whether you're grabbing a quick bite or enjoying a leisurely meal, you won't be disappointed.",
      "Great atmosphere and tasty dishes make this spot a favorite for any occasion. The menu offers something for everyone, and the service is top-notch",
      "I keep coming back for more! The quality of the food is unmatched, and the prices are reasonable. A definite must-try for any food lover.",
    ],
    users: ["Nipun", "Anagha", "Aditya"],
    ratings: [2, 4, 3],
  },
  {
    id: 9,
    image: pizza,
    name: "Pizza Hut",
    description:
      "Fresh dough, cheesy toppings, crispy crusts, casual setting, a go-to for satisfying pizza cravings near college.",
    reviews: [
      "The food here is consistently fresh and flavorful. Whether you're grabbing a quick bite or enjoying a leisurely meal, you won't be disappointed.",
      "Great atmosphere and tasty dishes make this spot a favorite for any occasion. The menu offers something for everyone, and the service is top-notch",
      "I keep coming back for more! The quality of the food is unmatched, and the prices are reasonable. A definite must-try for any food lover.",
    ],
    users: ["Nipun", "Anagha", "Aditya"],
    ratings: [2, 4, 3],
  },
  {
    id: 10,
    image: mcds,
    name: "McDonald's",
    description:
      "Iconic burgers, crispy fries, quick service, bustling atmosphere, a convenient spot for college munchies.",
    reviews: [
      "The food here is consistently fresh and flavorful. Whether you're grabbing a quick bite or enjoying a leisurely meal, you won't be disappointed.",
      "Great atmosphere and tasty dishes make this spot a favorite for any occasion. The menu offers something for everyone, and the service is top-notch",
      "I keep coming back for more! The quality of the food is unmatched, and the prices are reasonable. A definite must-try for any food lover.",
    ],
    users: ["Nipun", "Anagha", "Aditya"],
    ratings: [2, 4, 3],
  },
];
export default list;
