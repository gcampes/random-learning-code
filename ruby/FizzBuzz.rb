(0..99999).each do |number|
  three = number % 3 == 0
  five = number % 5 == 0
  if three && five
    puts "FizzBuzz"
  elsif three
    puts "Fizz"
  elsif five
    puts "Buzz"
  else
    puts number
  end
end
