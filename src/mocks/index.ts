import * as T from "../types";
import ori from "../assets/images/ori-and-the-will-of-the-wisps.jpg"
import back4blood from "../assets/images/back-for-blood.jpg"

export const mockedProducts: T.Product[] = [
  {
    id: "3df26203-5a36-402b-ac7d-437339db15bf",
    name: "Ori and the will of the wisps",
    price: 42.57,
    image: ori,
    categoryId: ["ef215c07-a2e4-495c-9e0f-5c10cc971d11","ef216c07-a2e4-495c-9e0f-5c10cc971d11"],
    userId: ["6d6cf9d2-cf94-4b90-a53b-973d92501e02"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3df26203-4a36-402b-ac7d-437339db15bf",
    name: "Back 4 blood",
    price: 139.99,
    image: back4blood,
    categoryId: ["a6e86fe9-ca7f-40a3-9b95-331e749038f1","ef216c07-a2e4-495c-9e0f-5c10cc971d11"],
    userId: ["6d6cf9d2-cf94-4b90-a53b-973d92501e02"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },

];

export const mockedCategories: T.Category[] = [
  {
    id: "ef216c07-a2e4-495c-9e0f-5c10cc971d11",
    name: "All",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "ef215c07-a2e4-495c-9e0f-5c10cc971d11",
    name: "Adventure",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "a6e86fe9-ca7f-40a3-9b95-331e749038f1",
    name: "FPS",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "1c86eac1-f2b9-4bdf-8dc9-21bcd789da4f",
    name: "Action",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const mockedUsers: T.User[] = [
  {
    id: "6d6cf9d2-cf94-4b90-a53b-973d92501e02",
    name: "Hilton",
    email: "hilton.honda@gmail.com",
    password: "7ccbf779f22b9579f80ba3afebcb0e7e",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const mockedFavorites: T.Favorite[] = [
  {
    id: "3df26203-5a36-402b-ac7d-437339db15bf",
    productName: "Ori and the will of the wisps",
    userId: "6d6cf9d2-cf94-4b90-a53b-973d92501e02",
    favoritedAt: new Date(),
  },
];
