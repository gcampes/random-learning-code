import DS from 'ember-data';

var Coffee = DS.Model.extend({
  name: DS.attr('string'),
  cost: DS.attr('number')
});

//FIXTURES
Coffee.reopenClass({
    FIXTURES: [
	{
		"id": 1,
		"name": "Caffè Americano",
		"cost": "1.37"
	},
	{
		"id": 2,
		"name": "Café Cubano",
		"cost": "1.66"
	},
	{
		"id": 3,
		"name": "Caffè crema",
		"cost": "1.40"
	},
	{
		"id": 4,
		"name": "Cafe Zorro",
		"cost": "1.38"
	},
	{
		"id": 5,
		"name": "Doppio",
		"cost": "1.52"
	},
	{
		"id": 6,
		"name": "Espresso Romano",
		"cost": "1.48"
	},
	{
		"id": 7,
		"name": "Guillermo",
		"cost": "1.31"
	},
	{
		"id": 8,
		"name": "Ristretto",
		"cost": "1.63"
	},
	{
		"id": 9,
		"name": "Antoccino",
		"cost": "1.46"
	},
	{
		"id": 10,
		"name": "Breve",
		"cost": "1.40"
	},
	{
		"id": 11,
		"name": "Café bombón",
		"cost": "1.57"
	},
	{
		"id": 12,
		"name": "Cappuccino",
		"cost": "1.39"
	},
	{
		"id": 13,
		"name": "Cortado",
		"cost": "1.66"
	},
	{
		"id": 14,
		"name": "Latte",
		"cost": "1.62"
	},
	{
		"id": 15,
		"name": "Latte macchiato",
		"cost": "1.42"
	},
	{
		"id": 16,
		"name": "Espressino",
		"cost": "1.40"
	},
	{
		"id": 17,
		"name": "Flat white",
		"cost": "1.58"
	},
	{
		"id": 18,
		"name": "Galão",
		"cost": "1.56"
	},
	{
		"id": 19,
		"name": "Macchiato",
		"cost": "1.51"
	},
	{
		"id": 20,
		"name": "Wiener or Viennese melange",
		"cost": "1.40"
	},
	{
		"id": 21,
		"name": "Coffee with milk",
		"cost": "1.65"
	},
	{
		"id": 22,
		"name": "Café au lait",
		"cost": "1.47"
	},
	{
		"id": 23,
		"name": "Ca phe sua da",
		"cost": "1.57"
	},
	{
		"id": 24,
		"name": "Egg coffee",
		"cost": "1.60"
	},
	{
		"id": 25,
		"name": "Eggnog latte",
		"cost": "1.49"
	},
	{
		"id": 26,
		"name": "Eiskaffee",
		"cost": "1.68"
	},
	{
		"id": 27,
		"name": "Kopi susu",
		"cost": "1.61"
	},
	{
		"id": 28,
		"name": "Vienna coffee",
		"cost": "1.31"
	},
	{
		"id": 29,
		"name": "Espresso con panna",
		"cost": "1.56"
	},
	{
		"id": 30,
		"name": "Coffee with espresso",
		"cost": "1.48"
	},
	{
		"id": 31,
		"name": "Coffee with tea",
		"cost": "1.70"
	},
	{
		"id": 32,
		"name": "Black tie",
		"cost": "1.43"
	},
	{
		"id": 33,
		"name": "Chai latte",
		"cost": "1.52"
	},
	{
		"id": 34,
		"name": "Red tie",
		"cost": "1.48"
	},
	{
		"id": 35,
		"name": "Yuanyang",
		"cost": "1.70"
	},
	{
		"id": 36,
		"name": "Coffee with alcohol",
		"cost": "1.56"
	},
	{
		"id": 37,
		"name": "Liqueur coffee",
		"cost": "1.57"
	},
	{
		"id": 38,
		"name": "Irish coffee",
		"cost": "1.61"
	},
	{
		"id": 39,
		"name": "Rüdesheimer Kaffee",
		"cost": "1.41"
	},
	{
		"id": 40,
		"name": "Pharisäer",
		"cost": "1.31"
	},
	{
		"id": 41,
		"name": "Carajillo",
		"cost": "1.45"
	},
	{
		"id": 42,
		"name": "Melya",
		"cost": "1.52"
	},
	{
		"id": 43,
		"name": "Caffè Marocchino",
		"cost": "1.55"
	},
	{
		"id": 44,
		"name": "Café miel",
		"cost": "1.67"
	},
	{
		"id": 45,
		"name": "Mocha or café mocha or mochaccino",
		"cost": "1.58"
	},
	{
		"id": 46,
		"name": "Café de olla",
		"cost": "1.32"
	},
	{
		"id": 47,
		"name": "Iced",
		"cost": "1.65"
	},
	{
		"id": 48,
		"name": "Greek frappé coffee",
		"cost": "1.49"
	},
	{
		"id": 49,
		"name": "Mazagran",
		"cost": "1.53"
	},
	{
		"id": 50,
		"name": "Palazzo",
		"cost": "1.61"
	},
	{
		"id": 51,
		"name": "Instant coffee",
		"cost": "1.32"
	},
	{
		"id": 52,
		"name": "Canned coffee",
		"cost": "1.33"
	},
	{
		"id": 53,
		"name": "Coffee milk",
		"cost": "1.48"
	},
	{
		"id": 54,
		"name": "Decaffeinated",
		"cost": "1.68"
	},
	{
		"id": 55,
		"name": "Affogato",
		"cost": "1.50"
	},
	{
		"id": 56,
		"name": "Caffè Medici",
		"cost": "1.31"
	},
	{
		"id": 57,
		"name": "Café Touba",
		"cost": "1.51"
	},
	{
		"id": 58,
		"name": "Indian filter coffee",
		"cost": "1.55"
	},
	{
		"id": 59,
		"name": "Moka",
		"cost": "1.49"
	},
	{
		"id": 60,
		"name": "Shakerato",
		"cost": "1.30"
	},
	{
		"id": 61,
		"name": "Pocillo",
		"cost": "1.70"
	},
    ]
});

export default Coffee;
