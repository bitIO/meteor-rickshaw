Package.describe({
  summary: "Rickshaw is a JavaScript toolkit for creating interactive time series graphs."
});

Package.on_use(function (api) {
  api.use('d3', 'client');

  if (api.export) api.export('Rickshaw', 'client');

  api.add_files('lib/rickshaw/rickshaw.min.css', 'client');
  api.add_files('lib/rickshaw/rickshaw.min.js', 'client');
});
