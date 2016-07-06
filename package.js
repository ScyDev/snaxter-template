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
  // http://stackoverflow.com/questions/24143504/meteor-package-how-to-add-static-files
  api.addAssets([
    'client/templates/snaxterLayout/assets/images/snaxter_hintergrund.png',
    'client/templates/snaxterLayout/assets/images/holz.jpg',
    'client/templates/snaxterLayout/assets/images/snaxter_icon.jpg',
    'client/templates/snaxterLayout/assets/images/wandtafel.jpg',
    'client/templates/snaxterLayout/assets/images/zuckerrohr.png',
    'client/templates/snaxterLayout/assets/images/scydev-logo.png',

    'client/templates/snaxterLayout/assets/socicon/fonts/socicon.woff',
    'client/templates/snaxterLayout/assets/socicon/fonts/socicon.ttf',
    'client/templates/snaxterLayout/assets/socicon/fonts/socicon.eot',
    'client/templates/snaxterLayout/assets/socicon/fonts/socicon.svg',
    'client/templates/snaxterLayout/assets/bootstrap/fonts/glyphicons-halflings-regular.eot',
    'client/templates/snaxterLayout/assets/bootstrap/fonts/glyphicons-halflings-regular.ttf',
    'client/templates/snaxterLayout/assets/bootstrap/fonts/glyphicons-halflings-regular.woff',
    'client/templates/snaxterLayout/assets/bootstrap/fonts/glyphicons-halflings-regular.svg',
    'client/templates/snaxterLayout/assets/bootstrap/fonts/glyphicons-halflings-regular.woff2',

    'client/templates/snaxterLayout/assets/jquery-placeholder/jquery.placeholder.min.js',

    'client/templates/snaxterLayout/assets/formoid/formoid.min.js',

    'client/templates/snaxterLayout/ie-css-hacks.css',
  ], 'client' );

  api.addFiles([
    'client/templates/snaxterLayout/assets/socicon/css/socicon.min.css',
    'client/templates/snaxterLayout/assets/mobirise/css/mbr-additional.css',
    'client/templates/snaxterLayout/assets/mobirise/css/style.css',
    'client/templates/snaxterLayout/assets/bootstrap/css/bootstrap.min.css',
    // 'client/templates/snaxterLayout/assets/animate.css/animate.min.css',
    'client/templates/snaxterLayout/ie-css-hacks-10-up.css',
    'client/templates/snaxterLayout/snaxterLayout.less',
    'client/templates/snaxterLayout/fixes.css',

    // 'client/templates/snaxterLayout/assets/bootstrap/js/bootstrap.min.js',
    'client/templates/snaxterLayout/assets/smooth-scroll/SmoothScroll.js',
    'client/templates/snaxterLayout/assets/jarallax/jarallax.js',
    'client/templates/snaxterLayout/assets/mobirise/js/script.js',
    // 'client/templates/snaxterLayout/assets/formoid/formoid.min.js',
  ], 'client');

  api.addFiles('server/register.js', 'server');
  api.addFiles('server/methods/accounts.js', 'server');

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('scydev:snaxter-template');
  api.addFiles('snaxter-template-tests.js');
});
