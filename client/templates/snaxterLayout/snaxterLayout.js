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
    userIsUndecided: function() {
      let user = Meteor.users.findOne(Meteor.userId());
      //console.log("userIsUndecided: ",user);

      if (user.profile == null) {
        return false; // not really decided, but we don't wanna force guest user to decide
      }
      else if (user.profile.isDecided) {
        return false;
      }

      return true;
    },
    redirectToAddressEntry: function() {
      if (!Blaze._globalHelpers.isLoggedIn(false)) {
        return false;
      }
      if (ReactionRouter.current().route.name == "account/profile") {
        return false;
      }

      ReactionCore.Subscriptions.Account = ReactionSubscriptions.subscribe("Accounts", Meteor.userId());
      if (ReactionCore.Subscriptions.Account.ready()) {
        console.log("snaxterLayout.js: Account sub ready");
        let user = ReactionCore.Collections.Accounts.findOne({_id: Meteor.userId()});
        //let user = ReactionCore.Collections.Accounts.findOne(Meteor.userId());
        console.log("userHasAddress: ",user);
        if (user == null) {
          return false;
        }

        if (user != null
            && user.profile != null
            && user.profile.addressBook != null
            && user.profile.addressBook.length > 0) {
          return false;
        }
        else {
          /*
          Alerts.alert(
            {
              title: i18next.t("accountsUI.error.noAddress", "No address"),
              text: i18next.t("accountsUI.error.youNeedToEnterYourAddress", "You need to enter your address."),
              type: "info",
            },
            function() {
              //ReactionRouter.go("/account/profile");
              //window.location.href = "/snaxter/account/profile";
            }
          );*/
          return true;
        }
      }
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
