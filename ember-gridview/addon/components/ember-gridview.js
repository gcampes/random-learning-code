import Ember from 'ember';

export default Ember.Component.extend({
  // tagName: 'table',
  // classNames: ['ember-gridview'],
  search: true,
  pagination: true,
  searchFieldValue: null,
  didSearch: false,
  currentPage: 1,
  itemsPerPage: 15,
  originalLoaded: false,


  bodyContent: Ember.computed('model', 'currentPage', 'filteredCount', function(){
    //Prepare content
    var model = this.get('model');

    var modelLength = model.length;

    if(typeof modelLength != "number")
      modelLength = model.get('length');


    var i = 0;
    var arrayModel = [];

    model.forEach(function(item){
      arrayModel[i] = [];
      arrayModel[i]['id'] = item.get('id');
      item.eachAttribute(function(name, meta){
        arrayModel[i][name] = item.get(name);
      })
      i++;
    });
    var itemsPerPage = this.get('itemsPerPage');
    var currentPage = this.get('currentPage');

    var content = [];
    var indexi = 0;

    //Transfer properties to array
    arrayModel.forEach((item) => {
      var indexj = 0;
      content[indexi] = [];
      for(var key in item){
        if(item.hasOwnProperty(key)){
          content[indexi][indexj] = item[key];
        }
        indexj++;
      }
      indexi++;
    });

    this.set('filteredCount', content.length);

    if(!this.get('originalLoaded')){
      this.set('originalContent', content);
      this.set('originalLoaded', true);
    }
    return content.slice((itemsPerPage*(currentPage-1)), (itemsPerPage*currentPage));
  }),

  pageCount: Ember.computed('filteredCount', 'itemsPerPage', function(){
    return this.get('filteredCount')/this.get('itemsPerPage');
  }),

  actions: {
    search(){
      this.set('currentPage', 1);

      var originalContent = this.get('originalContent');
      var searchFieldValue = this.get('searchFieldValue');
      var bodyContent = this.get('bodyContent');
      var itemsPerPage = this.get('itemsPerPage');
      var currentPage = this.get('currentPage');

      // Set bodyContent to original if search field is empty
      if(!searchFieldValue){
        this.set('filteredCount', originalContent.length);
        this.set('bodyContent', originalContent.slice((itemsPerPage*(currentPage-1)), (itemsPerPage*currentPage)));
        return;
      }

      // Search if any attribute of the elements has the search value
      var searchGrid = (item) => {
        for(var key in item){
          if(item.hasOwnProperty(key)){
            if(item[key].toString().toLowerCase().indexOf(searchFieldValue.toLowerCase()) != -1){
              return true;
            }
          }
        }
        return false;
      }


      // Filter originalContent and sets it to bodyContent
      var bodyContent = originalContent;
      var bodyContent = bodyContent.filter(searchGrid);

      this.set('filteredCount', bodyContent.length);
      this.set('bodyContent', bodyContent.slice((itemsPerPage*(currentPage-1)), (itemsPerPage*currentPage)));

      this.send('colorRows');
    },

    colorRows(){
      setInterval(() => {
        this.$('tr').css({'background-color' : 'transparent'});
        this.$('tr:odd').css({'background-color' : 'rgb(235, 235, 235)'});
      },0)
    },

    movePage(page){
      this.set('currentPage', page);
    }
  },

  didInsertElement(){
    this.send('colorRows');
  }
});
