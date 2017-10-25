var VideoListEntryView = Backbone.View.extend({
  
 
  initialize: function(video) {
    // this.id = this.model.get('id')
    this.render();
    $('.video-list-entry-title').on('click', function(event) {
      // take the video we clicked on off the collection
      // render it in the video player
      // rerender the video list view by calling app.js's render
      
    });
  },
  render: function() {
    // console.log('VideoListEntry: ', this)
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
