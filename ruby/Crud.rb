books = {
  Wheel_of_time: 6,
  MistBorn: 8,
  Alchemist: 7
}

puts "What would you like to do? (add) (update) (delete) (list)"
option = gets.chomp

case option

  when "add"
    puts "What book would you like to add to your hash?"
    title = gets.chomp.to_sym

    title_sym = ""
    i = 0
    until title.length <= i
      if title[i] == " "
        title_sym << ("_")
      else
        title_sym << (title[i])
      end
      i += 1
    end

    if books[title_sym.to_sym].nil?
      puts "What rating do you give the book? from 0 to 10"
      rating = gets.chomp
      books[title_sym.to_sym] = rating.to_i
      puts "The book #{title} has been added with a rating of #{rating}"
    else
      puts "This book is already in your hash"
  end

  when "update"
    puts "What book would you like to update"
    title = gets.chomp
    if books[title.to_sym].nil?
      puts "Error. The book #{title} was not found"
    else
      puts "What rating do you give to the book? from 0 to 10"
      rating = gets.chomp
      books[title.to_sym] = rating.to_i
  end

  when "delete"
    puts "What book would you like to delete"
    title = gets.chomp
    if books[title.to_sym].nil?
      puts "Error. The book #{title} was not found"
    else
      books.delete(title.to_sym)
  end

  when "list"
    puts "Here is your books"
    books.each do |book, rating|
      puts book.to_s + " - Rated: "+ rating.to_s
  end

  else
    puts "Error. You've Broken something :("
  end

puts books
gets.chomp
