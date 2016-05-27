/*
Template.snaxterHead.inheritsHelpersFrom(["coreHead"]);
Template.snaxterHead.inheritsEventsFrom(["coreHead"]);
Template.snaxterHead.inheritsHooksFrom(["coreHead"]);
*/
Template.snaxterHead.replaces("coreHead");

/*
Template.snaxterLayout.inheritsHelpersFrom(["coreLayout"]);
Template.snaxterLayout.inheritsEventsFrom(["coreLayout"]);
Template.snaxterLayout.inheritsHooksFrom(["coreLayout"]);
*/
Template.snaxterLayout.replaces("coreLayout");

Template.snaxterLayout.onRendered(function(){
  }
);

Template.coreLayout.onCreated(function(){
  /*
    Tracker.autorun(function() {
      var routeName = ReactionRouter.getRouteName();
      console.log("Current route name is: ", routeName);
    });
    */
  }
);


Template.coreLayout.helpers( // if using to replace a template
//Template.snaxterLayout.helpers( // if this template is rendered by a route
  {
    urlFor: function(relativeUrl) {
      return "/packages/scydev_snaxter-template/client/templates/snaxterLayout/"+relativeUrl;
    },
    showStartPageLayout: function() {
      //return false; // because for the moment we have a separate static start page

      var routeName = ReactionRouter.getRouteName();
      //console.log("Current route name is: ", routeName);

      return (routeName != null && routeName == "index");
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
