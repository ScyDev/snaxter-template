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
  
  api.addAssets('client/templates/startPage/assets/socicon/fonts/socicon.woff', 'client');
  api.addAssets('client/templates/startPage/assets/socicon/fonts/socicon.ttf', 'client');
  api.addAssets('client/templates/startPage/assets/socicon/fonts/socicon.eot', 'client');
  api.addAssets('client/templates/startPage/assets/socicon/fonts/socicon.svg', 'client');
  api.addAssets('client/templates/startPage/assets/images/pasta-527286-1920-1920x1212-47.jpg', 'client');
  api.addAssets('client/templates/startPage/assets/images/icon-transparent-gelb-279x262-57.png', 'client');
  api.addAssets('client/templates/startPage/assets/images/icon-schmal-279x279-42.jpg', 'client');
  api.addAssets('client/templates/startPage/assets/images/1920x1080-1920x1080-33.jpg', 'client');
  api.addAssets('client/templates/startPage/assets/images/mushrooms-756406-1920-1920x1271-23.jpg', 'client');
  api.addAssets('client/templates/startPage/assets/bootstrap/fonts/glyphicons-halflings-regular.eot', 'client');
  api.addAssets('client/templates/startPage/assets/bootstrap/fonts/glyphicons-halflings-regular.ttf', 'client');
  api.addAssets('client/templates/startPage/assets/bootstrap/fonts/glyphicons-halflings-regular.woff', 'client');
  api.addAssets('client/templates/startPage/assets/bootstrap/fonts/glyphicons-halflings-regular.svg', 'client');
  api.addAssets('client/templates/startPage/assets/bootstrap/fonts/glyphicons-halflings-regular.woff2', 'client');

/*
  api.addFiles('client/templates/startPage/assets/socicon/css/socicon.min.css', 'client');
  api.addFiles('client/templates/startPage/assets/jquery-placeholder/jquery.placeholder.min.js', 'client');
  api.addFiles('client/templates/startPage/assets/mobirise/js/script.js', 'client');
  api.addFiles('client/templates/startPage/assets/mobirise/css/mbr-additional.css', 'client');
  api.addFiles('client/templates/startPage/assets/mobirise/css/style.css', 'client');
  api.addFiles('client/templates/startPage/assets/web/assets/jquery/jquery.min.js', 'client');
  api.addFiles('client/templates/startPage/assets/bootstrap/js/bootstrap.min.js', 'client');
  api.addFiles('client/templates/startPage/assets/bootstrap/css/bootstrap.min.css', 'client');
  api.addFiles('client/templates/startPage/assets/formoid/formoid.min.js', 'client');
  api.addFiles('client/templates/startPage/assets/jarallax/jarallax.js', 'client');
  api.addFiles('client/templates/startPage/assets/animate.css/animate.min.css', 'client');
  api.addFiles('client/templates/startPage/assets/smooth-scroll/SmoothScroll.js', 'client');
*/
  api.addFiles('client/templates/startPage/index.html', 'client');
  api.addFiles('client/templates/startPage/snaxterLayout.js', 'client');

  api.addFiles('snaxter-template.js');

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('scydev:snaxter-template');
  api.addFiles('snaxter-template-tests.js');
});
