
//data
Gallery.ImageModel = Backbone.Model.extend({
  defaults : {
    description : ''
  }
});

Gallery.ImagesCollection = Backbone.Collection.extend({
  //specify the model to use
  model: Gallery.ImageModel,
  //api endpoint for the images json
  url: '/images',
  //override the parse function to return the json in the correct format
  parse : function(data) {
    return data.images;
  }
});


//view
Gallery.ImageView = Gallery.ItemView.extend({
  template :  "#img-list-view"
});

Gallery.ImageListView = Gallery.ListView.extend({
  el : '#img_container',
  ItemView : Gallery.ImageView
});
