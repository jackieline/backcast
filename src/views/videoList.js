var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    // console.log(this.collection);
    //
    this.render();
    this.collection.forEach((video, i) => 
      new VideoListEntryView({
        el: $('.video-list').children()[i], 
        model: video
      })
    );
  },
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
