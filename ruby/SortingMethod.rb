def sortedlist(array, reverse = false)
  if
    reverse == false
    array.sort{|a,b| a <=> b}
  else
    array.sort{|a,b| b <=> a}
  end
end

disney_movies = ["Lion King", "Little Mermaid", "Lady and the Tramp", "Finding Nemo", "Toy Story", "Tangled"]

puts "In Reverse Order: #{sortedlist(disney_movies, true)}"

puts "In Proper Order: #{sortedlist(disney_movies)}"
