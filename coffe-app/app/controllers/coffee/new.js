import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addCoffee(desc, cost){
      var newCoffee = this.store.createRecord('coffee', {
        name: desc,
        cost: cost
      });
      newCoffee.save();
    }
  }
});
