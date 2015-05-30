'use strict'

// The Base View from which (almost) all views inherit
Gallery.View = Backbone.View.extend({
    render: function () {

        var source = $(this.template).html();
        var data = {};
        if (this.model) {
            data = this.model.toJSON();
        }

        var compiled = _.template(source);
        this.$el.html(compiled(data));
        return this;
    }
});

//Items for a list
Gallery.ItemView = Gallery.View.extend({

});

//Typical ListView functionality kept here
Gallery.ListView = Backbone.View.extend({
    initialize : function () {
        this.collection.bind("reset", this.render, this); //when fetch is called the reset event is fired and then we call the render function
        this.collection.bind("add", this.render, this);
        this.collection.bind("remove", this.render, this);
    },

    render: function () {

        var self = this;
        var els = [];
        this.$el.empty();
        this.collection.each(function (item) {
            var itemView = new self.ItemView({ model: item });
            els.push(itemView.render().el);
        });

        this.$el.append(els);
        return this;
    }
});