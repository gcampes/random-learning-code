$begin

array = ["item1", "item2", "item3"]

for item in array
  puts item
end

puts "--"

for item in array.reverse
  puts item
end

puts "--"

counter = 1
array.each do |item|
  puts "#{counter}: #{item}"
  counter += 1
end

puts "--"

array.each_with_index do |item, index|
  puts "#{index}: #{item}"
end

$end
