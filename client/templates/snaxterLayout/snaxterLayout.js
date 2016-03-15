/*
Template.snaxterHead.inheritsHelpersFrom(["coreHead"]);
Template.snaxterHead.inheritsEventsFrom(["coreHead"]);
Template.snaxterHead.inheritsHooksFrom(["coreHead"]);
*/
//Template.snaxterHead.replaces("coreHead");

/*
Template.snaxterLayout.inheritsHelpersFrom(["coreLayout"]);
Template.snaxterLayout.inheritsEventsFrom(["coreLayout"]);
Template.snaxterLayout.inheritsHooksFrom(["coreLayout"]);
*/
//Template.snaxterLayout.replaces("coreLayout");

Template.snaxterLayout.onRendered(function(){
    //console.log("template 'layout' rendered!");
  }
);

//Template.coreLayout.helpers( // if using to replace a template
Template.snaxterLayout.helpers( // if this template is rendered by a route
  {
    urlFor: function(relativeUrl) {
      return "/packages/scydev_snaxter-template/client/templates/snaxterLayout/"+relativeUrl;
    },
  }
);
