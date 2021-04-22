const APIUtil = require("./api_util");

function FollowToggle(el) {
  const $el = $(el);
  this.$el = $el;
  this.user_id = $el.data('userId');
  this.followState = $el.data('initialFollowState'); 

  this.render();
  this.handleClick(); 
}

FollowToggle.prototype.render = function() {
  if (this.followState) {
    this.$el.text("Unfollow!");
  } else {
    this.$el.text("Follow!");
  }
  this.$el.prop("disabled", false);
};

FollowToggle.prototype.handleClick = function() {

  this.$el.on("click", (e) => {

    e.preventDefault(); 
    $(e.target).prop("disabled", true);

    const successCallback = (response) => {
        this.followState = !this.followState;
        this.render(); 
    };
    
    const errorCallback = (response) => { 
        console.log(response); 
    };

    if (this.followState) {
      APIUtil.unfollowUser(this.user_id)
      .then(successCallback, errorCallback);
    } else {
      APIUtil.followUser(this.user_id)
      .then(successCallback, errorCallback);
    }
  });
}

module.exports = FollowToggle;