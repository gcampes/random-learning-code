people_one = [54, 21, 35, 76, 7, 99]
people_two = [27, 30, 57, 63 ,13 ,55 ,79]

over_thirty = Proc.new { |item| item > 30 }
over_twentyone = Proc.new { |item| item > 21 }
group_one = people_one.select(&over_thirty)
group_two = people_two.select(&over_twentyone)


puts group_one
puts "---"
puts group_two
