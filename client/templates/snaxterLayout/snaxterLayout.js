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
      ReactionCore.Subscriptions.Account = ReactionSubscriptions.subscribe("Accounts", Meteor.userId());
      if (ReactionCore.Subscriptions.Account.ready()) {
        let account = ReactionCore.Collections.Accounts.findOne({_id: Meteor.userId()});
        console.log("userIsUndecided(): Account ",account,Roles.userIsInRole("anonymous"));

        if (Roles.userIsInRole(Meteor.userId(), "anonymous", ReactionCore.getShopId())) {
          console.log("userIsUndecided(): false because anonymous");
          return false; // not really decided, but we don't wanna force guest user to decide
        }
        else if (account.isDecided === true) {
          console.log("userIsUndecided(): false because decided");
          return false;
        }

        console.log("userIsUndecided(): true");
        return true;
      }

      console.log("userIsUndecided(): false because Accounts sub not ready");
      return false;
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
        let account = ReactionCore.Collections.Accounts.findOne({_id: Meteor.userId()});
        //let account = ReactionCore.Collections.Accounts.findOne(Meteor.userId());
        console.log("userHasAddress: ",account);
        if (account == null) {
          return false;
        }

        if (account != null
            && account.profile != null
            && account.profile.addressBook != null
            && account.profile.addressBook.length > 0) {
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
  }
);
