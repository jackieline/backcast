var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    new VideoListView({
      el: $('.list'),
      collection: this.videos
    });
    new VideoPlayerView({
      el: $('.player'),
      model: this.videos.at(0)
    });
    return this;
  },

  template: templateURL('src/templates/app.html')

});
