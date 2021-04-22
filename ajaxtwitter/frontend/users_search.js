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
    // this.render(); 
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










module.exports = UsersSearch; 

