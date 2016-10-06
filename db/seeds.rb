# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Sowing the seeds..."

USERS = 3

puts "Destroying previous seeds"
User.destroy_all
Board.destroy_all
List.destroy_all


print "Building users"
# create default
phil = User.create(email: 'phil@viking.com', password: 'password')
3.times do
  phil.boards.create(user_id: phil.id, name: Faker::SlackEmoji.emoji)
end
print "."

USERS.times do |count|
  user = User.create(email: Faker::Internet.email, password: 'password')

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
puts "Seeding complete!"