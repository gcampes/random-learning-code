puts "How are you feeling today?"

feeling = gets.chomp.downcase

case feeling
when "happy" then  puts "So glad to hear that."
when "sad" then puts "I'm sorry to hear that."
when "tired" then puts "You should take a nap"
else puts "I don't understand that feeling."
end
