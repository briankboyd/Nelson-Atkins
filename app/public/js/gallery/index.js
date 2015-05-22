
'use strict';

var Gallery = Gallery || {};

Gallery.Image = Backbone.Model.extend({

});

Gallery.Images = Backbone.Collection.extend({
  model: Gallery.Image,
  url: '/images'
});

var images = new Gallery.Images();
images.fetch().then(function() {
  console.log(images.toJSON());
});
