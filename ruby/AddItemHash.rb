novels = {
  Green_Eggs: 5,
  Harry_Potter: 8,
  Way_Of_Kings: 6
}

answer = "yes"
while answer == "yes"

puts "Would you like to add another book to your hash?"
answer = gets.chomp.downcase

case answer
  when "yes"
    puts "What book would you like to add?"
    book = gets.chomp
    novels[book.to_sym]
    puts "What rating from 1 to 10 would you give to #{book}"
    rating = gets.chomp
    novels[book.to_sym] = rating.to_i
    puts "#{book} has been added to the hash with a rating of #{rating}"
  when "no"
    puts "Sounds good to me!"
  end

end

puts "Here is your hash:"
novels.each {|novel, rating| puts novel.to_s + " - Rated " + rating.to_s }
