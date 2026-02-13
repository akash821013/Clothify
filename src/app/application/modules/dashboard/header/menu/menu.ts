import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {

  menMegaMenu:any[]= [
    {
      "column": 1,
      "sections": [
        {
          "title": "Topwear",
          "items": [ "T-Shirts", "Casual Shirts", "Formal Shirts","Sweatshirts","Sweaters",
            "Jackets",
            "Blazers & Coats",
            "Suits",
            "Rain Jackets"
          ]
        },
        {
          "title": "Indian & Festive Wear",
          "items": [
            "Kurtas & Kurta Sets",
            "Sherwanis",
            "Nehru Jackets",
            "Dhotis"
          ]
        }
      ]
    },
    {
      "column": 2,
      "sections": [
        {
          "title": "Bottomwear",
          "items": [
            "Jeans",
            "Casual Trousers",
            "Formal Trousers",
            "Shorts",
            "Track Pants & Joggers"
          ]
        },
        {
          "title": "Innerwear & Sleepwear",
          "items": [
            "Briefs & Trunks",
            "Boxers",
            "Vests",
            "Sleepwear & Loungewear",
            "Thermals"
          ]
        },
        {
          "title": "Plus Size",
          "items": []
        }
      ]
    },
    {
      "column": 3,
      "sections": [
        {
          "title": "Footwear",
          "items": [
            "Casual Shoes",
            "Sports Shoes",
            "Formal Shoes",
            "Sneakers",
            "Sandals & Floaters",
            "Flip Flops",
            "Socks"
          ]
        },
        {
          "title": "Sunglasses & Frames",
          "items": []
        },
        {
          "title": "Watches",
          "items": []
        }
      ]
    },
    {
      "column": 4,
      "sections": [
        {
          "title": "Sports & Active Wear",
          "items": [
            "Sports Shoes",
            "Sports Sandals",
            "Active T-Shirts",
            "Track Pants & Shorts",
            "Tracksuits",
            "Jackets & Sweatshirts",
            "Sports Accessories",
            "Swimwear"
          ]
        },
        {
          "title": "Gadgets",
          "items": [
            "Smart Wearables",
            "Fitness Gadgets",
            "Headphones",
            "Speakers"
          ]
        }
      ]
    },
    {
      "column": 5,
      "sections": [
        {
          "title": "Fashion Accessories",
          "items": [
            "Wallets",
            "Belts",
            "Perfumes & Body Mists",
            "Trimmers",
            "Deodorants",
            "Ties, Cufflinks & Pocket Squares",
            "Accessory Gift Sets",
            "Caps & Hats",
            "Mufflers, Scarves & Gloves",
            "Phone Cases",
            "Rings & Wristwear",
            "Helmets"
          ]
        },
        {
          "title": "Bags & Backpacks",
          "items": []
        },
        {
          "title": "Luggages & Trolleys",
          "items": []
        }
      ]
    }
  ]
}


// menclothing: any[] = ["T-Shirts", "Shirts", "Jeans", "Jackets", "Sweaters", "eee"];

// girlsClothing: any[] = ["Dresses", "Tops", "Skirts", "T-shirts", "Clothing-sets", "Lanhaga-choli",
//   "Kurta-sets", "Patiyala-suits", "Skirts & shorts", "Tights & Leggings", "Jeans, Trousers & Capris",
//   "Jumpsuits & Rompers", "Sweaters & Sweatshirts"];




// }
