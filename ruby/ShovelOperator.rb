print "Jacob" << "Williams"

my_friends = ["Mike", "Gingy", "Troy", "Drew"]

puts "You currently have #{my_friends}. Add another name please"
new_friend = gets.chomp

my_friends << new_friend

last_friend = "Adam"

puts "My top friends are #{my_friends.join(', ')}, " << last_friend << " for a reason."

my_friends.push(last_friend) #Add at the end
my_friends.unshift(last_friend) #Add at the beginning
my_friends.insert(1, last_friend) #Add at specific place
