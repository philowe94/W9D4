/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module) => {




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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/

const FollowToggle = __webpack_require__(/*! ./follow_toggle */ "./frontend/follow_toggle.js");


$(() => {

  const $ftbtns = $('.follow-toggle');
  const fts = [];

  $ftbtns.each( function(idx, el) {
    fts.push(new FollowToggle(el));
  })


  
});















})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map