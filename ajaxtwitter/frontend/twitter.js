
const FollowToggle = require('./follow_toggle');


$(() => {

  const $ftbtns = $('.follow-toggle');
  const fts = [];

  $ftbtns.each( function(idx, el) {
    fts.push(new FollowToggle(el));
  })


  
});














