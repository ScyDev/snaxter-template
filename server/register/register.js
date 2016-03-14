
ReactionCore.registerPackage({
  label: "Snaxter Layout",
  name: "snaxter-template",
  icon: "fa fa-map",
  autoEnable: true,
  settings: {},
  registry: [
    {
      route: "/start/page",
      template: "snaxterLayout",
      name: "start/page",
      label: "Snaxter Layout",
      icon: "fa fa-cutlery",
      provides: "userAccountDropdown"
    },/*
    {
      route: "/account/seller/sellerorders",
      template: "sellerOrders",
      name: "account/seller/sellerorders",
      label: "My Orders",
      icon: "fa fa-shopping-bag",
      provides: "userAccountDropdown",
      permissions: [
        {
          label: "Seller Orders",
          permission: "account/seller/sellerorders"
        },
      ]
    },*/
  ],
});
