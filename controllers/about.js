Blogger.AboutController = Ember.Controller.extend({
  isPictureShowing: false,
  
  actions: {
    showRealName: function() {
      alert('Dracula is not fictional, and his real name is Dracula.');
    }, 
    showPicture: function() {
      this.set('isPictureShowing', true);
    },
    hidePicture: function () {
      this.set('isPictureShowing', false);
    }
  }
  
});