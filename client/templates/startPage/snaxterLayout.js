/*
Template.snaxterHead.inheritsHelpersFrom(["layoutHead"]);
Template.snaxterHead.inheritsEventsFrom(["layoutHead"]);
Template.snaxterHead.inheritsHooksFrom(["layoutHead"]);
*/
Template.snaxterHead.replaces("coreHead");
/*
Template.snaxterLayout.inheritsHelpersFrom(["layoutCore"]);
Template.snaxterLayout.inheritsEventsFrom(["layoutCore"]);
Template.snaxterLayout.inheritsHooksFrom(["layoutCore"]);
*/
Template.snaxterLayout.replaces("coreLayout");
console.log("ello?");

Template.snaxterLayout.onRendered(function(){
    console.log("template 'layout' rendered!");
  }
);
