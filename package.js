Package.describe({
  summary: "Rickshaw is a JavaScript toolkit for creating interactive time series graphs."
});

Package.on_use(function (api) {
  console.log('-----> adding d3 dependency');
  api.use('d3', 'client');
  console.log('-----> d3 added');

  api.add_files('lib/rickshaw/rickshaw.css', 'client');
  api.add_files('lib/rickshaw/rickshaw.js', 'client');
});
