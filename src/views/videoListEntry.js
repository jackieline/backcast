var VideoListEntryView = Backbone.View.extend({
  
 
  initialize: function(video) {
    // this.id = this.model.get('id')
    this.render();
    var context = this;
    this.$el.on('click', function(event) {
      // take the video we clicked on off the collection
      context.model.select();
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




// (videoListEntryView) (USER DOES THIS) click on video title
// click event emitted (HAPPENS IN THE DOM)
// (videoListEntryView) controller hears the click
// (videoListEntryView) controller invokes function on model