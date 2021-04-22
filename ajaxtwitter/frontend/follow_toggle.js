


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
};


FollowToggle.prototype.handleClick = function() {
  this.$el.on("click", (e) => {
    e.preventDefault(); 

    if (this.followState) {
      $.ajax({
        url: `/users/${this.user_id}/follow`,
        type: "DELETE",
        dataType: "json",
        success: response => {
          console.log("Unfollow was successful!");
          this.followState = !this.followState;
          this.render(); 
        },
        errors: response => { 
          console.log(response); 
          debugger
        },
      });
    } else {
      $.ajax({
        url: `/users/${this.user_id}/follow`,
        type: "POST",
        dataType: "json",
        success: (response) => {
          console.log("follow success!!");
          this.followState = !this.followState;
          this.render(); 
        },
        errors: response => { console.log(response); },
      })
    }


  });
}







module.exports = FollowToggle;