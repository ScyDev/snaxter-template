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
    showDisconnectionMessage: function() {
      var now = moment();
      var offlineMessage = i18next.t("app.appIsOffline", "You lost the connection");
      if  (now.diff(this.firedAt, 'seconds') > 20 || this.firedAt == null) {
        Alerts.alert({
          title: i18next.t("app.offline", "No Connection"),
          text: i18next.t("app.appIsOffline", "You lost the connection!"),
          type: "info",
        });
        Alerts.inline(offlineMessage, "error", {
          placement: "connectionStatus",
          dismissable: false,
          alertsLimit: 1,
          i18nKey: "app.appIsOffline"
        });
        this.firedAt = moment();
      }
    }
  }
);


Template.registerHelper('isDisconnected', function() {
  if(Meteor.status().status === "connected") {
    Alerts.removeSeen();
    return false;
  }
  else {
    return true;
  }
});
