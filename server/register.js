ReactionCore.registerPackage({
  label: "Snaxter Template",
  name: "snaxter-template",
  icon: "fa fa-cubes",
  autoEnable: true,
  registry: [
    /*
    {
      route: "/", // doesn't work. doing it in routing.js
      name: "startPage",
      template: "snaxterLayout",
      //workflow: "coreProductWorkflow"
    },*/
    {
      route: "/products",
      name: "productsPage",
      template: "products",
      workflow: "coreProductWorkflow"
    },
  ],
/*
  layout: [{
    layout: "coreLayout",
    workflow: "coreProductWorkflow",
    collection: "Products",
    theme: "default",
    enabled: true,
    structure: {
      template: "marketplaceProfile",
      layoutHeader: "layoutHeader",
      layoutFooter: "",
      notFound: "productNotFound",
      dashboardHeader: "",
      dashboardControls: "dashboardControls",
      dashboardHeaderControls: "",
      adminControlsFooter: "adminControlsFooter"
    }
  }]*/
});
