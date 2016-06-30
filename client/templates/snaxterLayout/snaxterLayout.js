/*
Template.snaxterHead.inheritsHelpersFrom(["coreHead"]);
Template.snaxterHead.inheritsEventsFrom(["coreHead"]);
Template.snaxterHead.inheritsHooksFrom(["coreHead"]);
*/
// Template.snaxterHead.replaces("coreHead");

/*
Template.snaxterLayout.inheritsHelpersFrom(["coreLayout"]);
Template.snaxterLayout.inheritsEventsFrom(["coreLayout"]);
Template.snaxterLayout.inheritsHooksFrom(["coreLayout"]);
*/
Template.snaxterLayout.replaces("coreLayout");

// Template.coreLayout.onRendered(function(){
//   window.initParallaxEtc();
// });

Template.coreLayout.onCreated(() => {
  Tracker.autorun(() => {
    ReactionRouter.watchPathChange();
    /* Wait a bit to let the Template finish rendering */
    Meteor.setTimeout(() => window.initParallaxEtc(), 300);
  });
});


Template.coreLayout.helpers( // if using to replace a template
//Template.snaxterLayout.helpers( // if this template is rendered by a route
  {
    urlFor: function(relativeUrl) {
      return "/packages/scydev_snaxter-template/client/templates/snaxterLayout/"+relativeUrl;
    },
    showStartPageLayout: function() {
      var routeName = ReactionRouter.getRouteName();
      //console.log("Current route name is: ", routeName);
      //console.log("Current route name is: ", ReactionRouter.current());

      return (routeName != null && (routeName == "index" || ReactionRouter.current().path.indexOf("/tag/") > 0 ));
    },
    showStartPageButtons: function() {
      var routeName = ReactionRouter.getRouteName();

      if (routeName != null && (routeName == "index")) {
        return "visible";
      }

      return "hidden";
    },
    hostname: function() {
      let rootUrl = Meteor.absoluteUrl();
      //console.log("Meteor.absoluteUrl(): "+rootUrl);
      if (rootUrl == "http://localhost/") {
        rootUrl = "http://localhost:3000/";
      }
      return rootUrl;
    },
  }
);

Template.coreLayout.events({
  "click .some-register-button": function (event, template) {
    // switch to register form
    $('a[data-event-action="signUp"]').trigger('click');

    // this works when called from the JS console, but doesn't work when called directly. it's just ognored.
    // calling it from setTimeout() seems to make the call to appear to come from top level, as if entered by console.
    window.setTimeout(function() {
      $(".dropdown-toggle").dropdown("toggle");
    }, 10);

    $('html, body').animate({
        scrollTop: $("#products-anchor").offset().top
    }, "fast");

  },
});
