var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field 
    this.set('id', video.id.videoId);
  },

  select: function() {
    // this = the model (because of line 10 in VideoListEntryView)
    this.trigger('jackie', this);
  }

});

// object.on("jackie", function(msg) {
//   alert("Triggered " + msg);
// });

// object.trigger("jackie", 7);