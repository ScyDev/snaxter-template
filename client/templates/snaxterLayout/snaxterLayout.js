/*
Template.snaxterHead.inheritsHelpersFrom(["layoutHead"]);
Template.snaxterHead.inheritsEventsFrom(["layoutHead"]);
Template.snaxterHead.inheritsHooksFrom(["layoutHead"]);
*/
//Template.snaxterHead.replaces("coreHead");

/*
Template.snaxterLayout.inheritsHelpersFrom(["layoutCore"]);
Template.snaxterLayout.inheritsEventsFrom(["layoutCore"]);
Template.snaxterLayout.inheritsHooksFrom(["layoutCore"]);
*/
//Template.snaxterLayout.replaces("coreLayout");

console.log("setting up route...");
ReactionRouter.route('/starting/page/adl', {
  action: function() {
    console.log("route in action!");
    BlazeLayout.render("snaxterLayout"); // , {content: "blogHome"}
  }
});

Template.snaxterLayout.onRendered(function(){
    //console.log("template 'layout' rendered!");
  }
);

//Template.coreLayout.helpers( // if using to replace a template
Template.snaxterLayout.helpers( // if this template is rendered by a route
  {
    urlForImage: function(relativeUrl) {
      return "/packages/scydev_snaxter-template/client/templates/snaxterLayout/"+relativeUrl;
    },
  }
);
