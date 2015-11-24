import DS from 'ember-data';

var Hist = DS.Model.extend({
  user: DS.belongsTo('user', {async:false}),
  coffee: DS.belongsTo('coffee', {async:false}),
  date: DS.attr('date')
});

Hist.reopenClass({
    FIXTURES: [
      {
    		"id": 1,
    		"user": 3,
    		"coffee": 51,
    		"date": "16/03/15"
    	},
    	{
    		"id": 2,
    		"user": 5,
    		"coffee": 47,
    		"date": "02/05/15"
    	},
    	{
    		"id": 3,
    		"user": 3,
    		"coffee": 52,
    		"date": "12/08/15"
    	},
    	{
    		"id": 4,
    		"user": 5,
    		"coffee": 51,
    		"date": "25/07/15"
    	},
    	{
    		"id": 5,
    		"user": 2,
    		"coffee": 30,
    		"date": "03/11/14"
    	},
    	{
    		"id": 6,
    		"user": 4,
    		"coffee": 35,
    		"date": "01/05/15"
    	},
    	{
    		"id": 7,
    		"user": 3,
    		"coffee": 5,
    		"date": "03/07/15"
    	},
    	{
    		"id": 8,
    		"user": 2,
    		"coffee": 21,
    		"date": "07/08/15"
    	},
    	{
    		"id": 9,
    		"user": 2,
    		"coffee": 37,
    		"date": "21/01/15"
    	},
    	{
    		"id": 10,
    		"user": 3,
    		"coffee": 26,
    		"date": "13/08/15"
    	},
    	{
    		"id": 11,
    		"user": 5,
    		"coffee": 52,
    		"date": "17/07/15"
    	},
    	{
    		"id": 12,
    		"user": 3,
    		"coffee": 58,
    		"date": "31/05/15"
    	},
    	{
    		"id": 13,
    		"user": 1,
    		"coffee": 35,
    		"date": "22/04/15"
    	},
    	{
    		"id": 14,
    		"user": 4,
    		"coffee": 48,
    		"date": "21/07/15"
    	},
    	{
    		"id": 15,
    		"user": 4,
    		"coffee": 59,
    		"date": "20/12/14"
    	},
    	{
    		"id": 16,
    		"user": 4,
    		"coffee": 16,
    		"date": "24/02/15"
    	},
    	{
    		"id": 17,
    		"user": 2,
    		"coffee": 46,
    		"date": "20/02/15"
    	},
    	{
    		"id": 18,
    		"user": 5,
    		"coffee": 13,
    		"date": "20/01/15"
    	},
    	{
    		"id": 19,
    		"user": 3,
    		"coffee": 33,
    		"date": "17/08/15"
    	},
    	{
    		"id": 20,
    		"user": 5,
    		"coffee": 11,
    		"date": "12/10/14"
    	},
    	{
    		"id": 21,
    		"user": 3,
    		"coffee": 56,
    		"date": "17/06/15"
    	},
    	{
    		"id": 22,
    		"user": 1,
    		"coffee": 56,
    		"date": "11/04/15"
    	},
    	{
    		"id": 23,
    		"user": 5,
    		"coffee": 28,
    		"date": "16/09/15"
    	},
    	{
    		"id": 24,
    		"user": 1,
    		"coffee": 44,
    		"date": "19/01/15"
    	},
    	{
    		"id": 25,
    		"user": 2,
    		"coffee": 5,
    		"date": "01/10/15"
    	},
    	{
    		"id": 26,
    		"user": 1,
    		"coffee": 28,
    		"date": "27/09/15"
    	},
    	{
    		"id": 27,
    		"user": 4,
    		"coffee": 52,
    		"date": "05/08/15"
    	},
    	{
    		"id": 28,
    		"user": 5,
    		"coffee": 28,
    		"date": "13/02/15"
    	},
    	{
    		"id": 29,
    		"user": 1,
    		"coffee": 10,
    		"date": "07/04/15"
    	},
    	{
    		"id": 30,
    		"user": 5,
    		"coffee": 14,
    		"date": "15/02/15"
    	},
    	{
    		"id": 31,
    		"user": 5,
    		"coffee": 27,
    		"date": "18/01/15"
    	},
    	{
    		"id": 32,
    		"user": 1,
    		"coffee": 24,
    		"date": "09/06/15"
    	},
    	{
    		"id": 33,
    		"user": 5,
    		"coffee": 2,
    		"date": "29/05/15"
    	},
    	{
    		"id": 34,
    		"user": 1,
    		"coffee": 18,
    		"date": "05/02/15"
    	},
    	{
    		"id": 35,
    		"user": 2,
    		"coffee": 30,
    		"date": "29/07/15"
    	},
    	{
    		"id": 36,
    		"user": 4,
    		"coffee": 34,
    		"date": "18/11/14"
    	},
    	{
    		"id": 37,
    		"user": 3,
    		"coffee": 40,
    		"date": "23/03/15"
    	},
    	{
    		"id": 38,
    		"user": 5,
    		"coffee": 46,
    		"date": "12/03/15"
    	},
    	{
    		"id": 39,
    		"user": 2,
    		"coffee": 59,
    		"date": "17/05/15"
    	},
    	{
    		"id": 40,
    		"user": 2,
    		"coffee": 14,
    		"date": "03/04/15"
    	},
    	{
    		"id": 41,
    		"user": 2,
    		"coffee": 26,
    		"date": "23/12/14"
    	},
    	{
    		"id": 42,
    		"user": 5,
    		"coffee": 58,
    		"date": "25/12/14"
    	},
    	{
    		"id": 43,
    		"user": 4,
    		"coffee": 47,
    		"date": "16/10/14"
    	},
    	{
    		"id": 44,
    		"user": 1,
    		"coffee": 36,
    		"date": "01/02/15"
    	},
    	{
    		"id": 45,
    		"user": 1,
    		"coffee": 47,
    		"date": "07/05/15"
    	},
    	{
    		"id": 46,
    		"user": 3,
    		"coffee": 48,
    		"date": "30/01/15"
    	},
    	{
    		"id": 47,
    		"user": 4,
    		"coffee": 8,
    		"date": "13/08/15"
    	},
    	{
    		"id": 48,
    		"user": 4,
    		"coffee": 38,
    		"date": "12/11/14"
    	},
    	{
    		"id": 49,
    		"user": 5,
    		"coffee": 40,
    		"date": "09/04/15"
    	},
    	{
    		"id": 50,
    		"user": 5,
    		"coffee": 5,
    		"date": "28/12/14"
    	},
    	{
    		"id": 51,
    		"user": 5,
    		"coffee": 48,
    		"date": "31/03/15"
    	},
    	{
    		"id": 52,
    		"user": 4,
    		"coffee": 12,
    		"date": "06/05/15"
    	},
    	{
    		"id": 53,
    		"user": 2,
    		"coffee": 58,
    		"date": "23/08/15"
    	},
    	{
    		"id": 54,
    		"user": 5,
    		"coffee": 28,
    		"date": "18/05/15"
    	},
    	{
    		"id": 55,
    		"user": 5,
    		"coffee": 7,
    		"date": "15/09/15"
    	},
    	{
    		"id": 56,
    		"user": 2,
    		"coffee": 2,
    		"date": "12/01/15"
    	},
    	{
    		"id": 57,
    		"user": 5,
    		"coffee": 27,
    		"date": "18/07/15"
    	},
    	{
    		"id": 58,
    		"user": 1,
    		"coffee": 5,
    		"date": "24/04/15"
    	},
    	{
    		"id": 59,
    		"user": 5,
    		"coffee": 56,
    		"date": "31/07/15"
    	},
    	{
    		"id": 60,
    		"user": 1,
    		"coffee": 61,
    		"date": "11/09/15"
    	},
    	{
    		"id": 61,
    		"user": 1,
    		"coffee": 3,
    		"date": "07/02/15"
    	},
    	{
    		"id": 62,
    		"user": 3,
    		"coffee": 35,
    		"date": "23/10/14"
    	},
    	{
    		"id": 63,
    		"user": 4,
    		"coffee": 28,
    		"date": "09/06/15"
    	},
    	{
    		"id": 64,
    		"user": 1,
    		"coffee": 52,
    		"date": "25/04/15"
    	},
    	{
    		"id": 65,
    		"user": 1,
    		"coffee": 41,
    		"date": "31/10/14"
    	},
    	{
    		"id": 66,
    		"user": 1,
    		"coffee": 8,
    		"date": "05/06/15"
    	},
    	{
    		"id": 67,
    		"user": 5,
    		"coffee": 59,
    		"date": "08/08/15"
    	},
    	{
    		"id": 68,
    		"user": 5,
    		"coffee": 41,
    		"date": "11/09/15"
    	},
    	{
    		"id": 69,
    		"user": 5,
    		"coffee": 25,
    		"date": "27/01/15"
    	},
    	{
    		"id": 70,
    		"user": 3,
    		"coffee": 52,
    		"date": "02/11/14"
    	},
    	{
    		"id": 71,
    		"user": 2,
    		"coffee": 29,
    		"date": "30/12/14"
    	},
    	{
    		"id": 72,
    		"user": 5,
    		"coffee": 26,
    		"date": "15/10/14"
    	},
    	{
    		"id": 73,
    		"user": 2,
    		"coffee": 35,
    		"date": "10/05/15"
    	},
    	{
    		"id": 74,
    		"user": 1,
    		"coffee": 50,
    		"date": "22/12/14"
    	},
    	{
    		"id": 75,
    		"user": 2,
    		"coffee": 50,
    		"date": "25/03/15"
    	},
    	{
    		"id": 76,
    		"user": 5,
    		"coffee": 51,
    		"date": "02/07/15"
    	},
    	{
    		"id": 77,
    		"user": 5,
    		"coffee": 57,
    		"date": "09/11/14"
    	},
    	{
    		"id": 78,
    		"user": 5,
    		"coffee": 53,
    		"date": "27/02/15"
    	},
    	{
    		"id": 79,
    		"user": 5,
    		"coffee": 30,
    		"date": "01/04/15"
    	},
    	{
    		"id": 80,
    		"user": 5,
    		"coffee": 45,
    		"date": "30/03/15"
    	},
    	{
    		"id": 81,
    		"user": 1,
    		"coffee": 16,
    		"date": "24/10/14"
    	},
    	{
    		"id": 82,
    		"user": 5,
    		"coffee": 23,
    		"date": "01/02/15"
    	},
    	{
    		"id": 83,
    		"user": 4,
    		"coffee": 52,
    		"date": "20/09/15"
    	},
    	{
    		"id": 84,
    		"user": 5,
    		"coffee": 19,
    		"date": "12/08/15"
    	},
    	{
    		"id": 85,
    		"user": 5,
    		"coffee": 33,
    		"date": "11/06/15"
    	},
    	{
    		"id": 86,
    		"user": 2,
    		"coffee": 22,
    		"date": "04/07/15"
    	},
    	{
    		"id": 87,
    		"user": 2,
    		"coffee": 26,
    		"date": "10/10/14"
    	},
    	{
    		"id": 88,
    		"user": 3,
    		"coffee": 43,
    		"date": "22/10/14"
    	},
    	{
    		"id": 89,
    		"user": 4,
    		"coffee": 20,
    		"date": "26/11/14"
    	},
    	{
    		"id": 90,
    		"user": 4,
    		"coffee": 44,
    		"date": "04/11/14"
    	},
    	{
    		"id": 91,
    		"user": 2,
    		"coffee": 60,
    		"date": "01/04/15"
    	},
    	{
    		"id": 92,
    		"user": 5,
    		"coffee": 10,
    		"date": "13/06/15"
    	},
    	{
    		"id": 93,
    		"user": 5,
    		"coffee": 3,
    		"date": "20/07/15"
    	},
    	{
    		"id": 94,
    		"user": 3,
    		"coffee": 43,
    		"date": "01/12/14"
    	},
    	{
    		"id": 95,
    		"user": 5,
    		"coffee": 60,
    		"date": "26/05/15"
    	},
    	{
    		"id": 96,
    		"user": 1,
    		"coffee": 60,
    		"date": "23/09/15"
    	},
    	{
    		"id": 97,
    		"user": 5,
    		"coffee": 31,
    		"date": "09/10/14"
    	},
    	{
    		"id": 98,
    		"user": 2,
    		"coffee": 43,
    		"date": "16/05/15"
    	},
    	{
    		"id": 99,
    		"user": 1,
    		"coffee": 27,
    		"date": "12/03/15"
    	},
    	{
    		"id": 100,
    		"user": 1,
    		"coffee": 17,
    		"date": "24/06/15"
    	},
      {
        "id": 101,
        "user": 1,
        "coffee": 9,
        "date": "15/02/15"
      },
      {
        "id": 102,
        "user": 3,
        "coffee": 2,
        "date": "23/09/15"
      },
      {
        "id": 103,
        "user": 5,
        "coffee": 55,
        "date": "22/09/15"
      },
      {
        "id": 104,
        "user": 4,
        "coffee": 52,
        "date": "16/01/15"
      },
      {
        "id": 105,
        "user": 4,
        "coffee": 59,
        "date": "19/09/15"
      },
      {
        "id": 106,
        "user": 1,
        "coffee": 28,
        "date": "03/04/15"
      },
      {
        "id": 107,
        "user": 4,
        "coffee": 20,
        "date": "12/08/15"
      },
      {
        "id": 108,
        "user": 4,
        "coffee": 16,
        "date": "07/08/15"
      },
      {
        "id": 109,
        "user": 3,
        "coffee": 14,
        "date": "28/04/15"
      },
      {
        "id": 110,
        "user": 4,
        "coffee": 51,
        "date": "11/10/14"
      },
      {
        "id": 111,
        "user": 5,
        "coffee": 53,
        "date": "20/07/15"
      },
      {
        "id": 112,
        "user": 2,
        "coffee": 47,
        "date": "01/09/15"
      },
      {
        "id": 113,
        "user": 5,
        "coffee": 18,
        "date": "15/07/15"
      },
      {
        "id": 114,
        "user": 1,
        "coffee": 43,
        "date": "07/03/15"
      },
      {
        "id": 115,
        "user": 1,
        "coffee": 55,
        "date": "14/03/15"
      },
      {
        "id": 116,
        "user": 2,
        "coffee": 17,
        "date": "23/12/14"
      },
      {
        "id": 117,
        "user": 1,
        "coffee": 26,
        "date": "22/03/15"
      },
      {
        "id": 118,
        "user": 5,
        "coffee": 13,
        "date": "14/05/15"
      },
      {
        "id": 119,
        "user": 4,
        "coffee": 19,
        "date": "30/10/14"
      },
      {
        "id": 120,
        "user": 5,
        "coffee": 41,
        "date": "24/01/15"
      },
      {
        "id": 121,
        "user": 2,
        "coffee": 20,
        "date": "14/11/14"
      },
      {
        "id": 122,
        "user": 5,
        "coffee": 16,
        "date": "22/06/15"
      },
      {
        "id": 123,
        "user": 2,
        "coffee": 53,
        "date": "11/09/15"
      },
      {
        "id": 124,
        "user": 4,
        "coffee": 8,
        "date": "17/10/14"
      },
      {
        "id": 125,
        "user": 4,
        "coffee": 49,
        "date": "16/12/14"
      },
      {
        "id": 126,
        "user": 1,
        "coffee": 1,
        "date": "25/05/15"
      },
      {
        "id": 127,
        "user": 5,
        "coffee": 44,
        "date": "15/08/15"
      },
      {
        "id": 128,
        "user": 1,
        "coffee": 23,
        "date": "13/08/15"
      },
      {
        "id": 129,
        "user": 5,
        "coffee": 1,
        "date": "28/05/15"
      },
      {
        "id": 130,
        "user": 5,
        "coffee": 55,
        "date": "01/04/15"
      },
      {
        "id": 131,
        "user": 2,
        "coffee": 7,
        "date": "31/08/15"
      },
      {
        "id": 132,
        "user": 1,
        "coffee": 16,
        "date": "08/12/14"
      },
      {
        "id": 133,
        "user": 4,
        "coffee": 31,
        "date": "10/11/14"
      },
      {
        "id": 134,
        "user": 5,
        "coffee": 49,
        "date": "08/02/15"
      },
      {
        "id": 135,
        "user": 2,
        "coffee": 3,
        "date": "26/07/15"
      },
      {
        "id": 136,
        "user": 4,
        "coffee": 27,
        "date": "11/03/15"
      },
      {
        "id": 137,
        "user": 4,
        "coffee": 14,
        "date": "20/05/15"
      },
      {
        "id": 138,
        "user": 2,
        "coffee": 25,
        "date": "15/02/15"
      },
      {
        "id": 139,
        "user": 1,
        "coffee": 23,
        "date": "29/09/15"
      },
      {
        "id": 140,
        "user": 2,
        "coffee": 19,
        "date": "17/09/15"
      },
      {
        "id": 141,
        "user": 2,
        "coffee": 15,
        "date": "08/06/15"
      },
      {
        "id": 142,
        "user": 3,
        "coffee": 22,
        "date": "10/11/14"
      },
      {
        "id": 143,
        "user": 1,
        "coffee": 51,
        "date": "25/10/14"
      },
      {
        "id": 144,
        "user": 4,
        "coffee": 54,
        "date": "13/02/15"
      },
      {
        "id": 145,
        "user": 5,
        "coffee": 5,
        "date": "13/04/15"
      },
      {
        "id": 146,
        "user": 1,
        "coffee": 8,
        "date": "28/12/14"
      },
      {
        "id": 147,
        "user": 4,
        "coffee": 44,
        "date": "28/10/14"
      },
      {
        "id": 148,
        "user": 1,
        "coffee": 2,
        "date": "03/08/15"
      },
      {
        "id": 149,
        "user": 2,
        "coffee": 33,
        "date": "13/11/14"
      },
      {
        "id": 150,
        "user": 2,
        "coffee": 18,
        "date": "08/07/15"
      },
      {
        "id": 151,
        "user": 4,
        "coffee": 43,
        "date": "04/11/14"
      },
      {
        "id": 152,
        "user": 2,
        "coffee": 12,
        "date": "12/11/14"
      },
      {
        "id": 153,
        "user": 1,
        "coffee": 30,
        "date": "19/10/14"
      },
      {
        "id": 154,
        "user": 3,
        "coffee": 20,
        "date": "04/04/15"
      },
      {
        "id": 155,
        "user": 2,
        "coffee": 28,
        "date": "30/04/15"
      },
      {
        "id": 156,
        "user": 2,
        "coffee": 35,
        "date": "11/01/15"
      },
      {
        "id": 157,
        "user": 3,
        "coffee": 5,
        "date": "30/08/15"
      },
      {
        "id": 158,
        "user": 1,
        "coffee": 21,
        "date": "01/12/14"
      },
      {
        "id": 159,
        "user": 2,
        "coffee": 22,
        "date": "29/06/15"
      },
      {
        "id": 160,
        "user": 2,
        "coffee": 26,
        "date": "26/05/15"
      },
      {
        "id": 161,
        "user": 1,
        "coffee": 51,
        "date": "08/08/15"
      },
      {
        "id": 162,
        "user": 1,
        "coffee": 51,
        "date": "31/05/15"
      },
      {
        "id": 163,
        "user": 5,
        "coffee": 36,
        "date": "09/05/15"
      },
      {
        "id": 164,
        "user": 5,
        "coffee": 8,
        "date": "06/10/15"
      },
      {
        "id": 165,
        "user": 5,
        "coffee": 61,
        "date": "28/02/15"
      },
      {
        "id": 166,
        "user": 4,
        "coffee": 19,
        "date": "06/04/15"
      },
      {
        "id": 167,
        "user": 3,
        "coffee": 3,
        "date": "11/05/15"
      },
      {
        "id": 168,
        "user": 3,
        "coffee": 43,
        "date": "23/05/15"
      },
      {
        "id": 169,
        "user": 1,
        "coffee": 24,
        "date": "11/03/15"
      },
      {
        "id": 170,
        "user": 5,
        "coffee": 37,
        "date": "20/02/15"
      },
      {
        "id": 171,
        "user": 5,
        "coffee": 52,
        "date": "18/11/14"
      },
      {
        "id": 172,
        "user": 1,
        "coffee": 40,
        "date": "22/07/15"
      },
      {
        "id": 173,
        "user": 2,
        "coffee": 41,
        "date": "04/08/15"
      },
      {
        "id": 174,
        "user": 3,
        "coffee": 20,
        "date": "25/05/15"
      },
      {
        "id": 175,
        "user": 4,
        "coffee": 7,
        "date": "02/12/14"
      },
      {
        "id": 176,
        "user": 5,
        "coffee": 61,
        "date": "21/12/14"
      },
      {
        "id": 177,
        "user": 3,
        "coffee": 32,
        "date": "24/03/15"
      },
      {
        "id": 178,
        "user": 4,
        "coffee": 25,
        "date": "27/03/15"
      },
      {
        "id": 179,
        "user": 3,
        "coffee": 26,
        "date": "18/07/15"
      },
      {
        "id": 180,
        "user": 1,
        "coffee": 57,
        "date": "14/10/14"
      },
      {
        "id": 181,
        "user": 4,
        "coffee": 20,
        "date": "12/08/15"
      },
      {
        "id": 182,
        "user": 4,
        "coffee": 17,
        "date": "31/10/14"
      },
      {
        "id": 183,
        "user": 2,
        "coffee": 28,
        "date": "03/08/15"
      },
      {
        "id": 184,
        "user": 1,
        "coffee": 60,
        "date": "17/11/14"
      },
      {
        "id": 185,
        "user": 5,
        "coffee": 16,
        "date": "13/12/14"
      },
      {
        "id": 186,
        "user": 1,
        "coffee": 39,
        "date": "01/05/15"
      },
      {
        "id": 187,
        "user": 1,
        "coffee": 60,
        "date": "08/10/15"
      },
      {
        "id": 188,
        "user": 3,
        "coffee": 2,
        "date": "26/03/15"
      },
      {
        "id": 189,
        "user": 2,
        "coffee": 61,
        "date": "16/04/15"
      },
      {
        "id": 190,
        "user": 2,
        "coffee": 9,
        "date": "10/04/15"
      },
      {
        "id": 191,
        "user": 5,
        "coffee": 38,
        "date": "13/01/15"
      },
      {
        "id": 192,
        "user": 5,
        "coffee": 12,
        "date": "19/04/15"
      },
      {
        "id": 193,
        "user": 1,
        "coffee": 25,
        "date": "03/10/15"
      },
      {
        "id": 194,
        "user": 5,
        "coffee": 12,
        "date": "11/06/15"
      },
      {
        "id": 195,
        "user": 4,
        "coffee": 61,
        "date": "25/12/14"
      },
      {
        "id": 196,
        "user": 4,
        "coffee": 35,
        "date": "22/02/15"
      },
      {
        "id": 197,
        "user": 5,
        "coffee": 61,
        "date": "05/05/15"
      },
      {
        "id": 198,
        "user": 4,
        "coffee": 37,
        "date": "31/01/15"
      },
      {
        "id": 199,
        "user": 4,
        "coffee": 28,
        "date": "15/07/15"
      },
      {
        "id": 200,
        "user": 5,
        "coffee": 33,
        "date": "06/04/15"
      },
      {
        "id": 201,
        "user": 2,
        "coffee": 14,
        "date": "05/12/14"
      },
      {
        "id": 202,
        "user": 2,
        "coffee": 16,
        "date": "07/11/14"
      },
      {
        "id": 203,
        "user": 3,
        "coffee": 22,
        "date": "11/05/15"
      },
      {
        "id": 204,
        "user": 4,
        "coffee": 26,
        "date": "10/07/15"
      },
      {
        "id": 205,
        "user": 4,
        "coffee": 12,
        "date": "07/09/15"
      },
      {
        "id": 206,
        "user": 4,
        "coffee": 31,
        "date": "03/04/15"
      },
      {
        "id": 207,
        "user": 3,
        "coffee": 44,
        "date": "17/04/15"
      },
      {
        "id": 208,
        "user": 2,
        "coffee": 20,
        "date": "28/12/14"
      },
      {
        "id": 209,
        "user": 2,
        "coffee": 20,
        "date": "21/03/15"
      },
      {
        "id": 210,
        "user": 4,
        "coffee": 61,
        "date": "26/01/15"
      },
      {
        "id": 211,
        "user": 4,
        "coffee": 6,
        "date": "30/04/15"
      },
      {
        "id": 212,
        "user": 5,
        "coffee": 20,
        "date": "19/04/15"
      },
      {
        "id": 213,
        "user": 5,
        "coffee": 11,
        "date": "06/11/14"
      },
      {
        "id": 214,
        "user": 5,
        "coffee": 61,
        "date": "01/06/15"
      },
      {
        "id": 215,
        "user": 5,
        "coffee": 14,
        "date": "20/01/15"
      },
      {
        "id": 216,
        "user": 1,
        "coffee": 57,
        "date": "15/04/15"
      },
      {
        "id": 217,
        "user": 1,
        "coffee": 14,
        "date": "29/10/14"
      },
      {
        "id": 218,
        "user": 1,
        "coffee": 31,
        "date": "18/11/14"
      },
      {
        "id": 219,
        "user": 2,
        "coffee": 38,
        "date": "30/12/14"
      },
      {
        "id": 220,
        "user": 4,
        "coffee": 13,
        "date": "12/10/14"
      },
      {
        "id": 221,
        "user": 3,
        "coffee": 6,
        "date": "16/08/15"
      },
      {
        "id": 222,
        "user": 3,
        "coffee": 2,
        "date": "10/02/15"
      },
      {
        "id": 223,
        "user": 1,
        "coffee": 12,
        "date": "24/07/15"
      },
      {
        "id": 224,
        "user": 5,
        "coffee": 47,
        "date": "01/09/15"
      },
      {
        "id": 225,
        "user": 2,
        "coffee": 50,
        "date": "17/09/15"
      },
      {
        "id": 226,
        "user": 5,
        "coffee": 40,
        "date": "16/11/14"
      },
      {
        "id": 227,
        "user": 4,
        "coffee": 4,
        "date": "02/10/15"
      },
      {
        "id": 228,
        "user": 5,
        "coffee": 20,
        "date": "22/10/14"
      },
      {
        "id": 229,
        "user": 4,
        "coffee": 14,
        "date": "08/07/15"
      },
      {
        "id": 230,
        "user": 4,
        "coffee": 36,
        "date": "03/12/14"
      },
      {
        "id": 231,
        "user": 3,
        "coffee": 9,
        "date": "18/03/15"
      },
      {
        "id": 232,
        "user": 5,
        "coffee": 18,
        "date": "17/06/15"
      },
      {
        "id": 233,
        "user": 4,
        "coffee": 19,
        "date": "11/11/14"
      },
      {
        "id": 234,
        "user": 2,
        "coffee": 26,
        "date": "25/09/15"
      },
      {
        "id": 235,
        "user": 5,
        "coffee": 5,
        "date": "26/12/14"
      },
      {
        "id": 236,
        "user": 5,
        "coffee": 11,
        "date": "26/06/15"
      },
      {
        "id": 237,
        "user": 5,
        "coffee": 29,
        "date": "21/12/14"
      },
      {
        "id": 238,
        "user": 3,
        "coffee": 11,
        "date": "23/03/15"
      },
      {
        "id": 239,
        "user": 5,
        "coffee": 24,
        "date": "17/10/14"
      },
      {
        "id": 240,
        "user": 5,
        "coffee": 54,
        "date": "10/06/15"
      },
      {
        "id": 241,
        "user": 2,
        "coffee": 7,
        "date": "27/05/15"
      },
      {
        "id": 242,
        "user": 4,
        "coffee": 26,
        "date": "24/11/14"
      },
      {
        "id": 243,
        "user": 2,
        "coffee": 25,
        "date": "12/12/14"
      },
      {
        "id": 244,
        "user": 4,
        "coffee": 54,
        "date": "14/05/15"
      },
      {
        "id": 245,
        "user": 1,
        "coffee": 45,
        "date": "07/03/15"
      },
      {
        "id": 246,
        "user": 3,
        "coffee": 4,
        "date": "24/08/15"
      },
      {
        "id": 247,
        "user": 1,
        "coffee": 38,
        "date": "01/01/15"
      },
      {
        "id": 248,
        "user": 1,
        "coffee": 57,
        "date": "11/09/15"
      },
      {
        "id": 249,
        "user": 4,
        "coffee": 42,
        "date": "29/07/15"
      },
      {
        "id": 250,
        "user": 1,
        "coffee": 31,
        "date": "21/06/15"
      },
      {
        "id": 251,
        "user": 1,
        "coffee": 27,
        "date": "04/07/15"
      },
      {
        "id": 252,
        "user": 5,
        "coffee": 30,
        "date": "29/03/15"
      },
      {
        "id": 253,
        "user": 3,
        "coffee": 42,
        "date": "18/03/15"
      },
      {
        "id": 254,
        "user": 2,
        "coffee": 3,
        "date": "30/05/15"
      },
      {
        "id": 255,
        "user": 3,
        "coffee": 46,
        "date": "18/10/14"
      },
      {
        "id": 256,
        "user": 5,
        "coffee": 27,
        "date": "14/02/15"
      },
      {
        "id": 257,
        "user": 1,
        "coffee": 3,
        "date": "01/11/14"
      },
      {
        "id": 258,
        "user": 4,
        "coffee": 33,
        "date": "18/02/15"
      },
      {
        "id": 259,
        "user": 2,
        "coffee": 25,
        "date": "05/02/15"
      },
      {
        "id": 260,
        "user": 2,
        "coffee": 29,
        "date": "23/03/15"
      },
      {
        "id": 261,
        "user": 3,
        "coffee": 36,
        "date": "03/12/14"
      },
      {
        "id": 262,
        "user": 4,
        "coffee": 17,
        "date": "26/06/15"
      },
      {
        "id": 263,
        "user": 2,
        "coffee": 60,
        "date": "14/01/15"
      },
      {
        "id": 264,
        "user": 3,
        "coffee": 43,
        "date": "28/11/14"
      },
      {
        "id": 265,
        "user": 2,
        "coffee": 15,
        "date": "21/04/15"
      },
      {
        "id": 266,
        "user": 4,
        "coffee": 12,
        "date": "12/01/15"
      },
      {
        "id": 267,
        "user": 3,
        "coffee": 55,
        "date": "01/05/15"
      },
      {
        "id": 268,
        "user": 3,
        "coffee": 57,
        "date": "22/11/14"
      },
      {
        "id": 269,
        "user": 2,
        "coffee": 6,
        "date": "09/04/15"
      },
      {
        "id": 270,
        "user": 5,
        "coffee": 5,
        "date": "25/07/15"
      },
      {
        "id": 271,
        "user": 3,
        "coffee": 5,
        "date": "01/05/15"
      },
      {
        "id": 272,
        "user": 5,
        "coffee": 59,
        "date": "22/01/15"
      },
      {
        "id": 273,
        "user": 5,
        "coffee": 57,
        "date": "26/12/14"
      },
      {
        "id": 274,
        "user": 1,
        "coffee": 38,
        "date": "28/02/15"
      },
      {
        "id": 275,
        "user": 2,
        "coffee": 57,
        "date": "16/12/14"
      },
      {
        "id": 276,
        "user": 3,
        "coffee": 16,
        "date": "15/06/15"
      },
      {
        "id": 277,
        "user": 5,
        "coffee": 1,
        "date": "04/08/15"
      },
      {
        "id": 278,
        "user": 3,
        "coffee": 2,
        "date": "05/03/15"
      },
      {
        "id": 279,
        "user": 5,
        "coffee": 54,
        "date": "08/08/15"
      },
      {
        "id": 280,
        "user": 4,
        "coffee": 39,
        "date": "01/04/15"
      },
      {
        "id": 281,
        "user": 1,
        "coffee": 34,
        "date": "03/05/15"
      },
      {
        "id": 282,
        "user": 4,
        "coffee": 37,
        "date": "13/02/15"
      },
      {
        "id": 283,
        "user": 4,
        "coffee": 2,
        "date": "02/11/14"
      },
      {
        "id": 284,
        "user": 3,
        "coffee": 32,
        "date": "06/05/15"
      },
      {
        "id": 285,
        "user": 5,
        "coffee": 3,
        "date": "10/11/14"
      },
      {
        "id": 286,
        "user": 2,
        "coffee": 58,
        "date": "14/07/15"
      },
      {
        "id": 287,
        "user": 5,
        "coffee": 35,
        "date": "18/11/14"
      },
      {
        "id": 288,
        "user": 4,
        "coffee": 33,
        "date": "29/05/15"
      },
      {
        "id": 289,
        "user": 2,
        "coffee": 55,
        "date": "08/04/15"
      },
      {
        "id": 290,
        "user": 4,
        "coffee": 3,
        "date": "16/06/15"
      },
      {
        "id": 291,
        "user": 4,
        "coffee": 11,
        "date": "13/08/15"
      },
      {
        "id": 292,
        "user": 4,
        "coffee": 33,
        "date": "12/08/15"
      },
      {
        "id": 293,
        "user": 5,
        "coffee": 61,
        "date": "24/03/15"
      },
      {
        "id": 294,
        "user": 3,
        "coffee": 19,
        "date": "02/05/15"
      },
      {
        "id": 295,
        "user": 3,
        "coffee": 15,
        "date": "30/05/15"
      },
      {
        "id": 296,
        "user": 2,
        "coffee": 22,
        "date": "25/08/15"
      },
      {
        "id": 297,
        "user": 1,
        "coffee": 9,
        "date": "24/05/15"
      },
      {
        "id": 298,
        "user": 5,
        "coffee": 48,
        "date": "10/11/14"
      },
      {
        "id": 299,
        "user": 1,
        "coffee": 43,
        "date": "15/11/14"
      },
      {
        "id": 300,
        "user": 4,
        "coffee": 5,
        "date": "09/02/15"
      }
    ]
});

export default Hist;
