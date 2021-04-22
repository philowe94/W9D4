const APIUtil = require("./api_util");

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
    // $li.append($("<a>").attr("href", `users/${users[i].id}`))
    let $a = $("<a>");
    $a.attr("href", `${users[i].id}`);
    $a.text(users[i].username);
    $li.append($a);
    
    this.$ul.append($li);

  }
}








module.exports = UsersSearch; 

