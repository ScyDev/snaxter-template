
console.log("setting up route...");
ReactionRouter.route('/starting/page/adl', {
  action: function() {
    console.log("route in action!");
    BlazeLayout.render("snaxterLayout"); // , {content: "blogHome"}
  }
});
