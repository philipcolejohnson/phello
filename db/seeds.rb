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
  "https://images-na.ssl-images-amazon.com/images/I/610jSM3i3pL._CR0,0,500,500_UX128.jpg",
  "http://66.media.tumblr.com/avatar_131fd597e59c_128.png",
  "https://images-na.ssl-images-amazon.com/images/I/61QXmghBvkL._CR0,0,500,500_UX128.jpg",
  "https://pp.vk.me/c323521/v323521402/6d83/B74S93ZEjpE.jpg",
  "https://pbs.twimg.com/profile_images/623440110936195072/jAmmawtp_reasonably_small.png"
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
6.times do
  phil.boards.create(user_id: phil.id, name: Faker::Hacker.adjective)
end
print "."

USERS.times do |count|
  user = User.create(email: Faker::Internet.email, password: 'password', image_path: IMAGES[count + 1])

  6.times do
    user.boards.create(user_id: user.id, name: Faker::SlackEmoji.emoji)
  end

  print "."
end

puts
print "Building lists"
Board.all.each do |board|
  3.times do
    board.lists.create(title: Faker::Hacker.noun, description: Faker::Hipster.sentence)
  end
  print "."
end


puts
print "Building cards"
List.all.each do |list|
  3.times do
    card = list.cards.create(title: Faker::Hacker.say_something_smart, description: Faker::ChuckNorris.fact, completed: Faker::Boolean.boolean)
    User.all.sample.tasks << card if rand(2) == 1
  end
  print "."
end


puts
puts "Seeding complete!"