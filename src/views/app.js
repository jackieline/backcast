var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    // console.log(this.videos);
    this.render();
    this.videoList = new VideoListView({
      el: $('.list'),
      collection: this.videos
    });
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
