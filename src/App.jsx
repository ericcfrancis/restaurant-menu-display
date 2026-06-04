import './index.css'
import RestaurantHeader from './RestaurantHeader'
import MenuCategory from './MenuCategory'

import appetizerOne from './assets/appetizer-1.png'
import appetizerTwo from './assets/appetizer-2.png'

import mainDishOne from './assets/maindish-1.png'
import mainDishTwo from './assets/maindish-2.png'
import mainDishThree from './assets/maindish-3.png'

import dessertOne from './assets/dessert-1.png'
import dessertTwo from './assets/dessert-2.png'

export default function App() {
  const restaurantInfo = {
    restaurantName: "My K-fae",
    tagline: "G-Dragon pernah makan sini",
    rating: 5,
    cuisine: "Korean"
  };

  const appetizers = [
    {
      id: 1,
      name: "Gyeran-jjim",
      description: "Savory, fluffy, silky smooth steamed egg custard in a traditional ttukbaegi hot stone pot, topped with finely minced green onions and a sprinkle of gochugaru chili.",
      price: 8,
      category: "Appetizers",
      isVegetarian: true,
      isSpicy: true,
      image: appetizerOne
    },
    {
      id: 2,
      name: "Fried Mandu",
      description: "Crispy, golden-brown fried Korean dumplings, plated on a minimalist white ceramic dish. Five mandu are served with a spicy soy dipping sauce. The focus is sharp on the crunchy texture, with soft natural light.",
      price: 6,
      category: "Appetizers",
      isVegetarian: true,
      isSpicy: true,
      image: appetizerTwo
    }
  ]

  const mainDishes = [
    {
      id: 3,
      name: "Dolsot Bibimbap",
      description: "This is a vibrant, steaming bowl of Dolsot Bibimbap (mixed rice in a hot stone bowl), featuring a central egg yolk and arranged vegetables.",
      price: 10,
      category: "Mains",
      isVegetarian: true,
      isSpicy: true,
      image: mainDishOne
    },

    {
      id: 4,
      name: "Kimchi Jjigae",
      description: "This image shows a warm, bubbling Kimchi Jjigae served in a traditional earthenware pot (ttukbaegi) under bright, natural daylight.",
      price: 12,
      category: "Mains",
      isVegetarian: true,
      isSpicy: true,
      image: mainDishTwo
    },

    {
      id: 5,
      name: "Japchae",
      description: "A close-up photograph of colorful, glossy Japchae—stir-fried sweet potato starch noodles with beef and vegetables—presented in a large ceramic bowl with chopsticks resting on the edge.",
      price: 12,
      category: "Mains",
      isVegetarian: true,
      isSpicy: false,
      image: mainDishThree
    }
  ]

  const desserts = [
    {
      id: 6,
      name: "Patbingsu",
      description: "A modern, dynamic bowl of finely shaved milk ice, topped with a generous mound of sweetened red bean paste, chewy tteok cubes, slivered almonds, and a dusting of roasted grain powder (misutgaru), drizzled with condensed milk.",
      price: 7,
      category: "Desserts",
      isVegetarian: false,
      isSpicy: false,
      image: dessertOne
    },
    {
      id: 7,
      name: "Yakgwa",
      description: "Clean and modern Korean Yakgwa (honey-glazed cookies), intricately shaped in their traditional flower form and garnished subtly with finely chopped pine nuts and edible gold leaf, presented on a minimalist textured gray ceramic plate under soft, diffused natural daylight.",
      price: 7,
      category: "Desserts",
      isVegetarian: false,
      isSpicy: false,
      image: dessertTwo
    }
  ]

  function handleItemOrder(name, price) {
    alert("You ordered: " + name + "- RM " + price.toFixed(2));
    console.log("Order placed fro: ", name);
  }

  return (
    <div>
      <RestaurantHeader
        restaurantName={restaurantInfo.restaurantName}
        tagline={restaurantInfo.tagline}
        rating={restaurantInfo.rating}
        cuisine={restaurantInfo.cuisine}
      />

      <MenuCategory
        categoryName="Appetizers"
        items={appetizers}
        onItemOrder={handleItemOrder}
      />
      <MenuCategory
        categoryName="Main Dishes"
        items={mainDishes}
        onItemOrder={handleItemOrder}
      />
      <MenuCategory
        categoryName="Desserts"
        items={desserts}
        onItemOrder={handleItemOrder}
      />
    </div>
  )
}