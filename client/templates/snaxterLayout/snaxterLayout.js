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
      return false; // because for the moment we have a separate static start page

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
      if (ReactionRouter.current().route.name == "account/profile") {
        return false;
      }

      if (ReactionCore.Subscriptions.Account.ready()) {
        console.log("Account sub ready");
        let user = ReactionCore.Collections.Accounts.findOne();
        //let user = ReactionCore.Collections.Accounts.findOne(Meteor.userId());
        console.log("userHasAddress: ",user);
        if (user == null) {
          return false;
        }

        if (user != null && user.profile != null && user.profile.addressBook != null
            && user.profile.addressBook.length > 0) {
          return false;
        }
        else {
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
          );
          return true;
        }
      }

    },
  }
);
