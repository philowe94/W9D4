
const FollowToggle = require('./follow_toggle');
const UsersSearch = require('./users_search');


$(() => {

  const $ftbtns = $('.follow-toggle');
  const fts = [];

  $ftbtns.each( function(idx, el) {
    fts.push(new FollowToggle(el));
  })

  const $usNavs = $('.users-search');
  $usNavs.each( function(idx, el) {
    new UsersSearch(el);
  })
  
});














