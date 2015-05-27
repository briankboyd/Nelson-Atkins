
'use strict';

var Gallery = Gallery || {};

Gallery.ImageModel = Backbone.Model.extend({

});

Gallery.ImagesCollection = Backbone.Collection.extend({
  model: Gallery.ImageModel,
  url: '/images'

});

//var images = new Gallery.ImagesCollection();
//images.fetch().then(function() {
//  console.log(images.toJSON());
//});

Gallery.AppView = Backbone.View.extend({

  el : '#img_container',
  render : function() {
    var template = $("#img-list-view").html();
    var compiled = _.template(template, this.model.toJSON());
    this.$el.html(compiled);
    return this;
  }
});

Gallery.ImageListView = Backbone.View.extend({
  initialize : function() {
    this.collection.bind('reset', this.render, this);
  },

  render: function() {
    var els = [];
    this.collection.each(function(item) {
      var appView = new Gallery.AppView({ model : item });
      els.push(appView.render().el);
    });
    $(this.el).html(els);
  }
});

var imageCollection = new Gallery.ImagesCollection();
imageCollection.fetch({
  success : function(coll, resp, options) {
    var imageListView = new Gallery.ImageListView({collection : imageCollection});
    imageListView.render();
  },

  error : function(coll, resp, options) {
    console.log('Ohh Noooo');
  }
});




