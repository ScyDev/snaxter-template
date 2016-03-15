
console.log("setting up route...");
ReactionRouter.route('/startingness/page/adl', {
  action: function() {
    console.log("route in action!");
    BlazeLayout.render("snaxterLayout"); // , {content: "blogHome"}
  }
});
