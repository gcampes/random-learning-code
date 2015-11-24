import Ember from 'ember';

export default Ember.Controller.extend({
  selectedCoffee:null,
  name: ['name'],
  sorted: Ember.computed.sort('model.coffee', 'name'),
  expense: Ember.computed(function(){
    var sum = 0;
    this.model.history.forEach(function(element){
      var currentMonth = (new Date().getMonth()+1).toString();
      currentMonth = (currentMonth.length == 1) ? 0 + currentMonth : currentMonth;
      var regex = new RegExp('[0-9]*\/'+currentMonth+'\/[0-9]*');
      if(regex.test(element.get('date')))
        sum+=Number(element.get('coffee').get('cost'));
    });
    return Math.round(sum * 100) / 100;
  }),

  actions:{
    createHistory(){
      var store = this.store;

      var selectedId = this.get('selectedCoffee').id;

      var dateFormat = function (inputFormat) {
        function addZero(number) { return (number < 10) ? '0' + number : number; }
        var date = new Date(inputFormat);
        return [addZero(date.getDate()),
                addZero(date.getMonth()+1),
                date.getFullYear().toString()
                .replace('\/20', '\/')]
                .join('/');
      }
      var date = dateFormat(new Date());

      var newHistory = store.createRecord('history', {
    		date: date,
      });

      store.findRecord('coffee', selectedId).then((coffee) => {
        newHistory.set('coffee', coffee);
        var cost = Number(coffee.get('cost'));
        var expense = Number(this.get('expense'));
        expense += cost;
        this.set('expense', Math.round(expense*100)/100);
      });
      store.findRecord('user', 1).then(function(user){
        newHistory.set('user', user);
      });

      // newHistory.save();
    }
  }
});
