array = ["palavra 1", 2, "Palavra 3"]
puts "#{array[2]} resto da frase"

hash_first = {
  "Key1" => "Value 1",
  "Key2" => "Value 2",
  "Key3" => "Value 3"
}

hash_second = Hash.new
hash_second["Key1"] = "Value 1"
hash_second["Key2"] = "Value 2"

print hash_first["Key3"]

$end
