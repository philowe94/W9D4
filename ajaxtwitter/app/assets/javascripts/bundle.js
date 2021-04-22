/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/api_util.js":
/*!******************************!*\
  !*** ./frontend/api_util.js ***!
  \******************************/
/***/ ((module) => {

const APIUtil = {
    followUser: id => {
        return $.ajax({
            url: `/users/${id}/follow`,
            type: "POST",
            dataType: "json",
        })
    },

    unfollowUser: id => {
        return $.ajax({
            url: `/users/${id}/follow`,
            type: "DELETE",
            dataType: "json",
        });
    }
};

module.exports = APIUtil;

/***/ }),

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const APIUtil = __webpack_require__(/*! ./api_util */ "./frontend/api_util.js");

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