# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
restaurants = Restaurant.create([
  {
    name: "Taco Bell",
    image_url:"https://picsum.photos/id/237/200/301"
  },
  {
    name: "Wendys",
    image_url:"https://picsum.photos/id/237/200/302"
  },
  {
    name: "Mcdonalds",
    image_url:"https://picsum.photos/id/237/200/303"
  }

])

reviews = Review.create([
  {
    title:"Bad",
    description:"bad place",
    score: 1,
    restaurant: restaurants.first
  },
  {
    title:"Good",
    description:"Good place",
    score: 5,
    restaurant: restaurants.first
  }
])