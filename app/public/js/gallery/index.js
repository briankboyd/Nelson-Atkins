
'use strict';

var Gallery = Gallery || {
    init : function() {
      //instantiate new collection
      Gallery.imageCollection = new Gallery.ImagesCollection();
      //call the async fetch function and on success create a new list view passing in the object literal collection

      Gallery.imageListView = new Gallery.ImageListView({ collection : Gallery.imageCollection });
      Gallery.imageCollection.fetch();

    //  Gallery.imageCollection.fetch({
    //    success : function(coll, resp, options) {
    //      Gallery.imageListView = new Gallery.ImageListView({collection : Gallery.imageCollection});
    //      Gallery.imageListView.render();
    //    },
    //
    //    error : function(coll, resp, options) {
    //      console.log('Ohh Noooo');
    //    }
    //  });
    },

    start : function() {
      Gallery.init();
    }
  };








