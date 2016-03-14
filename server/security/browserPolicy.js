Meteor.startup(function() {
  return BrowserPolicy.content.allowOriginForAll("*.youtube.com");
});
