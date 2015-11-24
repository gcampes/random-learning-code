string_to_replace = "Sheriff Blackburn shot 2 bandits near the lake. Long live Blackburn"

puts string_to_replace
print "What would you like to replace?"
string_replaceable = gets.chomp

print "What do you want to replace #{string_replaceable} with?"
string_newcontent = gets.chomp

stringsplit = string_to_replace.split(" ")

puts "Here it is"

stringsplit.each do |item|
  if item != string_replaceable
    print item + (" ")
  else
    print string_newcontent + (" ")
  end
end
