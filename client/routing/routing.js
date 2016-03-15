/*
selectLayout = (layout, setLayout, setWorkflow) => {
  const currentLayout = setLayout || "coreLayout";
  const currentWorkflow = setWorkflow || "coreWorkflow";
  if (layout.layout === currentLayout && layout.workflow === currentWorkflow && layout.enabled === true) {
    return layout;
  }
};

renderLayout = (options = {}) => {
  const layout = options.layout || "coreLayout";
  const workflow = options.workflow || "coreWorkflow";

  Tracker.autorun(function () {
    if (ReactionCore.Subscriptions.Shops.ready()) {
      const shop = ReactionCore.Collections.Shops.findOne(ReactionCore.getShopId());
      if (shop) {
        const newLayout = shop.layout.find((x) => selectLayout(x, layout, workflow));
        // oops this layout wasn't found. render notFound
        if (!newLayout) {
          ReactionCore.Log.warn("Failed to render layout", layout, workflow);
          // BlazeLayout.render("notFound");
        } else {
          const layoutToRender = Object.assign({}, newLayout.structure, options);
          BlazeLayout.render(layout, layoutToRender);
        }
      }
    }
  });
};*/

ReactionRouter.route('/start', {
  action: function() {
    BlazeLayout.render("snaxterLayout"); // , {content: "blogHome"}
  }
});
/*
ReactionRouter.route('/reaction/products', {
  action: function() {
    BlazeLayout.render("coreLayout");
  }
});
ReactionRouter.route('/products', {
  action: function() {
    //BlazeLayout.render("products");
    //renderLayout();
    BlazeLayout.render("coreLayout", "coreWorkflow");
  }
});
ReactionRouter.route('/productGrid', {
  action: function() {
    BlazeLayout.render("productGrid");
  }
});*/
