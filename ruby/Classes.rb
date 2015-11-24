class Warrior
  def initialize(name, race, strength, dexterity)
    @name = name
    @race = race
    @strength = strength
    @dexterity = dexterity
  end

  def about
    puts "#{@name} is a #{@race} Warrior, with #{@strength} strength and #{@dexterity} dexterity"
  end

  #global variable
  $warrior_info = "A fighter. A warrior has higher than normal strength. They never back down or surrender."
end

player_1 = Warrior.new("Raze", "Tigaren", 98, 30)

player_1.about

puts $warrior_info
