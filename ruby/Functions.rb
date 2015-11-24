def factor_to_f(n, f)
  remainder = n % f

  if remainder == 0
    puts "your number is factor to #{f}"
  else
    puts "your number is not factor to #{f}"
  end
end

factor_to_f(99, 3)
factor_to_f(123123, 3)
factor_to_f(21, 3)
factor_to_f(22, 3)
