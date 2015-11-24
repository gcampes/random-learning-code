import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    selectCoffee(item){
      this.controller.set('selectedCoffee', item);
      this.get('targetObject').set('selectedCoffee', item);
    },

    createHistory(){
      this.sendAction('createHistory');
    }
  },
});
