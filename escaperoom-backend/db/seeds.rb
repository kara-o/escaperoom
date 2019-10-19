# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

brian = User.create(name: "Brian")
# ian = User.create(name: "Ian")
# kara = User.create(name: "Kara")

game1 = Game.create(user_id: brian.id, total_time: 90)
# game2 = Game.create(user_id: brian.id, total_time: 60)
# game3 = Game.create(user_id: ian.id, total_time: 75)
# game4 = Game.create(user_id: kara.id, total_time: 100)

room1 = Room.create(game_id: game1.id, start_time: 0, end_time: 60)
room2 = Room.create(game_id: game1.id, start_time: 0, end_time: 30)
