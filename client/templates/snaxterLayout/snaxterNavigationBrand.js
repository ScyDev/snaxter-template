
Template.snaxterNavigationBrand.replaces("coreNavigationBrand");

Template.coreNavigationBrand.events({
  "click .brand"(event, instance) {
    ReactionRouter.go("/");
  },
});
