import Ember from 'ember';

export default Ember.Controller.extend({
  saveChanges(model){
    this.model.save();
  },
});
