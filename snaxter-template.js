// Write your package code here!

console.log("setting up route...");
ReactionRouter.route('/starter/page/adl', {
  action: function() {
    console.log("route in action!");
    BlazeLayout.render("snaxterLayout"); // , {content: "blogHome"}
  }
});
