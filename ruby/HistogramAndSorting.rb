puts "Write a string"
user_input = gets.chomp

words = user_input.downcase.split

frequency = Hash.new(0)

words.each{|item| frequency[item] += 1}

frequency = frequency.sort_by{ |item, quantidade| item.length}

frequency.reverse.each do |item, quantidade|
  puts item.to_s + " " + quantidade.to_s
end
