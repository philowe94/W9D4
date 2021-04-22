const APIUtil = require("./api_util");
const FollowToggle = require("./follow_toggle");

function UsersSearch(navEl) {
  const $navEl = $(navEl);
  this.$navEl = $navEl; 
  this.$input = $(`.${$navEl.attr('class')} > input`);
  this.$ul = $(`.${$navEl.attr('class')} > ul`);

  this.handleInput(); 
}

UsersSearch.prototype.handleInput = function() {

  const successCB = response => {
    
    this.renderResults(response); 
    console.log('success!!');
  }

  const errorCB = response => { 
    console.log(response); 
    console.log('error');
  };

  this.$input.on("input", (e) => {
    let val = this.$input.val();
    APIUtil.searchUsers(val).then(successCB, errorCB);
  })
};

UsersSearch.prototype.renderResults = function(users) {
  this.$ul.empty();

  for(let i = 0; i < users.length; i++) {
    let $li = $("<li>");
    let $a = $("<a>");
    $a.attr("href", `${users[i].id}`);
    $a.text(users[i].username);
    $li.append($a);

    let $button = $("<button>");
    $button.addClass('follow-toggle');
    let options = {
      userId: users[i].id,
      followState: users[i].followed,
    }
    new FollowToggle($button[0], options);
    
    $li.append($button);
    this.$ul.append($li);

  }
}








module.exports = UsersSearch; 

