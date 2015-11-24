puts "Hello, this is a Pythagorean Teorem Calculator."

print "To get started, what is side A?"
a = gets.to_f;

print "What is side B?"
b = gets.to_f;

#calculation
a2 = a**2
b2 = b**2
c2 = a2+b2
print "Hello, your triangle's Hipotenuse is #{Math.sqrt(c2).round(2)}"
