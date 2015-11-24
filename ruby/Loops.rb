bomb_timer = 10

while bomb_timer >= 0
  puts bomb_timer
  bomb_timer -=1
end


puts "-------------------------------"

time_fix = 50

until time_fix < 20
  puts time_fix
  time_fix -= 1
end


puts "-------------------------------"

hp = 30
loop do
  hp -= 2
  puts "Damage done, HP Remaining #{hp}"
  break if hp <= 0
end

puts "Game Over!"


puts "-------------------------------"

even = 200
loop do
  even -= 5
  next if even % 2 != 0
  puts "#{even}"
  break if even <= 0
end
