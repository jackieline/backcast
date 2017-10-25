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
      model: this.videos.at(0),
      collection: this.videos
    });
    return this;
  },

  template: templateURL('src/templates/app.html')

});

// (videoListEntryView) click on video title
// click event emitted (HAPPENS IN THE DOM)
// (videoListEntryView) controller hears the click
// (videoListEntryView) controller invokes function on model
// (videoList) model emits some event - jackie (how does a model emit an event if the model doesn't change? one theory: add some property to keep track)
// (videoPlayer) view hears jackie event
// (videoPlayer) invoke render 
// the clicked video should be in main player