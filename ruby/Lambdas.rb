our_proc = Proc.new { |x, y| puts x+y }
our_proc.call(7, 15, 10)

our_lambda = lambda { |x, y| puts x+y }
our_lambda.call(7, 15)

def trees
  leaf = lambda {return "I'm blowing in the wind."}
  puts leaf.call
  return "I'm standing still."
end

puts trees
