import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ember-imdt-modal'],

  responseDidChange: Ember.observer('modal.response', function(){
    console.log(this.get('modal.response'));
  }),

  actions:{
    modalClose(){
      this.modal.hide();
    },
    modalCancel(){
      this.modal.set('response', false);
      this.send('modalClose');
    },
    modalConfirm(){
      this.modal.set('response', true);
      this.send('modalClose');
    }
  },
});
