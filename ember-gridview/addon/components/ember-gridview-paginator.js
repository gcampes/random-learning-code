import Ember from 'ember';

export default Ember.Component.extend({
  pages: Ember.computed('pageCount', function(){
    var pages = [];

    for (var i = 0; i < this.get('pageCount'); i++) {
      pages[i] = i + 1;
    }

    return pages;
  }),

  actions: {
    movePage(page){
      this.get('parentView').send('movePage', page);
    }
  }
});
