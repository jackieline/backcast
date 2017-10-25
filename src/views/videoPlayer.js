var VideoPlayerView = Backbone.View.extend({
  
  
  
  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'jackie', function(video) {
      this.model = video;
      this.render();
    });
  },
  
  render: function(video) {
    // this.$el.html('<div class="loading">Please wait...</div>');
    // console.log('VideoPlayer: ', this);
    // if (video) {
    //   this.$el.html(this.template(video.attributes));
    // } else {
    // // console.log('boooop', this)
    this.$el.html(this.template(this.model.attributes));
    return this;
    // }
  },

  template: templateURL('src/templates/videoPlayer.html')

});
