Package.describe({
  name: 'scydev:snaxter-template',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'The SNAXTER theme',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  // meteor base packages
  api.use("standard-minifiers");
  api.use("mobile-experience");
  api.use("meteor-base");
  api.use("mongo");
  api.use("blaze-html-templates");
  api.use("session");
  api.use("jquery");
  api.use("tracker");
  api.use("logging");
  api.use("reload");
  api.use("random");
  api.use("ejson");
  api.use("spacebars");
  api.use("check");

  api.use('ecmascript');
  api.use('templating');
  api.use("less");
  api.use("reactioncommerce:core@0.10.0");

  api.use("reactioncommerce:reaction-router");
  api.use("kadira:blaze-layout@2.3.0");

  api.addFiles('server/security/browserPolicy.js', 'server');

  api.addFiles('client/templates/snaxterLayout/index.html', 'client');
  api.addFiles('client/templates/snaxterLayout/snaxterLayout.js', 'client');
  api.addFiles('client/templates/snaxterLayout/snaxterNavigationBrand.html', 'client');
  api.addFiles('client/templates/snaxterLayout/snaxterNavigationBrand.js', 'client');

  api.addFiles('client/routing/routing.js', 'client'); // this needs to be here. doesn't work further down. why?

  // apparently it's important that these come after template
  api.addAssets('client/templates/snaxterLayout/assets/images/hintergrund-homepage-neu-2000x1050-13-1400x735-28.png', 'client');
  api.addAssets('client/templates/snaxterLayout/assets/images/hintergrund-homepage-neu-2000x1050-13.png', 'client');
  api.addAssets('client/templates/snaxterLayout/assets/images/holz-hintergrund-buche-5515-1900x1260-26.jpg', 'client');
  api.addAssets('client/templates/snaxterLayout/assets/images/holz-hintergrund-buche-5515-1900x1260-52.jpg', 'client');
  api.addAssets('client/templates/snaxterLayout/assets/images/holz-hintergrund-buche-5515-1900x1260-54.jpg', 'client');
  api.addAssets('client/templates/snaxterLayout/assets/images/holz-hintergrund-buche-5515-1900x1260-56.jpg', 'client');
  api.addAssets('client/templates/snaxterLayout/assets/images/icon-inkl-rand-827x827-31.jpg', 'client');
  api.addAssets('client/templates/snaxterLayout/assets/images/socialmedia-1920x1357-31-1920x1357-44.jpg', 'client');
  api.addAssets('client/templates/snaxterLayout/assets/images/wandtafel-1900x1250-29-1900x1250-59-1900x1250-70.jpg', 'client');
  api.addAssets('client/templates/snaxterLayout/assets/images/wandtafel-1900x1250-29-1900x1250-59.jpg', 'client');
  api.addAssets('client/templates/snaxterLayout/assets/images/wandtafel-1900x1250-29-1900x1250-84.jpg', 'client');
  api.addAssets('client/templates/snaxterLayout/assets/images/zuckerrohr-dunkel-1920x579-39.png', 'client');

  api.addAssets('client/templates/snaxterLayout/assets/socicon/fonts/socicon.woff', 'client');
  api.addAssets('client/templates/snaxterLayout/assets/socicon/fonts/socicon.ttf', 'client');
  api.addAssets('client/templates/snaxterLayout/assets/socicon/fonts/socicon.eot', 'client');
  api.addAssets('client/templates/snaxterLayout/assets/socicon/fonts/socicon.svg', 'client');
  api.addAssets('client/templates/snaxterLayout/assets/bootstrap/fonts/glyphicons-halflings-regular.eot', 'client');
  api.addAssets('client/templates/snaxterLayout/assets/bootstrap/fonts/glyphicons-halflings-regular.ttf', 'client');
  api.addAssets('client/templates/snaxterLayout/assets/bootstrap/fonts/glyphicons-halflings-regular.woff', 'client');
  api.addAssets('client/templates/snaxterLayout/assets/bootstrap/fonts/glyphicons-halflings-regular.svg', 'client');
  api.addAssets('client/templates/snaxterLayout/assets/bootstrap/fonts/glyphicons-halflings-regular.woff2', 'client');

  // http://stackoverflow.com/questions/24143504/meteor-package-how-to-add-static-files
  api.addFiles('client/templates/snaxterLayout/assets/socicon/css/socicon.min.css', 'client', {isAsset: true});
  api.addFiles('client/templates/snaxterLayout/assets/mobirise/css/mbr-additional.css', 'client', {isAsset: true});
  api.addFiles('client/templates/snaxterLayout/assets/mobirise/css/style.css', 'client', {isAsset: true});
  api.addFiles('client/templates/snaxterLayout/assets/bootstrap/css/bootstrap.min.css', 'client', {isAsset: true});
  //api.addFiles('client/templates/snaxterLayout/assets/animate.css/animate.min.css', 'client', {isAsset: true});

  api.addFiles('client/templates/snaxterLayout/assets/jquery-placeholder/jquery.placeholder.min.js', 'client', {isAsset: true});
  api.addFiles('client/templates/snaxterLayout/assets/mobirise/js/script.js', 'client', {isAsset: true});
  api.addFiles('client/templates/snaxterLayout/assets/web/assets/jquery/jquery.min.js', 'client', {isAsset: true});
  api.addFiles('client/templates/snaxterLayout/assets/bootstrap/js/bootstrap.min.js', 'client', {isAsset: true});
  api.addFiles('client/templates/snaxterLayout/assets/formoid/formoid.min.js', 'client', {isAsset: true});
  api.addFiles('client/templates/snaxterLayout/assets/jarallax/jarallax.js', 'client', {isAsset: true});
  api.addFiles('client/templates/snaxterLayout/assets/smooth-scroll/SmoothScroll.js', 'client', {isAsset: true});

  api.addFiles('client/templates/snaxterLayout/snaxterLayout.less', 'client');

  api.addFiles('server/register.js', 'server');
  api.addFiles('server/methods/accounts.js', 'server');

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('scydev:snaxter-template');
  api.addFiles('snaxter-template-tests.js');
});
