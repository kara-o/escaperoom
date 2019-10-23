# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


brian = User.create(name: "Brian")
ian = User.create(name: "Ian")
kara = User.create(name: "Kara")

escape_room1 = Game.create(name: "Escape Room - Version 1")

brian_score1 = Score.create(time: 180, game_id: escape_room1.id, user_id: brian.id)
brian_score2 = Score.create(time: 150, game_id: escape_room1.id, user_id: brian.id)
ian_score1 = Score.create(time: 200, game_id: escape_room1.id, user_id: ian.id)
ian_score2 = Score.create(time: 170, game_id: escape_room1.id, user_id: ian.id)
kara_score1 = Score.create(time: 210, game_id: escape_room1.id, user_id: kara.id)
kara_score2 = Score.create(time: 190, game_id: escape_room1.id, user_id: kara.id)

#KARA'S BRANCH!!
