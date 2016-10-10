# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Sowing the seeds..."

USERS = 3
IMAGES = [
  "http://static.giantbomb.com/uploads/square_small/0/8440/458329-buster_sheep.jpg",
  "https://pbs.twimg.com/profile_images/664663430830264320/5ohQ1qbj_bigger.jpg",
  "http://67.media.tumblr.com/avatar_52472a30105c_128.png",
  "http://66.media.tumblr.com/avatar_131fd597e59c_128.png",
  "https://65.media.tumblr.com/avatar_56a6db45f1d9_128.png",
  "https://pp.vk.me/c323521/v323521402/6d83/B74S93ZEjpE.jpg"
]

puts "Destroying previous seeds"
Assignment.destroy_all
Card.destroy_all
List.destroy_all
Board.destroy_all
User.destroy_all


print "Building users"
# create default
phil = User.create(email: 'phil@viking.com', password: 'password', image_path: IMAGES[0])
3.times do
  phil.boards.create(user_id: phil.id, name: Faker::SlackEmoji.emoji)
end
print "."

USERS.times do |count|
  user = User.create(email: Faker::Internet.email, password: 'password', image_path: IMAGES[count + 1])

  3.times do
    user.boards.create(user_id: user.id, name: Faker::SlackEmoji.emoji)
  end

  print "."
end

puts
print "Building lists"
Board.all.each do |board|
  3.times do
    board.lists.create(title: Faker::Beer.name, description: Faker::Beer.style)
  end
  print "."
end


puts
print "Building cards"
List.all.each do |list|
  3.times do |count|
    card = list.cards.create(title: Faker::Hacker.say_something_smart, description: Faker::ChuckNorris.fact, completed: Faker::Boolean.boolean)
    User.all.sample.tasks << card if count.even?
  end
  print "."
end


puts
puts "Seeding complete!"