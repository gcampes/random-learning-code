def triple
  puts "We are in the method"
  yield
  puts "We are back inside the method"
end

triple { puts "We are doing the yield operation" }


def introduction(name)
  yield(name)
  yield("Amanda")
  yield(name)
  yield("John")
end

introduction("Jacob") { |parameter| puts "My name is #{parameter}!" }
